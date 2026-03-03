# FAQ

## Allgemein

??? question "Werden meine Daten auf einem externen Server gespeichert?"
    Nein. Alles läuft lokal auf Ihrem Server. Ihre Lebenslauf-Daten werden in einer SQLite-Datenbankdatei im Verzeichnis `/data` gespeichert.

??? question "Kann ich CV Manager ohne Docker betreiben?"
    Ja. Installieren Sie Node.js 18+, führen Sie `npm install` im Projektverzeichnis aus und dann `node src/server.js`. Die Admin-Oberfläche läuft auf Port 3000 und die öffentliche Seite auf Port 3001.

??? question "Können mehrere Personen dieselbe Instanz nutzen?"
    CV Manager ist als Einzelbenutzer-Anwendung konzipiert. Jede Instanz verwaltet den Lebenslauf einer Person. Für mehrere Personen starten Sie separate Container.

## Bearbeitung

??? question "Wie markiere ich eine Position als aktuell?"
    Lassen Sie das Feld **End Date** leer. Es wird als „Present" im Lebenslauf angezeigt.

??? question "Kann ich Einträge innerhalb einer Sektion neu anordnen?"
    Ja. Die meisten Einträge unterstützen Drag-and-Drop zum Neuanordnen. Die Reihenfolge wird automatisch gespeichert.

??? question "Wie füge ich Aufzählungspunkte zu einer Erfahrung hinzu?"
    Bearbeiten Sie die Erfahrung und geben Sie Highlights im Feld **Highlights** ein — ein Aufzählungspunkt pro Zeile.

??? question "Wie füge ich ein Firmenlogo hinzu?"
    Bearbeiten Sie die Erfahrung, scrollen Sie zum Abschnitt **Company Logo** und klicken Sie auf **Choose image**, um ein Bild hochzuladen. Sie können auch auf **Use existing** klicken, um ein bereits hochgeladenes Logo wiederzuverwenden. Aktivieren Sie den Schalter **„Sync logo across all [Company]"**, um dasselbe Logo auf alle Erfahrungen bei diesem Unternehmen anzuwenden.

??? question "Ich habe versehentlich etwas gelöscht. Kann ich es rückgängig machen?"
    Es gibt keine Rückgängig-Funktion. Da Änderungen automatisch im aktiven Datensatz gespeichert werden, wird die Änderung sofort persistiert. Wenn Sie einen früheren Export oder einen separaten gespeicherten Datensatz haben, können Sie daraus wiederherstellen. Es empfiehlt sich, Ihren Lebenslauf regelmäßig als Backup zu exportieren.

## Benutzerdefinierte Sektionen

??? question "Wie viele benutzerdefinierte Sektionen kann ich erstellen?"
    Es gibt keine feste Obergrenze. Erstellen Sie so viele, wie Sie benötigen.

??? question "Kann ich den Layout-Typ einer benutzerdefinierten Sektion nach der Erstellung ändern?"
    Ja. Bearbeiten Sie die Sektion und wählen Sie ein anderes Layout. Beachten Sie, dass einige Felder möglicherweise nicht zwischen Layout-Typen übertragen werden (z. B. beim Wechsel von cards zu social links).

??? question "Was ist der Unterschied zwischen den Layouts „Bullet Points" und „Free Text"?"
    **Bullet Points** stellt jede Zeile als Aufzählungspunkt mit einem Gruppentitel dar. **Free Text** zeigt reinen Text mit beibehaltenen Zeilenumbrüchen und ohne Titel an — ähnlich wie der About/Bio-Abschnitt.

## Drucken und PDF

??? question "Warum sieht mein PDF anders aus als auf dem Bildschirm?"
    Die Druckausgabe verwendet spezielle Druckstile, die für Papier optimiert sind. Einige visuelle Effekte (Hover-Zustände, Animationen, Farbverläufe) werden vereinfacht. Ausgeblendete Elemente und Admin-Steuerelemente werden automatisch entfernt.

??? question "Wie bekomme ich meinen Lebenslauf auf weniger Seiten?"
    Versuchen Sie, **Allow Section Splits** und **Allow Item Splits** in den Print & Export-Einstellungen zu aktivieren. Sie können auch weniger wichtige Elemente oder Sektionen ausblenden oder kompaktere benutzerdefinierte Sektionslayouts verwenden. Passen Sie außerdem die Druckskalierung über das Druckfenster Ihres Browsers an (manchmal etwas versteckt).

??? question "Warum fehlen einige Einträge in meinem gedruckten Lebenslauf?"
    Überprüfen Sie, ob diese Einträge auf ausgeblendet gesetzt wurden (Augen-Symbol). Ausgeblendete Einträge werden von der Druckausgabe und der öffentlichen Ansicht ausgeschlossen.

??? question "Seitenzahlen werden nicht angezeigt?"
    Stellen Sie sicher, dass **Page Numbers** in Settings → Print & Export aktiviert ist. Einige im Browser integrierte PDF-Viewer zeigen möglicherweise keine CSS-generierten Seitenzahlen an — versuchen Sie, das PDF herunterzuladen und in einem dedizierten Reader zu öffnen.

## Zeitleiste

??? question "Die Zeitleiste zeigt falsche Daten / nur Jahre / vollständige Daten an?"
    Die Zeitleiste hat eine eigene Datumseinstellung. Gehen Sie zu **Settings → Advanced → Timeline: Years Only**, um zwischen der Anzeige nur der Jahre und dem vollständigen Datumsformat umzuschalten.

??? question "Kann ich Einträge direkt zur Zeitleiste hinzufügen?"
    Nein. Die Zeitleiste wird automatisch aus Ihren Berufserfahrungen generiert. Fügen Sie Erfahrungen hinzu oder bearbeiten Sie sie, und die Zeitleiste wird entsprechend aktualisiert.

??? question "Die Länderflagge wird auf der Zeitleiste nicht angezeigt?"
    Stellen Sie sicher, dass das Feld **Country Code** der Erfahrung auf einen gültigen 2-Buchstaben-ISO-Ländercode gesetzt ist (z. B. `us`, `gb`, `ch`, `de`, `fr`). Flaggen werden von einem externen CDN geladen.

??? question "Was passiert, wenn ich zwei Jobs gleichzeitig habe?"
    Die Zeitleiste erkennt automatisch überlappende Positionen und stellt sie als **parallele Spuren** dar. Die gleichzeitige Stelle erscheint auf einer erhöhten Abzweigungslinie mit S-Kurven-Verbindungen, die die Gabelungs- und Zusammenführungspunkte anzeigen. Keine Konfiguration erforderlich — die Berechnung basiert vollständig auf Ihren Start- und Enddaten. Überlappungen von weniger als einem Monat werden ignoriert (häufig bei Jobwechseln).

??? question "Warum zeigt die Zeitleiste ein Logo statt des Firmennamens an?"
    Wenn Sie ein Firmenlogo für diese Erfahrung hochgeladen haben, zeigt die Zeitleiste das Logo-Bild anstelle von Text an. Wenn die Logo-Datei fehlt, wird stattdessen der Firmenname angezeigt. Um ein Logo aus der Zeitleiste zu entfernen, bearbeiten Sie die Erfahrung und klicken Sie auf **Remove** im Abschnitt Company Logo.

## Sprache und Updates

??? question "Wie ändere ich die Sprache der Admin-Oberfläche?"
    Klicken Sie auf das **Globus-Symbol** in der Symbolleiste und wählen Sie eine Sprache aus dem Dropdown-Raster. Die Änderung wird sofort wirksam und wird sitzungsübergreifend gespeichert.

??? question "Wie überprüfe ich, welche Version ich verwende?"
    Öffnen Sie **Settings** — die Versionsnummer wird in der unteren linken Ecke des Modals angezeigt (z. B. `v1.11.0`).

??? question "Ich sehe das Update-Banner nicht, obwohl eine neue Version verfügbar ist?"
    Die Versionsprüfung wird für 24 Stunden zwischengespeichert. Starten Sie Ihren Server (oder Docker-Container) neu, um den Cache zu leeren und eine neue Prüfung zu erzwingen. Ihr Server benötigt außerdem ausgehenden Internetzugang, um `raw.githubusercontent.com` zu erreichen.

## Datensätze / Mehrere Lebensläufe

??? question "Was ist der Datensatz „Default"?"
    Der Standarddatensatz ist die Version Ihres Lebenslaufs, die Besucher unter Ihrer Stamm-URL (`/`) sehen. Bei der Erstinstallation erstellt CV Manager automatisch einen „Default"-Datensatz aus Ihren Lebenslaufdaten. Sie können jederzeit ändern, welcher Datensatz der Standard ist, indem Sie die Optionsschaltfläche im Open-Modal verwenden.

??? question "Werden meine Änderungen automatisch gespeichert?"
    Ja. Jede Änderung, die Sie in der Admin-Oberfläche vornehmen (Hinzufügen, Bearbeiten, Löschen, Neuanordnen, Sichtbarkeit umschalten), wird nach einer kurzen Verzögerung automatisch im aktiven Datensatz gespeichert. Das Banner zeigt „Saving…" und dann „✓ Saved" zur Bestätigung an.

??? question "Was passiert, wenn ich einen Datensatz „lade"?"
    Das Laden eines Datensatzes wechselt Ihre Arbeitskopie zu diesem Datensatz. Ihre vorherigen Änderungen wurden bereits automatisch gespeichert, sodass nichts verloren geht.

??? question "Können Besucher meine Änderungen in Echtzeit sehen?"
    Nein. Die öffentliche Seite zeigt den eingefrorenen Standarddatensatz an, nicht Ihre aktuellen Bearbeitungen. Besucher sehen Änderungen erst, nachdem die automatische Speicherung sie in den Standarddatensatz geschrieben hat. Wenn Sie einen nicht standardmäßigen Datensatz bearbeiten, sehen Besucher diese Änderungen überhaupt nicht, bis Sie ihn als Standard festlegen.

??? question "Können Besucher meine gespeicherten Datensätze sehen?"
    Nur wenn Sie sie öffentlich machen. Jeder Datensatz hat einen Schalter im Open-Modal. Wenn er auf öffentlich gesetzt ist, wird diese Version unter `/v/slug` auf der öffentlichen Seite (Port 3001) zugänglich. Private Datensätze können nur über die Admin-Oberfläche in der Vorschau angezeigt werden.

??? question "Wie teile ich eine bestimmte Lebenslauf-Version mit jemandem?"
    Öffnen Sie das **Open...**-Modal, schalten Sie den Datensatz auf öffentlich und klicken Sie dann auf das Kopier-Symbol neben der Slug-URL. Teilen Sie diesen Link — er funktioniert auf der öffentlichen Seite, ohne Ihre Admin-Oberfläche preiszugeben.

??? question "Kann ich mehrere öffentliche Versionen gleichzeitig haben?"
    Ja. Sie können so viele Datensätze öffentlich machen, wie Sie möchten. Jeder bekommt seine eigene URL (z. B. `/v/technical-cv-1`, `/v/marketing-cv-2`). Die Hauptseite `/` zeigt den Standarddatensatz an.

??? question "Kann ich den Standarddatensatz löschen?"
    Nein. Der aktuell als Standard ausgewählte Datensatz (über die Optionsschaltfläche) kann nicht gelöscht werden. Legen Sie zuerst einen anderen Datensatz als Standard fest und löschen Sie dann den alten.

??? question "Werden Suchmaschinen meine versionierten URLs indexieren?"
    Standardmäßig nein — versionierte Seiten erhalten `noindex, nofollow`. Um die Indexierung zu erlauben, aktivieren Sie **Index Versioned URLs** in Settings → Advanced.

## Öffentliche Seite und SEO

??? question "Wie teile ich meinen Lebenslauf?"
    Teilen Sie die URL Ihres öffentlichen Servers (Port 3001). Wenn Sie eine Domain mit Cloudflare Tunnel oder einem Reverse Proxy eingerichtet haben, teilen Sie diese Domain. Die Stamm-URL zeigt immer Ihren Standarddatensatz an. Sie können auch bestimmte Versionen über öffentliche versionierte URLs teilen (siehe [Datasets](../guide/datasets.md)).

??? question "Werden Suchmaschinen meinen Lebenslauf indexieren?"
    Standardmäßig ja — die öffentliche Hauptseite enthält geeignete Meta-Tags, eine Sitemap und eine robots.txt. Um die Indexierung zu verhindern, ändern Sie die Einstellung **Search Engine Indexing** auf „No Index" in Settings → Advanced. Öffentliche versionierte URLs (`/v/slug`) werden standardmäßig **nicht indexiert**; aktivieren Sie **Index Versioned URLs**, wenn Sie möchten, dass sie gecrawlt werden.

??? question "Kann ich Google Analytics zu meinem Lebenslauf hinzufügen?"
    Ja. Fügen Sie Ihren Tracking-Code in **Settings → Advanced → Tracking Code** ein. Er wird nur auf den öffentlichen Seiten eingebunden.

## Docker und Infrastruktur

??? question "Meine Änderungen erscheinen nicht auf der öffentlichen Seite?"
    Die öffentliche Seite zeigt den **Standarddatensatz** an, der automatisch aktualisiert wird, wenn Sie in der Admin-Oberfläche Änderungen vornehmen. Versuchen Sie einen harten Refresh (`Ctrl+Shift+R`) auf der öffentlichen Seite. Wenn Sie separate Container betreiben, stellen Sie sicher, dass sie dasselbe Datenvolume teilen.

??? question "Ich erhalte einen Fehler „port already in use"?"
    Ändern Sie das Host-Port-Mapping in Ihrer Docker-Konfiguration. Zum Beispiel mappen Sie auf `3010:3000` und `3011:3001`. Ändern Sie **nicht** die Umgebungsvariable `PUBLIC_PORT` — das ist der interne Container-Port.

??? question "Wie sichere ich meine Daten?"
    Zwei Optionen: Verwenden Sie die **Export**-Schaltfläche in der Admin-Symbolleiste (exportiert JSON), oder sichern Sie das Verzeichnis `data/`, das die SQLite-Datenbank und hochgeladene Bilder enthält.

??? question "Das Profilbild wird nicht angezeigt?"
    Stellen Sie sicher, dass das Bild über die Admin-Oberfläche hochgeladen wurde. Die Datei wird unter `data/uploads/picture.jpeg` gespeichert. Überprüfen Sie die Dateiberechtigungen, wenn Sie Linux verwenden.
