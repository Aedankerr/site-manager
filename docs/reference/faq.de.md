# FAQ

## Allgemein

??? question "Werden meine Daten auf einem externen Server gespeichert?"
    Nein. Alles läuft lokal auf Ihrem Server. Ihre Lebenslauf-Daten werden in einer SQLite-Datenbankdatei im `/data`-Verzeichnis gespeichert.

??? question "Kann ich CV Manager ohne Docker betreiben?"
    Ja. Installieren Sie Node.js 18+, führen Sie `npm install` im Projektverzeichnis aus und starten Sie dann `node src/server.js`. Der Admin-Server läuft auf Port 3000 und die öffentliche Seite auf Port 3001.

??? question "Können mehrere Personen dieselbe Instanz nutzen?"
    CV Manager ist als Einzelbenutzer-Anwendung konzipiert. Jede Instanz verwaltet den Lebenslauf einer Person. Für mehrere Personen führen Sie separate Container aus.

## Bearbeitung

??? question "Wie markiere ich eine Position als 'aktuell'?"
    Lassen Sie das Feld **Enddatum** leer. Es wird als "Aktuell" im Lebenslauf angezeigt.

??? question "Kann ich Elemente innerhalb eines Abschnitts neu anordnen?"
    Ja. Die meisten Elemente unterstützen Drag-and-Drop-Neuanordnung. Die Reihenfolge wird automatisch gespeichert.

??? question "Wie füge ich Aufzählungspunkte zu einer Berufserfahrung hinzu?"
    Bearbeiten Sie die Berufserfahrung und geben Sie Highlights im Feld **Highlights** ein — ein Aufzählungspunkt pro Zeile.

??? question "Wie füge ich ein Unternehmenslogo hinzu?"
    Bearbeiten Sie die Berufserfahrung, scrollen Sie zum Bereich **Unternehmenslogo** und klicken Sie auf **Bild auswählen** zum Hochladen. Sie können auch auf **Vorhandenes verwenden** klicken, um ein bereits hochgeladenes Logo wiederzuverwenden. Aktivieren Sie den Schalter **"Logo über alle [Unternehmen] synchronisieren"**, um dasselbe Logo auf alle Erfahrungen bei diesem Unternehmen anzuwenden.

??? question "Ich habe versehentlich etwas gelöscht. Kann ich das rückgängig machen?"
    Es gibt keine Rückgängig-Funktion. Da Bearbeitungen automatisch im aktiven Datensatz gespeichert werden, wird die Änderung sofort gespeichert. Wenn Sie einen früheren Export oder einen separaten gespeicherten Datensatz haben, können Sie von dort wiederherstellen. Es empfiehlt sich, Ihren Lebenslauf regelmäßig als Sicherung zu exportieren.

## Benutzerdefinierte Abschnitte

??? question "Wie viele benutzerdefinierte Abschnitte kann ich erstellen?"
    Es gibt keine feste Obergrenze. Erstellen Sie so viele, wie Sie benötigen.

??? question "Kann ich den Layout-Typ eines benutzerdefinierten Abschnitts nach der Erstellung ändern?"
    Ja. Bearbeiten Sie den Abschnitt und wählen Sie ein anderes Layout. Beachten Sie, dass einige Felder möglicherweise nicht zwischen Layout-Typen übernommen werden (z.B. beim Wechsel von Karten zu Social Links).

??? question "Was ist der Unterschied zwischen den Layouts 'Aufzählungspunkte' und 'Freitext'?"
    **Aufzählungspunkte** rendert jede Zeile als Aufzählungslistenelement mit einem Gruppentitel. **Freitext** rendert einfachen Text mit beibehaltenen Zeilenumbrüchen und ohne Titel — ähnlich dem Über-mich/Bio-Abschnitt.

## Drucken & PDF

??? question "Warum sieht mein PDF anders aus als der Bildschirm?"
    Die Druckausgabe verwendet dedizierte Druckstile, die für Papier optimiert sind. Einige visuelle Effekte (Hover-Zustände, Animationen, Verläufe) werden vereinfacht. Ausgeblendete Elemente und Admin-Steuerelemente werden automatisch entfernt.

??? question "Wie bringe ich meinen Lebenslauf auf weniger Seiten unter?"
    Versuchen Sie, **Abschnittstrennung erlauben** und **Elementtrennung erlauben** in den Drucken & Export-Einstellungen zu aktivieren. Sie können auch weniger wichtige Elemente oder Abschnitte ausblenden oder kompaktere benutzerdefinierte Abschnitt-Layouts verwenden. Skalieren Sie den Druck auch über den Druckdialog Ihres Browsers (manchmal etwas versteckt).

??? question "Warum fehlen einige Elemente in meinem gedruckten Lebenslauf?"
    Prüfen Sie, ob diese Elemente auf ausgeblendet geschaltet wurden (Augen-Symbol). Ausgeblendete Elemente werden von der Druckausgabe und der öffentlichen Ansicht ausgeschlossen.

??? question "Seitenzahlen werden nicht angezeigt?"
    Stellen Sie sicher, dass **Seitenzahlen** unter Einstellungen → Drucken & Export aktiviert ist. Einige Browser-PDF-Viewer zeigen möglicherweise keine CSS-generierten Seitenzahlen an — versuchen Sie, das PDF herunterzuladen und in einem dedizierten Reader zu öffnen.

## Zeitstrahl

??? question "Der Zeitstrahl zeigt die falschen Daten / nur Jahre / vollständige Daten?"
    Der Zeitstrahl hat seine eigene Datumseinstellung. Gehen Sie zu **Einstellungen → Erweitert → Zeitstrahl: Nur Jahre**, um zwischen der reinen Jahresanzeige und dem vollständigen Datumsformat umzuschalten.

??? question "Kann ich dem Zeitstrahl direkt Einträge hinzufügen?"
    Nein. Der Zeitstrahl wird automatisch aus Ihren Berufserfahrungen generiert. Fügen Sie Berufserfahrungen hinzu oder bearbeiten Sie diese, und der Zeitstrahl wird entsprechend aktualisiert.

??? question "Die Länderflagge wird im Zeitstrahl nicht angezeigt?"
    Stellen Sie sicher, dass das Feld **Ländercode** bei der Berufserfahrung auf einen gültigen 2-Buchstaben-ISO-Ländercode gesetzt ist (z.B. `us`, `gb`, `ch`, `de`, `fr`). Flaggen werden von einem externen CDN geladen.

??? question "Was passiert, wenn ich zwei Jobs gleichzeitig habe?"
    Der Zeitstrahl erkennt automatisch sich überlappende Positionen und stellt sie als **parallele Spuren** dar. Der gleichzeitige Job erscheint auf einer erhöhten Nebenspur mit S-Kurven-Verbindungen, die die Abzweigungs- und Zusammenführungspunkte zeigen. Keine Konfiguration erforderlich — es basiert vollständig auf Ihren Start-/Enddaten. Überlappungen kürzer als 1 Monat werden ignoriert (üblich bei Stellenwechseln).

??? question "Warum zeigt der Zeitstrahl ein Logo statt des Unternehmensnamens?"
    Wenn Sie ein Unternehmenslogo für diese Berufserfahrung hochgeladen haben, zeigt der Zeitstrahl das Logo-Bild statt Text an. Wenn die Logo-Datei fehlt, wird auf den Unternehmensnamen zurückgegriffen. Um ein Logo aus dem Zeitstrahl zu entfernen, bearbeiten Sie die Berufserfahrung und klicken Sie auf **Entfernen** im Bereich Unternehmenslogo.

## Sprache & Aktualisierungen

??? question "Wie ändere ich die Admin-Sprache?"
    Klicken Sie auf das **Globus-Symbol** in der Werkzeugleiste und wählen Sie eine Sprache aus dem Dropdown-Raster. Die Änderung wird sofort angewendet und über Sitzungen hinweg gespeichert.

??? question "Wie prüfe ich, welche Version ich verwende?"
    Öffnen Sie die **Einstellungen** — die Versionsnummer wird in der unteren linken Ecke des Modals angezeigt (z.B. `v1.11.0`).

??? question "Ich sehe das Update-Banner nicht, obwohl eine neue Version verfügbar ist?"
    Die Versionsprüfung wird für 24 Stunden zwischengespeichert. Starten Sie Ihren Server (oder Docker-Container) neu, um den Cache zu leeren und eine erneute Prüfung zu erzwingen. Ihr Server benötigt außerdem ausgehenden Internetzugang, um `raw.githubusercontent.com` zu erreichen.

## Datensätze / Mehrere Lebensläufe

??? question "Was ist der 'Standard'-Datensatz?"
    Der Standard-Datensatz ist die Version Ihres Lebenslaufs, die Besucher unter Ihrer Stamm-URL (`/`) sehen. Bei der Erstinstallation erstellt CV Manager automatisch einen "Standard"-Datensatz aus Ihren Lebenslauf-Daten. Sie können jederzeit ändern, welcher Datensatz der Standard ist, indem Sie das Optionsfeld im Öffnen-Modal verwenden.

??? question "Werden meine Bearbeitungen automatisch gespeichert?"
    Ja. Jede Änderung, die Sie im Admin-Bereich vornehmen (Hinzufügen, Bearbeiten, Löschen, Neuanordnen, Sichtbarkeit umschalten), wird nach einer kurzen Verzögerung automatisch im aktiven Datensatz gespeichert. Das Banner zeigt "Speichert..." und dann "Gespeichert" zur Bestätigung.

??? question "Was passiert, wenn ich einen Datensatz 'Lade'?"
    Das Laden eines Datensatzes wechselt Ihre Arbeitskopie zu diesem Datensatz. Ihre vorherigen Bearbeitungen wurden bereits automatisch gespeichert, es geht also nichts verloren.

??? question "Können Besucher meine Bearbeitungen in Echtzeit sehen?"
    Nein. Die öffentliche Seite stellt den eingefrorenen Standard-Datensatz bereit, nicht Ihre Live-Bearbeitungen. Besucher sehen Änderungen erst, nachdem die automatische Speicherung sie in den Standard-Datensatz geschrieben hat. Wenn Sie einen nicht standardmäßigen Datensatz bearbeiten, sehen Besucher diese Änderungen überhaupt nicht, bis Sie ihn als Standard festlegen.

??? question "Können Besucher meine gespeicherten Datensätze sehen?"
    Nur wenn Sie sie öffentlich machen. Jeder Datensatz hat einen Schalter im Öffnen-Modal. Wenn auf öffentlich gesetzt, wird diese Version unter `/v/slug` auf der öffentlichen Seite (Port 3001) zugänglich. Private Datensätze können nur über die Admin-Oberfläche als Vorschau angezeigt werden.

??? question "Wie teile ich eine bestimmte Lebenslauf-Version mit jemandem?"
    Öffnen Sie das **Öffnen...**-Modal, schalten Sie den Datensatz auf öffentlich und klicken Sie dann auf das Kopier-Symbol neben der Slug-URL. Teilen Sie diesen Link — er funktioniert auf der öffentlichen Seite, ohne Ihre Admin-Oberfläche preiszugeben.

??? question "Kann ich mehrere öffentliche Versionen gleichzeitig haben?"
    Ja. Sie können beliebig viele Datensätze öffentlich machen. Jeder erhält seine eigene URL (z.B. `/v/technical-cv-1`, `/v/marketing-cv-2`). Die Hauptseite `/` zeigt den Standard-Datensatz.

??? question "Kann ich den Standard-Datensatz löschen?"
    Nein. Der aktuell als Standard ausgewählte Datensatz (über das Optionsfeld) kann nicht gelöscht werden. Legen Sie zuerst einen anderen Datensatz als Standard fest und löschen Sie dann den alten.

??? question "Werden Suchmaschinen meine versionierten URLs indexieren?"
    Standardmäßig nein — versionierte Seiten erhalten `noindex, nofollow`. Um die Indexierung zu erlauben, aktivieren Sie **Versionierte URLs indexieren** unter Einstellungen → Erweitert.

## Öffentliche Seite & SEO

??? question "Wie teile ich meinen Lebenslauf?"
    Teilen Sie die URL Ihres öffentlichen Servers (Port 3001). Wenn Sie eine Domain mit Cloudflare Tunnel oder einem Reverse Proxy eingerichtet haben, teilen Sie diese Domain. Die Stamm-URL zeigt immer Ihren Standard-Datensatz. Sie können auch bestimmte Versionen über öffentliche versionierte URLs teilen (siehe [Datensätze](../guide/datasets.md)).

??? question "Werden Suchmaschinen meinen Lebenslauf indexieren?"
    Standardmäßig ja — die öffentliche Hauptseite enthält ordnungsgemäße Meta-Tags, eine Sitemap und robots.txt. Um die Indexierung zu verhindern, ändern Sie die Einstellung **Suchmaschinenindexierung** auf "No Index" unter Einstellungen → Erweitert. Öffentliche versionierte URLs (`/v/slug`) werden standardmäßig **nicht indexiert**; aktivieren Sie **Versionierte URLs indexieren**, wenn Sie möchten, dass sie gecrawlt werden.

??? question "Kann ich Google Analytics zu meinem Lebenslauf hinzufügen?"
    Ja. Fügen Sie Ihren Tracking-Code unter **Einstellungen → Erweitert → Tracking-Code** ein. Er wird nur auf den öffentlich zugänglichen Seiten eingefügt.

## Docker & Infrastruktur

??? question "Meine Änderungen erscheinen nicht auf der öffentlichen Seite?"
    Die öffentliche Seite stellt den **Standard-Datensatz** bereit, der automatisch aktualisiert wird, wenn Sie im Admin-Bereich bearbeiten. Versuchen Sie einen Hard Refresh (`Ctrl+Shift+R`) auf der öffentlichen Seite. Wenn Sie separate Container betreiben, stellen Sie sicher, dass sie dasselbe Datenvolumen teilen.

??? question "Ich erhalte einen 'Port bereits belegt'-Fehler?"
    Ändern Sie das Host-Port-Mapping in Ihrer Docker-Konfiguration. Verwenden Sie zum Beispiel `3010:3000` und `3011:3001`. Ändern Sie **nicht** die Umgebungsvariable `PUBLIC_PORT` — das ist der interne Container-Port.

??? question "Wie sichere ich meine Daten?"
    Zwei Möglichkeiten: Verwenden Sie die Schaltfläche **Exportieren** in der Admin-Werkzeugleiste (exportiert JSON) oder sichern Sie das Verzeichnis `data/`, das die SQLite-Datenbank und hochgeladene Bilder enthält.

??? question "Das Profilbild wird nicht angezeigt?"
    Stellen Sie sicher, dass das Bild über die Admin-Oberfläche hochgeladen wurde. Die Datei wird unter `data/uploads/picture.jpeg` gespeichert. Prüfen Sie die Dateiberechtigungen, wenn Sie Linux verwenden.
