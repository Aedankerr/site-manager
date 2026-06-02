#!/usr/bin/env python3
"""Check Resume workspace pages for stale files and broken local references.

This is a lightweight preflight for Kanban/agent maintenance. It does not edit
files; it reports what should be reviewed before keeping the resume pages up to
date.

Usage:
  ./resume-page-maintenance-check.py
  ./resume-page-maintenance-check.py --stale-days 30
  ./resume-page-maintenance-check.py --json
"""
from __future__ import annotations

import argparse
import json
import re
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from urllib.parse import unquote, urlparse

BASE = Path(__file__).resolve().parent
HTML_ATTR_RE = re.compile(r'''(?:href|src)\s*=\s*["']([^"']+)["']''', re.I)
TITLE_RE = re.compile(r"<title[^>]*>(.*?)</title>", re.I | re.S)
H1_RE = re.compile(r"<h1[^>]*>(.*?)</h1>", re.I | re.S)
TAG_RE = re.compile(r"<[^>]+>")


def clean_html_text(text: str) -> str:
    return re.sub(r"\s+", " ", TAG_RE.sub("", text or "")).strip()


def page_refs(path: Path) -> list[str]:
    text = path.read_text(encoding="utf-8", errors="ignore")
    return HTML_ATTR_RE.findall(text)


def local_ref_target(ref: str) -> str | None:
    ref = ref.strip()
    if not ref or ref.startswith("#"):
        return None
    parsed = urlparse(ref)
    if parsed.scheme in {"http", "https", "mailto", "tel", "data", "javascript"}:
        return None
    if parsed.netloc:
        return None
    return unquote(parsed.path)


def page_summary(path: Path, stale_days: int) -> dict[str, Any]:
    text = path.read_text(encoding="utf-8", errors="ignore")
    title_match = TITLE_RE.search(text)
    h1_match = H1_RE.search(text)
    stat = path.stat()
    age_days = (datetime.now().timestamp() - stat.st_mtime) / 86400
    refs = page_refs(path)
    broken: list[str] = []
    for ref in refs:
        target = local_ref_target(ref)
        if not target:
            continue
        # Ignore root-relative refs because deployment root may differ.
        if target.startswith("/"):
            continue
        target_path = (path.parent / target).resolve()
        try:
            target_path.relative_to(BASE.resolve())
        except ValueError:
            # Skip references outside workspace; report only local workspace issues.
            continue
        if not target_path.exists():
            broken.append(ref)
    return {
        "file": str(path.relative_to(BASE)),
        "title": clean_html_text(title_match.group(1)) if title_match else None,
        "h1": clean_html_text(h1_match.group(1)) if h1_match else None,
        "modified": datetime.fromtimestamp(stat.st_mtime, timezone.utc).isoformat(),
        "age_days": round(age_days, 1),
        "stale": age_days >= stale_days,
        "refs": len(refs),
        "broken_refs": sorted(set(broken)),
    }


def main() -> None:
    p = argparse.ArgumentParser(description="Check Resume workspace HTML pages")
    p.add_argument("--stale-days", type=int, default=30, help="Mark pages stale after N days")
    p.add_argument("--json", action="store_true", help="Emit JSON")
    args = p.parse_args()

    pages = sorted(BASE.glob("*.html")) + sorted((BASE / "archived-multipage-scuffed").glob("*.html"))
    pages += sorted((BASE / "rollback-archive").glob("*.html"))
    pages = [p for p in pages if p.exists()]
    summaries = [page_summary(path, args.stale_days) for path in pages]
    report = {
        "workspace": str(BASE),
        "checked_at": datetime.now(timezone.utc).isoformat(),
        "stale_days": args.stale_days,
        "page_count": len(summaries),
        "stale_count": sum(1 for s in summaries if s["stale"]),
        "broken_ref_count": sum(len(s["broken_refs"]) for s in summaries),
        "pages": summaries,
    }

    if args.json:
        print(json.dumps(report, indent=2))
        return

    print(f"Resume page maintenance check — {report['page_count']} pages")
    print(f"Stale threshold: {args.stale_days} days")
    print(f"Stale pages: {report['stale_count']}")
    print(f"Broken local refs: {report['broken_ref_count']}")
    print()
    for s in summaries:
        flags = []
        if s["stale"]:
            flags.append("STALE")
        if s["broken_refs"]:
            flags.append(f"BROKEN_REFS={len(s['broken_refs'])}")
        flag_text = f" [{' | '.join(flags)}]" if flags else ""
        label = s["title"] or s["h1"] or s["file"]
        print(f"- {s['file']}: {label} ({s['age_days']}d old){flag_text}")
        for ref in s["broken_refs"]:
            print(f"    missing: {ref}")


if __name__ == "__main__":
    main()
