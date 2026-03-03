# Installation

## Docker Compose (recommande)

```bash
docker-compose up -d --build
```

Cela demarre le serveur d'administration (port 3000) et le serveur public (port 3001).

## Installation en une ligne

```bash
curl -fsSL https://raw.githubusercontent.com/vincentmakes/cv-manager/main/install.sh | bash
```

## Docker Hub

```bash
docker pull vincentmakes/cv-manager:latest
docker run -d -p 3000:3000 -p 3001:3001 -v cv-data:/app/data vincentmakes/cv-manager:latest
```

## Unraid

Installez via **Community Applications** — recherchez "cv-manager". Deux modeles sont disponibles :

- **cv-manager** (Administration) — mappe sur le port 3000
- **cv-manager-public** (Public) — mappe sur le port 3001, lecture seule

Les deux conteneurs partagent le meme repertoire de donnees (generalement `/mnt/user/appdata/cv-manager`).

## Rendre votre CV public avec Cloudflare Tunnel

1. Configurez un Cloudflare Tunnel pointant vers le port 3001 (le serveur public)
2. Utilisez **Cloudflare Access** pour proteger le port 3000 (administration) derriere une authentification
3. Votre CV est desormais accessible a votre domaine tandis que l'administration reste securisee

## Fonctionnement sans Docker

Installez Node.js 18+, executez `npm install` dans le repertoire du projet, puis `node src/server.js`. L'administration s'execute sur le port 3000 et le site public sur le port 3001.
