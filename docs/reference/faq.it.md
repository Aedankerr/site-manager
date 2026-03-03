# FAQ

## Generale

??? question "I miei dati vengono archiviati su un server esterno?"
    No. Tutto viene eseguito localmente sul Suo server. I dati del CV sono archiviati in un file di database SQLite nella directory `/data`.

??? question "Posso eseguire CV Manager senza Docker?"
    Sì. Installi Node.js 18+, esegua `npm install` nella directory del progetto, quindi `node src/server.js`. L'interfaccia di amministrazione viene eseguita sulla porta 3000 e il sito pubblico sulla porta 3001.

??? question "Più persone possono utilizzare la stessa istanza?"
    CV Manager è progettato come applicazione per un singolo utente. Ogni istanza gestisce il CV di una persona. Per più persone, esegua container separati.

## Modifica

??? question "Come contrassegno una posizione come 'attuale'?"
    Lasci vuoto il campo **Data di fine**. Verrà visualizzato come "Presente" sul CV.

??? question "Posso riordinare gli elementi all'interno di una sezione?"
    Sì. La maggior parte degli elementi supporta il riordinamento tramite trascinamento. L'ordine viene salvato automaticamente.

??? question "Come aggiungo punti elenco a un'esperienza?"
    Modifichi l'esperienza e inserisca i punti salienti nel campo **Highlights** — un punto elenco per riga.

??? question "Come aggiungo il logo di un'azienda?"
    Modifichi l'esperienza, scorra fino alla sezione **Company Logo** e faccia clic su **Choose image** per caricare un'immagine. Può anche fare clic su **Use existing** per riutilizzare un logo già caricato. Attivi l'opzione **"Sync logo across all [Company]"** per applicare lo stesso logo a tutte le esperienze presso quell'azienda.

??? question "Ho cancellato qualcosa per errore. Posso annullare l'operazione?"
    Non è disponibile una funzione di annullamento. Poiché le modifiche vengono salvate automaticamente nel dataset attivo, la modifica viene mantenuta immediatamente. Se dispone di un'esportazione precedente o di un dataset salvato separatamente, può ripristinare da quello. È buona pratica esportare regolarmente il proprio CV come backup.

## Sezioni personalizzate

??? question "Quante sezioni personalizzate posso creare?"
    Non esiste un limite rigido. Ne crei quante ne necessita.

??? question "Posso cambiare il tipo di layout di una sezione personalizzata dopo averla creata?"
    Sì. Modifichi la sezione e selezioni un layout diverso. Tenga presente che alcuni campi potrebbero non essere trasferiti tra i diversi tipi di layout (ad esempio, passando da cards a social links).

??? question "Qual è la differenza tra i layout 'Bullet Points' e 'Free Text'?"
    **Bullet Points** visualizza ogni riga come un elemento di elenco puntato con un titolo di gruppo. **Free Text** visualizza testo semplice con interruzioni di riga preservate e senza titolo — simile alla sezione About/Bio.

## Stampa e PDF

??? question "Perché il mio PDF appare diverso dallo schermo?"
    L'output di stampa utilizza stili di stampa dedicati, ottimizzati per la carta. Alcuni effetti visivi (stati hover, animazioni, gradienti) vengono semplificati. Gli elementi nascosti e i controlli di amministrazione vengono rimossi automaticamente.

??? question "Come posso far stare il mio CV in meno pagine?"
    Provi ad attivare **Allow Section Splits** e **Allow Item Splits** nelle impostazioni Print & Export. Può anche nascondere elementi o sezioni meno importanti, oppure utilizzare layout di sezioni personalizzate più compatti. È inoltre possibile ridimensionare la stampa tramite la finestra di dialogo di stampa di qualsiasi browser (a volte un po' nascosta).

??? question "Perché alcuni elementi mancano dal mio CV stampato?"
    Verifichi se quegli elementi sono stati impostati come nascosti (icona dell'occhio). Gli elementi nascosti vengono esclusi dall'output di stampa e dalla visualizzazione pubblica.

??? question "I numeri di pagina non vengono visualizzati?"
    Si assicuri che **Page Numbers** sia attivato in Settings → Print & Export. Alcuni visualizzatori PDF del browser potrebbero non mostrare i numeri di pagina generati tramite CSS — provi a scaricare il PDF e ad aprirlo in un lettore dedicato.

## Timeline

??? question "La timeline mostra le date sbagliate / solo gli anni / le date complete?"
    La timeline ha una propria impostazione per le date. Vada su **Settings → Advanced → Timeline: Years Only** per alternare tra la visualizzazione solo anno e il formato data completo.

??? question "Posso aggiungere voci direttamente alla timeline?"
    No. La timeline viene generata automaticamente dalle Sue esperienze lavorative. Aggiunga o modifichi le esperienze e la timeline si aggiornerà di conseguenza.

??? question "La bandiera del paese non viene visualizzata sulla timeline?"
    Si assicuri che il campo **Country Code** dell'esperienza sia impostato su un codice paese ISO a 2 lettere valido (ad esempio, `us`, `gb`, `ch`, `de`, `fr`). Le bandiere vengono caricate da un CDN esterno.

??? question "Cosa succede quando ho due lavori contemporaneamente?"
    La timeline rileva automaticamente le posizioni sovrapposte e le visualizza come **tracce parallele**. Il lavoro simultaneo appare su una linea di diramazione elevata con connettori a curva S che mostrano i punti di biforcazione e confluenza. Non è necessaria alcuna configurazione — si basa interamente sulle date di inizio e fine. Le sovrapposizioni inferiori a 1 mese vengono ignorate (comuni durante le transizioni lavorative).

??? question "Perché la timeline mostra un logo invece del nome dell'azienda?"
    Se è stato caricato un logo aziendale per quell'esperienza, la timeline mostra l'immagine del logo al posto del testo. Se il file del logo manca, viene visualizzato il nome dell'azienda come fallback. Per rimuovere un logo dalla timeline, modifichi l'esperienza e faccia clic su **Remove** nella sezione Company Logo.

## Lingua e aggiornamenti

??? question "Come cambio la lingua dell'interfaccia di amministrazione?"
    Faccia clic sull'**icona del globo** nella barra degli strumenti e selezioni una lingua dalla griglia a discesa. La modifica viene applicata immediatamente e salvata tra le sessioni.

??? question "Come verifico quale versione sto utilizzando?"
    Apra **Settings** — il numero di versione è mostrato nell'angolo in basso a sinistra della finestra modale (ad esempio, `v1.11.0`).

??? question "Non vedo il banner di aggiornamento anche se è disponibile una nuova versione?"
    Il controllo della versione viene memorizzato nella cache per 24 ore. Riavvii il server (o il container Docker) per svuotare la cache e forzare un nuovo controllo. Il Suo server necessita inoltre di accesso Internet in uscita per raggiungere `raw.githubusercontent.com`.

## Dataset / CV multipli

??? question "Cos'è il dataset 'Default'?"
    Il dataset predefinito è la versione del CV che i visitatori vedono all'URL principale (`/`). Alla prima installazione, CV Manager crea automaticamente un dataset "Default" dai dati del CV. È possibile cambiare quale dataset è predefinito in qualsiasi momento utilizzando il pulsante di opzione nella finestra modale Open.

??? question "Le mie modifiche vengono salvate automaticamente?"
    Sì. Ogni modifica effettuata nell'interfaccia di amministrazione (aggiunta, modifica, eliminazione, riordinamento, attivazione/disattivazione della visibilità) viene salvata automaticamente nel dataset attivo dopo un breve ritardo. Il banner mostra "Saving…" e poi "✓ Saved" come conferma.

??? question "Cosa succede quando 'carico' un dataset?"
    Il caricamento di un dataset passa la copia di lavoro a quel dataset. Le modifiche precedenti sono già state salvate automaticamente, quindi nulla viene perso.

??? question "I visitatori possono vedere le mie modifiche in tempo reale?"
    No. Il sito pubblico serve il dataset predefinito congelato, non le modifiche in tempo reale. I visitatori vedono le modifiche solo dopo che il salvataggio automatico le scrive nel dataset predefinito. Se si sta modificando un dataset non predefinito, i visitatori non vedranno tali modifiche finché non lo si imposta come predefinito.

??? question "I visitatori possono vedere i miei dataset salvati?"
    Solo se li rende pubblici. Ogni dataset ha un interruttore nella finestra modale Open. Quando impostato su pubblico, quella versione diventa accessibile a `/v/slug` sul sito pubblico (porta 3001). I dataset privati sono visualizzabili in anteprima solo dall'interfaccia di amministrazione.

??? question "Come condivido una versione specifica del CV con qualcuno?"
    Apra la finestra modale **Open...**, imposti il dataset su pubblico, quindi faccia clic sull'icona di copia accanto all'URL slug. Condivida quel link — funziona sul sito pubblico senza esporre l'interfaccia di amministrazione.

??? question "Posso avere più versioni pubbliche contemporaneamente?"
    Sì. Può rendere pubblici quanti dataset desidera. Ognuno ottiene il proprio URL (ad esempio, `/v/technical-cv-1`, `/v/marketing-cv-2`). La pagina principale `/` mostra il dataset predefinito.

??? question "Posso eliminare il dataset predefinito?"
    No. Il dataset attualmente selezionato come predefinito (tramite il pulsante di opzione) non può essere eliminato. Imposti prima un dataset diverso come predefinito, quindi elimini quello precedente.

??? question "I motori di ricerca indicizzeranno i miei URL con versione?"
    Per impostazione predefinita, no — le pagine con versione ricevono `noindex, nofollow`. Per consentire l'indicizzazione, attivi **Index Versioned URLs** in Settings → Advanced.

## Sito pubblico e SEO

??? question "Come condivido il mio CV?"
    Condivida l'URL del Suo server pubblico (porta 3001). Se ha configurato un dominio con Cloudflare Tunnel o un reverse proxy, condivida quel dominio. L'URL principale mostra sempre il dataset predefinito. Può anche condividere versioni specifiche utilizzando URL pubblici con versione (consultare [Datasets](../guide/datasets.md)).

??? question "I motori di ricerca indicizzeranno il mio CV?"
    Per impostazione predefinita, sì — la pagina pubblica principale include meta tag appropriati, una sitemap e robots.txt. Per impedire l'indicizzazione, modifichi l'impostazione **Search Engine Indexing** su "No Index" in Settings → Advanced. Gli URL pubblici con versione (`/v/slug`) **non vengono indicizzati** per impostazione predefinita; attivi **Index Versioned URLs** se desidera che vengano scansionati.

??? question "Posso aggiungere Google Analytics al mio CV?"
    Sì. Incolli il codice di tracciamento in **Settings → Advanced → Tracking Code**. Viene inserito solo nelle pagine pubbliche.

## Docker e infrastruttura

??? question "Le mie modifiche non appaiono sul sito pubblico?"
    Il sito pubblico serve il **dataset predefinito**, che viene aggiornato automaticamente quando si modifica nell'interfaccia di amministrazione. Provi un aggiornamento forzato (`Ctrl+Shift+R`) sul sito pubblico. Se esegue container separati, si assicuri che condividano lo stesso volume dati.

??? question "Ricevo un errore 'port already in use'?"
    Modifichi la mappatura delle porte host nella configurazione Docker. Ad esempio, mappa su `3010:3000` e `3011:3001`. **Non** modifichi la variabile d'ambiente `PUBLIC_PORT` — quella è la porta interna del container.

??? question "Come eseguo il backup dei miei dati?"
    Due opzioni: utilizzi il pulsante **Export** nella barra degli strumenti dell'amministrazione (esporta in JSON), oppure esegua il backup della directory `data/` che contiene il database SQLite e le immagini caricate.

??? question "La foto profilo non viene visualizzata?"
    Si assicuri che l'immagine sia stata caricata tramite l'interfaccia di amministrazione. Il file è archiviato in `data/uploads/picture.jpeg`. Verifichi i permessi del file se esegue su Linux.
