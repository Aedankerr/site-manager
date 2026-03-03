# Seguridad y privacidad

## Protección de la interfaz de administración

La interfaz de administración (puerto 3000) da acceso completo para editar y eliminar los datos de su CV. **Nunca debe exponerse directamente a internet.**

**Enfoques recomendados:**

- **Cloudflare Access** — Si usa Cloudflare Tunnel, configure una política de [Cloudflare Access](https://developers.cloudflare.com/cloudflare-one/policies/access/) en el nombre de host de su administración. Esto agrega una capa de autenticación (OTP por correo electrónico, SSO, etc.) antes de que alguien pueda acceder a la página de administración. Solo exponga el puerto 3001 (público) sin autenticación.
- **Solo VPN** — Mantenga el puerto 3000 accesible solo desde su red local o VPN. Nunca lo redireccione al internet.
- **Proxy inverso con autenticación** — Si usa Nginx, Caddy o Traefik, agregue autenticación básica HTTP o un middleware de autenticación frente al puerto 3000.

## Seguridad del sitio público

El sitio público (puerto 3001) está diseñado para estar expuesto a internet — bloquea todas las operaciones de escritura, aplica limitación de tasa (60 solicitudes/minuto por IP) e incluye encabezados de seguridad (CSP, X-Frame-Options, protección XSS).

!!! warning "Regla general"
    Puerto público → abierto al mundo. Puerto de administración → detrás de autenticación, siempre.
