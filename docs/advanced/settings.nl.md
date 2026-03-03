# Geavanceerde instellingen

## Zoekmachine-indexering (Robots Meta)

Bepaal hoe zoekmachines omgaan met uw publieke CV in **Instellingen → Geavanceerd → Zoekmachine-indexering**:

| Optie | Effect |
|-------|--------|
| **Index, Follow** | CV verschijnt in zoekresultaten, zoekmachines volgen uw links (standaard) |
| **No Index, Follow** | CV is verborgen in zoekresultaten, maar links worden wel gevolgd |
| **Index, No Follow** | CV verschijnt in zoekresultaten, maar uitgaande links worden genegeerd |
| **No Index, No Follow** | Volledig onzichtbaar voor zoekmachines |

Deze instelling is van invloed op zowel de `<meta name="robots">`-tag als het `/robots.txt`-bestand, en wordt server-side toegepast voor compatibiliteit met alle zoekmachinecrawlers.

## Indexering van versie-URL's

Standaard worden openbare versie-URL's (`/v/slug`) **niet geindexeerd** door zoekmachines — ze krijgen een `noindex, nofollow` meta-tag. Dit is handig als u directe links wilt delen zonder dat die pagina's in zoekresultaten verschijnen.

Om zoekmachines toe te staan versie-URL's te crawlen, schakelt u **Versie-URL's indexeren** in via **Instellingen → Geavanceerd**. Deze instelling is onafhankelijk van de bovenstaande optie voor zoekmachine-indexering, die alleen de hoofd `/`-pagina beinvloedt.

## Trackingcode

Plak analytics-trackingcode (Google Analytics, Matomo, Plausible, enz.) in **Instellingen → Geavanceerd → Trackingcode**. De code wordt alleen op de publieke CV-pagina's ingevoegd — niet in de admin-interface.
