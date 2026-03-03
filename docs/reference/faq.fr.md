# FAQ

## General

??? question "Mes donnees sont-elles stockees sur un serveur externe ?"
    Non. Tout s'execute localement sur votre serveur. Vos donnees de CV sont stockees dans un fichier de base de donnees SQLite dans le repertoire `/data`.

??? question "Puis-je utiliser CV Manager sans Docker ?"
    Oui. Installez Node.js 18+, executez `npm install` dans le repertoire du projet, puis `node src/server.js`. L'administration s'execute sur le port 3000 et le site public sur le port 3001.

??? question "Plusieurs personnes peuvent-elles utiliser la meme instance ?"
    CV Manager est concu comme une application mono-utilisateur. Chaque instance gere le CV d'une seule personne. Pour plusieurs personnes, executez des conteneurs separes.

## Modification

??? question "Comment marquer un poste comme « en cours » ?"
    Laissez le champ **Date de fin** vide. Il s'affichera comme « Present » sur le CV.

??? question "Puis-je reordonner les elements au sein d'une section ?"
    Oui. La plupart des elements prennent en charge le reordonnancement par glisser-deposer. L'ordre est enregistre automatiquement.

??? question "Comment ajouter des puces a une experience ?"
    Modifiez l'experience et entrez les points cles dans le champ **Points cles** — une puce par ligne.

??? question "Comment ajouter un logo d'entreprise ?"
    Modifiez l'experience, faites defiler jusqu'a la section **Logo d'entreprise**, et cliquez sur **Choisir une image** pour telecharger. Vous pouvez egalement cliquer sur **Utiliser un existant** pour reutiliser un logo deja telecharge. Activez le bouton bascule **« Synchroniser le logo sur toutes les experiences [Entreprise] »** pour appliquer le meme logo a toutes les experiences de cette entreprise.

??? question "J'ai accidentellement supprime quelque chose. Puis-je annuler ?"
    Il n'y a pas de fonction d'annulation. Comme les modifications sont enregistrees automatiquement dans le jeu de donnees actif, le changement est persiste immediatement. Si vous avez un export precedent ou un jeu de donnees enregistre separement, vous pouvez restaurer a partir de celui-ci. C'est une bonne pratique d'exporter regulierement votre CV comme sauvegarde.

## Sections personnalisees

??? question "Combien de sections personnalisees puis-je creer ?"
    Il n'y a pas de limite stricte. Creez-en autant que necessaire.

??? question "Puis-je changer le type de mise en page d'une section personnalisee apres l'avoir creee ?"
    Oui. Modifiez la section et selectionnez une mise en page differente. Notez que certains champs peuvent ne pas etre transferes entre les types de mise en page (par ex. passer des cartes aux liens sociaux).

??? question "Quelle est la difference entre les mises en page « Puces » et « Texte libre » ?"
    **Puces** affiche chaque ligne comme un element de liste a puces avec un titre de groupe. **Texte libre** affiche du texte brut avec des sauts de ligne preserves et sans titre — similaire a la section A propos/Biographie.

## Impression et PDF

??? question "Pourquoi mon PDF a-t-il un aspect different de l'ecran ?"
    La sortie d'impression utilise des styles d'impression dedies optimises pour le papier. Certains effets visuels (etats de survol, animations, degrades) sont simplifies. Les elements masques et les controles d'administration sont automatiquement supprimes.

??? question "Comment faire tenir mon CV sur moins de pages ?"
    Essayez d'activer **Autoriser le decoupage des sections** et **Autoriser le decoupage des elements** dans les parametres d'impression et export. Vous pouvez egalement masquer les elements ou sections moins importants, ou utiliser des mises en page de section personnalisee plus compactes. Vous pouvez aussi ajuster l'echelle d'impression via la boite de dialogue d'impression de n'importe quel navigateur (parfois un peu cachee).

??? question "Pourquoi certains elements manquent-ils dans mon CV imprime ?"
    Verifiez si ces elements ont ete bascules en masque (icone d'oeil). Les elements masques sont exclus de la sortie d'impression et de la vue publique.

??? question "Les numeros de page ne s'affichent pas ?"
    Assurez-vous que les **Numeros de page** sont actives dans Parametres → Impression et export. Certains lecteurs PDF de navigateur peuvent ne pas afficher les numeros de page generes par CSS — essayez de telecharger le PDF et de l'ouvrir dans un lecteur dedie.

## Chronologie

??? question "La chronologie affiche les mauvaises dates / uniquement les annees / les dates completes ?"
    La chronologie a son propre parametre de date. Allez dans **Parametres → Avance → Chronologie : annees uniquement** pour basculer entre l'affichage des annees uniquement et le format de date complet.

??? question "Puis-je ajouter des entrees directement a la chronologie ?"
    Non. La chronologie est generee automatiquement a partir de vos experiences professionnelles. Ajoutez ou modifiez des experiences et la chronologie se met a jour en consequence.

??? question "Le drapeau de pays ne s'affiche pas sur la chronologie ?"
    Assurez-vous que le champ **Code pays** de l'experience est defini sur un code pays ISO a 2 lettres valide (par ex. `us`, `gb`, `ch`, `de`, `fr`). Les drapeaux sont charges depuis un CDN externe.

??? question "Que se passe-t-il quand j'ai deux emplois en meme temps ?"
    La chronologie detecte automatiquement les postes qui se chevauchent et les affiche sous forme de **pistes paralleles**. L'emploi concurrent apparait sur une ligne de branche surelevee avec des connecteurs en courbe en S montrant les points de separation et de convergence. Aucune configuration necessaire — c'est entierement base sur vos dates de debut/fin. Les chevauchements de moins d'1 mois sont ignores (frequents lors des transitions professionnelles).

??? question "Pourquoi la chronologie affiche-t-elle un logo au lieu du nom de l'entreprise ?"
    Si vous avez telecharge un logo d'entreprise pour cette experience, la chronologie affiche l'image du logo au lieu du texte. Si le fichier du logo est manquant, elle revient au nom de l'entreprise. Pour supprimer un logo de la chronologie, modifiez l'experience et cliquez sur **Supprimer** dans la section Logo d'entreprise.

## Langue et mises a jour

??? question "Comment changer la langue de l'administration ?"
    Cliquez sur l'**icone de globe** dans la barre d'outils et selectionnez une langue dans la grille deroulante. Le changement s'applique immediatement et est conserve entre les sessions.

??? question "Comment verifier quelle version j'utilise ?"
    Ouvrez les **Parametres** — le numero de version est affiche dans le coin inferieur gauche de la fenetre modale (par ex. `v1.11.0`).

??? question "Je ne vois pas la banniere de mise a jour alors qu'une nouvelle version est disponible ?"
    La verification de version est mise en cache pendant 24 heures. Redemarrez votre serveur (ou conteneur Docker) pour vider le cache et forcer une nouvelle verification. Votre serveur doit egalement avoir un acces Internet sortant pour atteindre `raw.githubusercontent.com`.

## Jeux de donnees / CV multiples

??? question "Qu'est-ce que le jeu de donnees « Default » ?"
    Le jeu de donnees par defaut est la version de votre CV que les visiteurs voient a votre URL racine (`/`). Lors de la premiere installation, CV Manager cree automatiquement un jeu de donnees « Default » a partir de vos donnees de CV. Vous pouvez changer quel jeu de donnees est celui par defaut a tout moment en utilisant le bouton radio dans la fenetre modale Ouvrir.

??? question "Mes modifications sont-elles enregistrees automatiquement ?"
    Oui. Chaque modification que vous effectuez dans l'administration (ajout, modification, suppression, reordonnancement, basculement de visibilite) est automatiquement enregistree dans le jeu de donnees actif apres un court delai. La banniere affiche « Enregistrement... » puis « Enregistre » pour confirmer.

??? question "Que se passe-t-il quand je « charge » un jeu de donnees ?"
    Charger un jeu de donnees bascule votre copie de travail vers ce jeu de donnees. Vos modifications precedentes ont deja ete enregistrees automatiquement, donc rien n'est perdu.

??? question "Les visiteurs peuvent-ils voir mes modifications en temps reel ?"
    Non. Le site public sert le jeu de donnees par defaut fige, pas vos modifications en cours. Les visiteurs ne voient les changements qu'apres que l'enregistrement automatique les a ecrits dans le jeu de donnees par defaut. Si vous modifiez un jeu de donnees qui n'est pas celui par defaut, les visiteurs ne verront pas ces modifications tant que vous ne l'aurez pas defini comme jeu par defaut.

??? question "Les visiteurs peuvent-ils voir mes jeux de donnees enregistres ?"
    Uniquement si vous les rendez publics. Chaque jeu de donnees a un bouton bascule dans la fenetre modale Ouvrir. Lorsqu'il est defini comme public, cette version devient accessible a `/v/slug` sur le site public (port 3001). Les jeux de donnees prives ne sont previsualibles que depuis l'interface d'administration.

??? question "Comment partager une version specifique de CV avec quelqu'un ?"
    Ouvrez la fenetre modale **Ouvrir...**, basculez le jeu de donnees en public, puis cliquez sur l'icone de copie a cote de l'URL du slug. Partagez ce lien — il fonctionne sur le site public sans exposer votre interface d'administration.

??? question "Puis-je avoir plusieurs versions publiques en meme temps ?"
    Oui. Vous pouvez rendre autant de jeux de donnees publics que vous le souhaitez. Chacun obtient sa propre URL (par ex. `/v/technical-cv-1`, `/v/marketing-cv-2`). La page principale `/` affiche le jeu de donnees par defaut.

??? question "Puis-je supprimer le jeu de donnees par defaut ?"
    Non. Le jeu de donnees actuellement selectionne comme jeu par defaut (via le bouton radio) ne peut pas etre supprime. Definissez d'abord un autre jeu de donnees comme jeu par defaut, puis supprimez l'ancien.

??? question "Les moteurs de recherche indexeront-ils mes URL versionnees ?"
    Par defaut, non — les pages versionnees recoivent `noindex, nofollow`. Pour autoriser l'indexation, activez **Indexer les URL versionnees** dans Parametres → Avance.

## Site public et SEO

??? question "Comment partager mon CV ?"
    Partagez l'URL de votre serveur public (port 3001). Si vous avez configure un domaine avec Cloudflare Tunnel ou un reverse proxy, partagez ce domaine. L'URL racine affiche toujours votre jeu de donnees par defaut. Vous pouvez egalement partager des versions specifiques en utilisant les URL versionnees publiques (voir [Jeux de donnees](../guide/datasets.md)).

??? question "Les moteurs de recherche indexeront-ils mon CV ?"
    Par defaut, oui — la page publique principale inclut des balises meta appropriees, un sitemap et un fichier robots.txt. Pour empecher l'indexation, changez le parametre **Indexation par les moteurs de recherche** en « No Index » dans Parametres → Avance. Les URL versionnees publiques (`/v/slug`) ne sont **pas indexees** par defaut ; activez **Indexer les URL versionnees** si vous souhaitez qu'elles soient explorees.

??? question "Puis-je ajouter Google Analytics a mon CV ?"
    Oui. Collez votre code de suivi dans **Parametres → Avance → Code de suivi**. Il est injecte uniquement dans les pages publiques.

## Docker et infrastructure

??? question "Mes modifications n'apparaissent pas sur le site public ?"
    Le site public sert le **jeu de donnees par defaut**, qui est mis a jour automatiquement lorsque vous modifiez dans l'administration. Essayez un rafraichissement force (`Ctrl+Shift+R`) sur le site public. Si vous utilisez des conteneurs separes, assurez-vous qu'ils partagent le meme volume de donnees.

??? question "J'obtiens une erreur « port deja utilise » ?"
    Changez le mappage de port hote dans votre configuration Docker. Par exemple, mappez sur `3010:3000` et `3011:3001`. Ne changez **pas** la variable d'environnement `PUBLIC_PORT` — c'est le port interne du conteneur.

??? question "Comment sauvegarder mes donnees ?"
    Deux options : utilisez le bouton **Exporter** dans la barre d'outils d'administration (exporte en JSON), ou sauvegardez le repertoire `data/` qui contient la base de donnees SQLite et les images telechargees.

??? question "La photo de profil ne s'affiche pas ?"
    Assurez-vous que l'image a ete telechargee via l'interface d'administration. Le fichier est stocke a `data/uploads/picture.jpeg`. Verifiez les permissions de fichier si vous utilisez Linux.
