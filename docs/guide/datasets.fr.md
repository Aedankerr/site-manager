# Jeux de donnees (versions multiples du CV)

## Fonctionnement des jeux de donnees

Les jeux de donnees sont des instantanes enregistres de votre CV. Un jeu de donnees est toujours le **jeu par defaut** — c'est la version que les visiteurs voient a votre URL racine (`/`). Vous pouvez creer des jeux de donnees supplementaires pour differents publics (par ex. un CV technique, un CV de management) et les partager a leurs propres URL.

Lorsque vous installez CV Manager pour la premiere fois, un jeu de donnees « Default » est automatiquement cree a partir de vos donnees de CV. Toutes les modifications que vous effectuez dans l'administration sont **enregistrees automatiquement** dans le jeu de donnees actif — il n'y a pas d'etape de sauvegarde separee.

## La banniere du jeu de donnees actif

Une banniere sous la barre d'outils indique quel jeu de donnees vous modifiez actuellement. Elle affiche :

- Le **nom du jeu de donnees** (par ex. « Default », « CV Technique »)
- Un **badge « Default »** si ce jeu de donnees est celui servi a `/`
- Un **statut d'enregistrement automatique** — affiche brievement « Enregistrement... » puis « Enregistre » apres chaque modification

Chaque modification que vous effectuez (ajout d'elements, modification de contenu, reordonnancement, activation/desactivation de la visibilite) est automatiquement enregistree dans le jeu de donnees actif apres un court delai.

## Enregistrer un nouveau jeu de donnees

Cliquez sur **Enregistrer sous...** dans la barre d'outils, entrez un nom (par ex. « CV Technique », « Poste Marketing »), et l'etat actuel de votre CV est enregistre comme un nouvel instantane. Le nouveau jeu de donnees devient le jeu actif.

## La fenetre modale Ouvrir

Cliquez sur **Ouvrir...** pour voir tous les jeux de donnees enregistres. Une **legende** en haut explique les trois controles :

| Controle | Fonction |
|----------|----------|
| **Bouton radio** | Selectionner quel jeu de donnees est servi a votre URL racine `/` (le jeu par defaut) |
| **Bouton bascule** | Partager d'autres jeux de donnees a leur propre URL `/v/slug` |
| **Bouton oeil** | Previsualiser un jeu de donnees enregistre sans le rendre public |

Chaque ligne de jeu de donnees affiche :

- **Nom** et date de derniere mise a jour
- **Badge « Default »** — sur le jeu de donnees selectionne avec le bouton radio
- **Badge « Modification en cours »** — sur le jeu de donnees actuellement charge dans l'administration
- Une **URL versionnee** (par ex. `/v/technical-cv-1`) — masquee pour le jeu de donnees par defaut puisqu'il est servi a `/`
- Bouton **Charger** — bascule vers ce jeu de donnees (affiche « Recharger » s'il est deja actif)
- Bouton **Supprimer** — supprime definitivement le jeu de donnees (desactive pour le jeu par defaut actuel)

## Definir le jeu de donnees par defaut

Le jeu de donnees par defaut est la version que les visiteurs voient lorsqu'ils visitent votre URL racine (`/`). Pour le modifier :

1. Ouvrez la fenetre modale **Ouvrir...**
2. Cliquez sur le **bouton radio** a cote du jeu de donnees que vous souhaitez comme CV public
3. Le changement prend effet immediatement — le site public sert desormais ce jeu de donnees

Cela decouple votre CV public de vos modifications. Vous pouvez librement modifier le contenu dans l'administration sans que les visiteurs voient les modifications en cours jusqu'a ce que vous soyez pret.

## URL versionnees publiques

Chaque jeu de donnees enregistre (autre que celui par defaut) obtient un chemin URL unique (par ex. `/v/technical-cv-1`). Par defaut, ceux-ci sont **prives** — accessibles uniquement depuis l'interface d'administration pour la previsualisation.

Pour partager une version specifique publiquement :

1. Ouvrez la fenetre modale **Ouvrir...**
2. Trouvez le jeu de donnees que vous souhaitez partager
3. Activez le **bouton bascule** a cote — il devient bleu et un badge vert **Public** apparait
4. L'URL `/v/slug` est desormais accessible sur le **site public** (port 3001)

Cela vous permet de partager des versions de CV adaptees a differents publics. Par exemple, vous pourriez rendre un « CV Technique » public pour les postes d'ingenierie tout en gardant un « CV Management » prive jusqu'a ce qu'il soit necessaire.

**Copier l'URL** : Cliquez sur l'icone de copie a cote du slug pour copier l'URL complete dans votre presse-papiers. Le message de notification vous indiquera si vous avez copie une URL publique ou une URL de previsualisation uniquement.

!!! note "Remarque"
    La page publique principale a `/` affiche toujours le **jeu de donnees par defaut** — pas vos modifications en cours. Cela signifie que vous pouvez experimenter en toute securite dans l'administration sans affecter ce que voient les visiteurs.
