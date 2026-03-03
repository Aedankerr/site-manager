# Beveiliging & Privacy

## De admin-interface beschermen

De admin-interface (poort 3000) geeft volledige toegang tot het bewerken en verwijderen van uw CV-gegevens. **Deze mag nooit rechtstreeks aan het internet worden blootgesteld.**

**Aanbevolen benaderingen:**

- **Cloudflare Access** — Als u Cloudflare Tunnel gebruikt, stel dan een [Cloudflare Access](https://developers.cloudflare.com/cloudflare-one/policies/access/)-beleid in op uw admin-hostnaam. Dit voegt een authenticatielaag toe (e-mail OTP, SSO, enz.) voordat iemand de adminpagina kan bereiken. Stel alleen poort 3001 (publiek) bloot zonder authenticatie.
- **Alleen via VPN** — Houd poort 3000 alleen toegankelijk vanuit uw lokale netwerk of VPN. Forward deze poort nooit naar het internet.
- **Reverse proxy met authenticatie** — Als u Nginx, Caddy of Traefik gebruikt, voeg dan HTTP basic auth of een authenticatie-middleware toe voor poort 3000.

## Beveiliging van de publieke site

De publieke site (poort 3001) is ontworpen om naar het internet gericht te zijn — deze blokkeert alle schrijfbewerkingen, dwingt snelheidsbeperking af (60 verzoeken/minuut per IP) en bevat beveiligingsheaders (CSP, X-Frame-Options, XSS-bescherming).

!!! warning "Vuistregel"
    Publieke poort → open voor de wereld. Admin-poort → achter authenticatie, altijd.
