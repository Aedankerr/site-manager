# Veelgestelde vragen

## Algemeen

??? question "Worden mijn gegevens opgeslagen op een externe server?"
    Nee. Alles draait lokaal op uw server. Uw CV-gegevens worden opgeslagen in een SQLite-databasebestand in de `/data` map.

??? question "Kan ik CV Manager zonder Docker gebruiken?"
    Ja. Installeer Node.js 18+, voer `npm install` uit in de projectmap en start vervolgens `node src/server.js`. De beheerdersinterface draait op poort 3000 en de publieke site op poort 3001.

??? question "Kunnen meerdere personen dezelfde instantie gebruiken?"
    CV Manager is ontworpen als een applicatie voor één gebruiker. Elke instantie beheert het CV van één persoon. Voor meerdere personen kunt u afzonderlijke containers draaien.

## Bewerken

??? question "Hoe markeer ik een functie als 'huidig'?"
    Laat het veld **Einddatum** leeg. Het wordt dan weergegeven als "Heden" op het CV.

??? question "Kan ik items binnen een sectie herordenen?"
    Ja. De meeste items ondersteunen slepen-en-neerzetten om de volgorde aan te passen. De volgorde wordt automatisch opgeslagen.

??? question "Hoe voeg ik opsommingstekens toe aan een werkervaring?"
    Bewerk de werkervaring en voer hoogtepunten in het veld **Highlights** in — één opsommingsteken per regel.

??? question "Hoe voeg ik een bedrijfslogo toe?"
    Bewerk de werkervaring, scroll naar het gedeelte **Company Logo** en klik op **Choose image** om een afbeelding te uploaden. U kunt ook op **Use existing** klikken om een eerder geüpload logo opnieuw te gebruiken. Schakel de optie **"Sync logo across all [Company]"** in om hetzelfde logo toe te passen op alle ervaringen bij dat bedrijf.

??? question "Ik heb per ongeluk iets verwijderd. Kan ik dit ongedaan maken?"
    Er is geen ongedaan-maken-functie. Aangezien bewerkingen automatisch worden opgeslagen in de actieve dataset, wordt de wijziging onmiddellijk vastgelegd. Als u een eerdere export of een apart opgeslagen dataset hebt, kunt u daarvan herstellen. Het is verstandig om uw CV regelmatig te exporteren als back-up.

## Aangepaste secties

??? question "Hoeveel aangepaste secties kan ik aanmaken?"
    Er is geen vaste limiet. Maak er zoveel aan als u nodig hebt.

??? question "Kan ik het lay-outtype van een aangepaste sectie wijzigen nadat deze is aangemaakt?"
    Ja. Bewerk de sectie en selecteer een andere lay-out. Houd er rekening mee dat sommige velden mogelijk niet worden overgenomen tussen lay-outtypes (bijv. bij het wisselen van kaarten naar sociale links).

??? question "Wat is het verschil tussen de lay-outs 'Bullet Points' en 'Free Text'?"
    **Bullet Points** geeft elke regel weer als een item in een opsommingslijst met een groepstitel. **Free Text** geeft platte tekst weer met behouden regeleinden en zonder titel — vergelijkbaar met de Over/Bio-sectie.

## Afdrukken & PDF

??? question "Waarom ziet mijn PDF er anders uit dan het scherm?"
    De afdrukuitvoer maakt gebruik van speciale afdrukstijlen die zijn geoptimaliseerd voor papier. Sommige visuele effecten (hover-staten, animaties, verlopen) worden vereenvoudigd. Verborgen items en beheerderselementen worden automatisch verwijderd.

??? question "Hoe pas ik mijn CV op minder pagina's?"
    Probeer **Allow Section Splits** en **Allow Item Splits** in te schakelen bij de instellingen voor Afdrukken & Exporteren. U kunt ook minder belangrijke items of secties verbergen, of compactere lay-outs voor aangepaste secties gebruiken. U kunt de afdruk ook schalen via het afdrukvenster van uw browser (soms wat verstopt).

??? question "Waarom ontbreken sommige items in mijn afgedrukte CV?"
    Controleer of die items zijn ingesteld als verborgen (oogpictogram). Verborgen items worden uitgesloten van de afdrukuitvoer en de publieke weergave.

??? question "Paginanummers worden niet weergegeven?"
    Zorg ervoor dat **Page Numbers** is ingeschakeld onder Instellingen → Afdrukken & Exporteren. Sommige browser-PDF-viewers tonen mogelijk geen door CSS gegenereerde paginanummers — probeer de PDF te downloaden en te openen in een speciale lezer.

## Tijdlijn

??? question "De tijdlijn toont verkeerde datums / alleen jaren / volledige datums?"
    De tijdlijn heeft een eigen datuminstelling. Ga naar **Settings → Advanced → Timeline: Years Only** om te schakelen tussen weergave met alleen jaren en het volledige datumformaat.

??? question "Kan ik rechtstreeks items aan de tijdlijn toevoegen?"
    Nee. De tijdlijn wordt automatisch gegenereerd op basis van uw werkervaringen. Voeg werkervaringen toe of bewerk ze en de tijdlijn wordt dienovereenkomstig bijgewerkt.

??? question "De landvlag wordt niet weergegeven op de tijdlijn?"
    Zorg ervoor dat het veld **Country Code** bij de werkervaring is ingesteld op een geldige 2-letterige ISO-landcode (bijv. `us`, `gb`, `ch`, `de`, `fr`). Vlaggen worden geladen vanaf een extern CDN.

??? question "Wat gebeurt er als ik twee banen tegelijkertijd heb?"
    De tijdlijn detecteert automatisch overlappende functies en geeft deze weer als **parallelle sporen**. De gelijktijdige baan verschijnt op een verhoogde vertakkingslijn met S-curveverbindingen die de splitsings- en samenvoegpunten tonen. Er is geen configuratie nodig — het is volledig gebaseerd op uw begin- en einddatums. Overlappingen korter dan 1 maand worden genegeerd (gebruikelijk bij baanwisselingen).

??? question "Waarom toont de tijdlijn een logo in plaats van de bedrijfsnaam?"
    Als u een bedrijfslogo hebt geüpload voor die werkervaring, toont de tijdlijn de logoafbeelding in plaats van tekst. Als het logobestand ontbreekt, valt het terug op de bedrijfsnaam. Om een logo van de tijdlijn te verwijderen, bewerkt u de werkervaring en klikt u op **Remove** in het gedeelte Company Logo.

## Taal & Updates

??? question "Hoe wijzig ik de taal van de beheerdersinterface?"
    Klik op het **wereldbolpictogram** in de werkbalk en selecteer een taal uit het vervolgkeuzeraster. De wijziging wordt onmiddellijk toegepast en wordt opgeslagen voor toekomstige sessies.

??? question "Hoe controleer ik welke versie ik gebruik?"
    Open **Instellingen** — het versienummer wordt weergegeven in de linkerbenedenhoek van het venster (bijv. `v1.11.0`).

??? question "Ik zie de updatebanner niet, terwijl er een nieuwe versie beschikbaar is?"
    De versiecontrole wordt 24 uur in de cache bewaard. Herstart uw server (of Docker-container) om de cache te wissen en een nieuwe controle af te dwingen. Uw server heeft ook uitgaande internettoegang nodig om `raw.githubusercontent.com` te bereiken.

## Datasets / Meerdere CV's

??? question "Wat is de 'Default' dataset?"
    De standaarddataset is de versie van uw CV die bezoekers zien op uw hoofd-URL (`/`). Bij de eerste installatie maakt CV Manager automatisch een "Default" dataset aan op basis van uw CV-gegevens. U kunt op elk moment wijzigen welke dataset de standaard is met behulp van het keuzerondje in het Openen-venster.

??? question "Worden mijn bewerkingen automatisch opgeslagen?"
    Ja. Elke wijziging die u aanbrengt in de beheerdersinterface (toevoegen, bewerken, verwijderen, herordenen, zichtbaarheid wijzigen) wordt na een korte vertraging automatisch opgeslagen in de actieve dataset. De banner toont "Saving…" en vervolgens "✓ Saved" ter bevestiging.

??? question "Wat gebeurt er als ik een dataset 'laad'?"
    Het laden van een dataset schakelt uw werkkopie over naar die dataset. Uw eerdere bewerkingen zijn al automatisch opgeslagen, dus er gaat niets verloren.

??? question "Kunnen bezoekers mijn bewerkingen in realtime zien?"
    Nee. De publieke site toont de bevroren standaarddataset, niet uw live bewerkingen. Bezoekers zien wijzigingen pas nadat automatisch opslaan deze naar de standaarddataset heeft geschreven. Als u een niet-standaarddataset bewerkt, zien bezoekers die wijzigingen helemaal niet totdat u deze als standaard instelt.

??? question "Kunnen bezoekers mijn opgeslagen datasets zien?"
    Alleen als u ze openbaar maakt. Elke dataset heeft een schakelaar in het Openen-venster. Wanneer ingesteld als openbaar, wordt die versie toegankelijk op `/v/slug` op de publieke site (poort 3001). Privédatasets zijn alleen te bekijken vanuit de beheerdersinterface.

??? question "Hoe deel ik een specifieke CV-versie met iemand?"
    Open het venster **Openen...**, zet de dataset op openbaar en klik vervolgens op het kopieerpictogram naast de slug-URL. Deel die link — deze werkt op de publieke site zonder uw beheerdersinterface bloot te geven.

??? question "Kan ik meerdere openbare versies tegelijkertijd hebben?"
    Ja. U kunt zoveel datasets openbaar maken als u wilt. Elke dataset krijgt een eigen URL (bijv. `/v/technical-cv-1`, `/v/marketing-cv-2`). De hoofdpagina `/` toont de standaarddataset.

??? question "Kan ik de standaarddataset verwijderen?"
    Nee. De dataset die momenteel als standaard is geselecteerd (via het keuzerondje) kan niet worden verwijderd. Stel eerst een andere dataset in als standaard en verwijder daarna de oude.

??? question "Worden mijn versie-URL's geïndexeerd door zoekmachines?"
    Standaard niet — versiepagina's krijgen `noindex, nofollow`. Om indexering toe te staan, schakelt u **Index Versioned URLs** in onder Settings → Advanced.

## Publieke site & SEO

??? question "Hoe deel ik mijn CV?"
    Deel de URL van uw publieke server (poort 3001). Als u een domein hebt ingesteld met Cloudflare Tunnel of een reverse proxy, deelt u dat domein. De hoofd-URL toont altijd uw standaarddataset. U kunt ook specifieke versies delen via openbare versie-URL's (zie [Datasets](../guide/datasets.md)).

??? question "Worden zoekmachines mijn CV indexeren?"
    Standaard wel — de hoofdpagina van de publieke site bevat de juiste metatags, een sitemap en robots.txt. Om indexering te voorkomen, wijzigt u de instelling **Search Engine Indexing** naar "No Index" onder Settings → Advanced. Openbare versie-URL's (`/v/slug`) worden standaard **niet geïndexeerd**; schakel **Index Versioned URLs** in als u wilt dat ze worden gecrawld.

??? question "Kan ik Google Analytics toevoegen aan mijn CV?"
    Ja. Plak uw trackingcode in **Settings → Advanced → Tracking Code**. Deze wordt alleen ingevoegd op de publiek zichtbare pagina's.

## Docker & Infrastructuur

??? question "Mijn wijzigingen verschijnen niet op de publieke site?"
    De publieke site toont de **standaarddataset**, die automatisch wordt bijgewerkt wanneer u bewerkingen maakt in de beheerdersinterface. Probeer een harde verversing (`Ctrl+Shift+R`) op de publieke site. Als u afzonderlijke containers draait, zorg er dan voor dat ze hetzelfde datavolume delen.

??? question "Ik krijg een foutmelding 'port already in use'?"
    Wijzig de poorttoewijzing op de host in uw Docker-configuratie. Wijs bijvoorbeeld toe aan `3010:3000` en `3011:3001`. Wijzig **niet** de omgevingsvariabele `PUBLIC_PORT` — dat is de interne containerpoort.

??? question "Hoe maak ik een back-up van mijn gegevens?"
    Twee opties: gebruik de **Export**-knop in de beheerderswerkbalk (exporteert JSON), of maak een back-up van de map `data/` die de SQLite-database en geüploade afbeeldingen bevat.

??? question "Profielfoto wordt niet weergegeven?"
    Zorg ervoor dat de afbeelding is geüpload via de beheerdersinterface. Het bestand wordt opgeslagen op `data/uploads/picture.jpeg`. Controleer de bestandsrechten als u Linux gebruikt.
