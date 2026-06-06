# Unraid Setup & Testing Guide

This guide walks you through installing, configuring, and verifying **Site Manager** on an Unraid server using either the Community Apps XML templates or the Docker Compose Manager plugin.

---

## Prerequisites

| Requirement | Notes |
|---|---|
| Unraid 7.3.1 | Current target/test version. Templates set `<MinVer>6.9</MinVer>` and intentionally do **not** set `<MaxVer>`, so Unraid 7.3.1 is not excluded. |
| Community Apps plugin | For Method 1 (template install) |
| Docker Compose Manager plugin | For Method 2 (compose install) |
| Unraid terminal access | SSH or the built-in terminal (`Tools → Terminal`) |

---

## Step 1 — Create the AppData Directories

Open a terminal on your Unraid server and run:

```bash
mkdir -p /mnt/user/appdata/site-manager/data
mkdir -p /mnt/user/appdata/site-manager/uploads
```

Both the Admin and Public containers must share **the same** `data` and `uploads` paths.

---

## Method 1 — Community Apps / Custom XML Templates

### 1a. Current status

The repository includes working Unraid XML templates, but Site Manager is not listed in the public Community Apps catalog yet.

- **Current install path:** add the repository templates manually.
- **Future install path:** install **Site Manager (Admin)** and **Site Manager (Public)** directly from the Unraid **Apps** tab once the listing is published.

### 1b. Add the Custom Template Repository

> Skip this step once the templates are published to the Community Apps store.

1. In the Unraid UI, go to **Apps → Settings → Template Repositories**.
2. Add the template repository URL:
   ```
   https://github.com/Aedankerr/site-manager/tree/main/templates
   ```
3. Click **Save** and let the apps list refresh.

### 1c. Install the Admin Container

1. Go to **Apps** and search for **site-manager**.
2. Click **Install** on the **Site Manager (Admin)** template.
3. Review and set each field:

   | Field | Default | Notes |
   |---|---|---|
   | **Admin WebUI Port** | `3010` | The host port for the admin interface |
   | **Admin Port (internal)** | `3010` | Environment variable `PORT`; logs should show admin listening on `3010` |
   | **Public Port (internal)** | `3011` | Environment variable `PUBLIC_PORT`; logs should show public listening on `3011` |
   | **AppData** | `/mnt/user/appdata/site-manager/data` | Must match the Public container |
   | **Uploads** | `/mnt/user/appdata/site-manager/uploads` | Must match the Public container |
   | **DB Path** | `/app/data/site.db` | Leave as default |
   | **Session Secret** | *(blank)* | Set a long random string if using any auth |
   | **Admin Password Hash** | *(blank)* | Leave blank for no local password auth |
   | **Trust Cloudflare Access** | `false` | Set `true` if behind Cloudflare Access |
   | **Allowed Emails** | *(blank)* | CF Access email allowlist (optional) |
   | **Cookie Secure** | `true` | Keep `true` for HTTPS/Cloudflare Tunnel setups |
   | **Upload Max MB** | `15` | Maximum image upload size |
   | **Node Environment** | `production` | Leave as default |

4. Click **Apply**.

### 1d. Install the Public Container

1. Search for **site-manager-public** in Apps.
2. Click **Install** on the **Site Manager (Public)** template.
3. Set the fields:

   | Field | Default | Notes |
   |---|---|---|
   | **Public WebUI Port** | `3011` | The host port for the public interface |
   | **AppData** | `/mnt/user/appdata/site-manager/data` | **Must match the Admin container exactly** |
   | **Uploads** | `/mnt/user/appdata/site-manager/uploads` | **Must match the Admin container exactly** |
   | **DB Path** | `/app/data/site.db` | Leave as default |
   | **Public Port (internal)** | `3011` | Do **not** change this value |

4. Click **Apply**.

---

## Method 2 — Docker Compose Manager Plugin

1. Install the **Docker Compose Manager** plugin from Community Apps if you haven't already.
2. In the Unraid UI, go to **Docker → Compose**.
3. Create a new stack named `site-manager`.
4. Paste the following into the compose editor:

```yaml
services:
  site-manager:
    image: aedankerr/site-manager:latest
    container_name: site-manager
    ports:
      - "3010:3010"   # Admin interface — keep internal or behind auth
      - "3011:3011"   # Public read-only — safe to expose via Cloudflare Tunnel
    volumes:
      - /mnt/user/appdata/site-manager/data:/app/data
      - /mnt/user/appdata/site-manager/uploads:/app/uploads
    environment:
      - NODE_ENV=production
      - PORT=3010
      - PUBLIC_PORT=3011
      - DB_PATH=/app/data/site.db
      # Auth — remove or leave blank if running on a trusted internal network only
      - SESSION_SECRET=change-this-to-a-long-random-string
      - ADMIN_PASSWORD_HASH=
      - ADMIN_TRUST_CLOUDFLARE_ACCESS=false
      - ADMIN_ALLOWED_EMAILS=
      - COOKIE_SECURE=false   # Set true if accessed over HTTPS
      - UPLOAD_MAX_MB=15
    restart: unless-stopped
```

5. Click **Compose Up**. Both the admin (3010) and public (3011) servers start in the same container.

!!! tip "Single container vs. two containers"
    The Docker Compose method runs one container serving both ports. The Community Apps XML method uses two separate containers that share the same appdata — both approaches work equally well.

---

## Authentication Setup

Site Manager supports three authentication modes. Choose based on your setup:

### Option A — No Authentication (Internal Network Only)

Leave `SESSION_SECRET`, `ADMIN_PASSWORD_HASH`, `ADMIN_TRUST_CLOUDFLARE_ACCESS`, and `ADMIN_ALLOWED_EMAILS` all **blank or unset**. The admin interface is accessible to anyone who can reach port 3010 — ensure it is **not** port-forwarded to the internet.

### Option B — Local Password Authentication

1. Generate a bcrypt hash of your chosen password. On the Unraid terminal:

   ```bash
   docker run --rm node:20-alpine node -e \
     "require('bcryptjs').hash('your-password-here', 10).then(console.log)"
   ```

   Copy the output (it will look like `$2a$10$...`).

2. Set the container variables:

   | Variable | Value |
   |---|---|
   | `SESSION_SECRET` | A long random string (e.g. 40+ random characters) |
   | `ADMIN_PASSWORD_HASH` | The bcrypt hash from step 1 |

3. Restart the container. A login form will appear at `http://[UNRAID-IP]:3010/login`.

### Option C — Cloudflare Access Authentication

Use this when the admin interface is behind a Cloudflare Tunnel:

| Variable | Value |
|---|---|
| `SESSION_SECRET` | A long random string |
| `ADMIN_TRUST_CLOUDFLARE_ACCESS` | `true` |
| `ADMIN_ALLOWED_EMAILS` | Optional comma-separated Cloudflare Access allowlist. Leave blank to allow any authenticated Cloudflare Access user. |
| `COOKIE_SECURE` | `true` |

The container trusts the `Cf-Access-Authenticated-User-Email` header injected by Cloudflare Access and grants access only to emails in the allowlist.

---

## Testing the Installation

### Check Container Logs

In the Unraid Docker tab, click the container icon and select **Logs** to confirm a healthy start. You should see:

```
Data directory: /app/data
Database path: /app/data/site.db
Running in ADMIN mode (read-write)
Database opened successfully
CV Manager v1.17.0 (Admin) running at http://localhost:3010
CV Manager (Public Read-Only) running at http://localhost:3011
```

If your logs instead show `localhost:3000`, `localhost:3001`, or `Database path: /app/data/cv.db`, the container is not using the current template variables. Edit the container, switch to advanced view if needed, and set:

| Variable | Value |
|---|---|
| `PORT` | `3010` |
| `PUBLIC_PORT` | `3011` |
| `DB_PATH` | `/app/data/site.db` |

Then apply/recreate the container.

### Test the Admin Interface

Open a browser and navigate to:

```
http://[UNRAID-IP]:3010
```

You should see the Site Manager admin panel. If authentication is configured, you'll be redirected to the login page first.

**Quick sanity checks:**

- [ ] Page loads without errors
- [ ] You can open **Settings** (gear icon in toolbar)
- [ ] Settings footer shows the correct version number
- [ ] Upload a profile picture — it should appear immediately

### Test the Public Interface

Open a browser and navigate to:

```
http://[UNRAID-IP]:3011
```

You should see the read-only public CV view.

**Quick sanity checks:**

- [ ] Page loads without a toolbar (no edit controls visible)
- [ ] Any data you added in the admin view appears here
- [ ] Attempting a POST request returns a `405 Method Not Allowed` error (you can test with `curl -X POST http://[UNRAID-IP]:3011/api/profile`)

### Test the Health Endpoint

```bash
curl -f http://[UNRAID-IP]:3011/api/profile
```

A `200 OK` response with JSON confirms the public server is running correctly.

### Verify Shared Data

1. Add or edit an item in the **Admin** interface (port 3010).
2. Reload the **Public** interface (port 3011).
3. The change should appear — confirming both containers are reading from the same database.

---

## Cloudflare Tunnel Setup (Optional)

To expose the public CV to the internet while keeping the admin internal:

1. In **Cloudflare Zero Trust → Networks → Tunnels**, create or open your tunnel.
2. Add a **Public Hostname** entry:
   - **Hostname**: `cv.yourdomain.com`
   - **Service**: `http://[UNRAID-IP]:3011`
3. Do **not** expose port 3010 publicly. Optionally add a Cloudflare Access application on `admin.yourdomain.com` pointing to port 3010 for remote admin access.

---

## Publishing to Unraid Community Apps

This repository is structured so it can be submitted to Unraid Community Apps:

- [`ca_profile.xml`](../../ca_profile.xml) — Community Apps repository/profile metadata.
- [`templates/site-manager.xml`](../../templates/site-manager.xml) — Site Manager Admin Docker template.
- [`templates/site-manager-public.xml`](../../templates/site-manager-public.xml) — Site Manager Public read-only Docker template.

### Submit the listing

1. Open the Unraid web UI on your server.
2. Open **Apps / Community Applications**.
3. Open the Community Apps submit page. If your UI exposes the direct route, use:
   ```text
   /submit
   ```
4. Enter this repository URL:
   ```text
   https://github.com/Aedankerr/site-manager
   ```
5. Run **Validate**.
6. Run **Scan**.
7. Fix any reported issues in `ca_profile.xml` or `templates/*.xml`.
8. Submit for Community Apps review.

### Pre-submit checklist

- [x] `ca_profile.xml` exists at the repository root.
- [x] Docker templates live under `templates/`.
- [x] Each Docker template has a `<Repository>` tag.
- [x] Each Docker template has a raw GitHub `<TemplateURL>` pointing at its own XML file.
- [x] Templates include `<MinVer>6.9</MinVer>` and no `<MaxVer>`, so Unraid 7.3.1 is allowed.
- [x] Icons resolve from raw GitHub URLs.
- [x] Admin and Public templates use separate container names and ports.
- [x] Public template mounts shared appdata/uploads read-only.
- [x] No personal email addresses are included in the templates or this guide.

Important: Community Apps public review may require an OSI-approved open-source license. This repository currently uses **PolyForm Noncommercial 1.0.0**, so the reviewer may ask for a license change or clarification before accepting the public listing.

---

## Troubleshooting

### Container won't start

- Check that `/mnt/user/appdata/site-manager/data` and `/mnt/user/appdata/site-manager/uploads` exist and are writable.
- Review the container logs for specific error messages.

### "Database does not exist" error in Public container

The Public container mounts `data` as read-only. The Admin container must have started at least once first to create the database file. Start the Admin container, wait for it to initialize, then start the Public container.

### Login page appears but password is rejected

- Verify the `ADMIN_PASSWORD_HASH` value is a valid bcrypt hash (starts with `$2a$` or `$2b$`).
- Ensure no trailing whitespace was pasted into the field in the Unraid UI.
- Regenerate the hash using the command in [Option B](#option-b--local-password-authentication) above.

### Changes in Admin don't appear in Public

- Confirm both containers use **identical** paths for `AppData` and `Uploads`.
- Check that the `DB_PATH` variable matches in both containers (`/app/data/site.db`).

### Port conflicts

If ports 3010 or 3011 are already in use on your Unraid server, change only the **left side** of the port mapping (the host port). For example, to use host port 8080 for the public interface:

- In the XML template: change **Public WebUI Port** to `8080`.
- In Docker Compose: change `"3011:3011"` to `"8080:3011"`.

Do **not** change the `PUBLIC_PORT` environment variable — it must always match the right (container) side of the port mapping.

### Upload images not showing in Public interface

Confirm the `Uploads` path is identical in both containers and that the Public container has at least **read** (`ro`) access to that path. In the XML template this is configured automatically.
