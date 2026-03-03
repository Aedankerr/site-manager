# Securite et confidentialite

## Proteger l'interface d'administration

L'interface d'administration (port 3000) donne un acces complet pour modifier et supprimer vos donnees de CV. **Elle ne doit jamais etre exposee directement sur Internet.**

**Approches recommandees :**

- **Cloudflare Access** — Si vous utilisez Cloudflare Tunnel, configurez une politique [Cloudflare Access](https://developers.cloudflare.com/cloudflare-one/policies/access/) sur votre nom d'hote d'administration. Cela ajoute une couche d'authentification (OTP par e-mail, SSO, etc.) avant que quiconque puisse acceder a la page d'administration. N'exposez que le port 3001 (public) sans authentification.
- **VPN uniquement** — Gardez le port 3000 accessible uniquement depuis votre reseau local ou VPN. Ne faites jamais de redirection de port vers Internet.
- **Reverse proxy avec authentification** — Si vous utilisez Nginx, Caddy ou Traefik, ajoutez une authentification HTTP basique ou un middleware d'authentification devant le port 3000.

## Securite du site public

Le site public (port 3001) est concu pour etre accessible depuis Internet — il bloque toutes les operations d'ecriture, applique une limitation de debit (60 requetes/minute par IP) et inclut des en-tetes de securite (CSP, X-Frame-Options, protection XSS).

!!! warning "Regle generale"
    Port public → ouvert au monde entier. Port d'administration → derriere une authentification, toujours.
