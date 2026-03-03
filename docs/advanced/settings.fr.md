# Parametres avances

## Indexation par les moteurs de recherche (meta robots)

Controlez la facon dont les moteurs de recherche interagissent avec votre CV public dans **Parametres → Avance → Indexation par les moteurs de recherche** :

| Option | Effet |
|--------|-------|
| **Index, Follow** | Le CV apparait dans les resultats de recherche, les moteurs de recherche suivent vos liens (par defaut) |
| **No Index, Follow** | Le CV est masque des resultats de recherche, mais les liens sont suivis |
| **Index, No Follow** | Le CV apparait dans les resultats de recherche, mais les liens sortants sont ignores |
| **No Index, No Follow** | Totalement invisible pour les moteurs de recherche |

Ce parametre affecte a la fois la balise `<meta name="robots">` et le fichier `/robots.txt`, et est applique cote serveur pour la compatibilite avec tous les robots d'indexation.

## Indexation des URL versionnees

Par defaut, les URL versionnees publiques (`/v/slug`) ne sont **pas indexees** par les moteurs de recherche — elles recoivent une balise meta `noindex, nofollow`. Cela est utile si vous souhaitez partager des liens directs sans que ces pages apparaissent dans les resultats de recherche.

Pour permettre aux moteurs de recherche d'explorer les URL versionnees, activez **Indexer les URL versionnees** dans **Parametres → Avance**. Ce parametre est independant de l'option principale d'indexation par les moteurs de recherche ci-dessus, qui n'affecte que la page principale `/`.

## Code de suivi

Collez le code de suivi analytique (Google Analytics, Matomo, Plausible, etc.) dans **Parametres → Avance → Code de suivi**. Le code est injecte uniquement dans les pages publiques du CV — pas dans l'interface d'administration.
