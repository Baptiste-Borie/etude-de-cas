# Présentation de la mini application de film

En arrivant sur la page d'accueil vous pouvez vous l'ensemble des films rangés dans les différentes catégories et une catégories tous les fims.
Sur cette page vous pouvez naviguez librement et si tous les films ne pouvez pas etre affichés vous pouvez scroll dans une catégorie horizontallement (catégorie "tous les films" par exemple)

Dans chaque carte vous retrouverez : 
    - le titre du film
    - l'année de paution 
    - en haut a droite un bouton permettant d'accéder a la suppression 
    - un bouton like/dislike et sa jauge qui s'adapte. 

Au survol de chaque titre de catégorie vous pourrez constastez une légère animation laissant à suggérer que c'est titre sont cliquable. Pour des raisons ergonimiques et UX les titres sont cliquables mais sur l'entiereté de la page est pas seulement sur les écritures. 

Si vous cliquez vous arriverais sur une nouvelle page, présentant tous les films de cette catégorie. 

Ici par contre pas de scroll horizontale afin de respecter la consigne et c'est ici que le nombre d'item affiché par ligne est "responsive".
Vous pourrez également changer de page à l'aide des boutons mis a disposition, et changer le nombre d'item également.

Si vous cliquez sur le logo/le titre "movio" vous pourrez retournez sur la page d'accueil.

Ainsi vous pourrez vous interesser à la dernière fonction que je n'ai pas mentionné. Le select en dessous du titre. Ici vous pourrez selectionner des catégories de films et valider votre choix. Ainsi vous serai rediriger vers la même page que quand vous cliquiais sur une catégorie, les titrees des catégories séléctionnes sont rappelés en haut et le fonctionnement est le même. 

Cette liste de film est récupéré dynamiquement. Cet a dire que si vous regardez la liste vous pourrez voir par exemple la catégorie "thriller" et si vous descendez  supprimer "Le silence des agneaux" (seul film dans cette catégorie). Le titre "thriller" premièrement disparait et cette catégorie disparait également de la sélection des filtres.

Si vous voulez réinitialiser les films supprimez le seul moyen et d'actualiser la page. 

Amélioration possible :

J'aurai aimé au lieu de donné une liste de films dans un .ts utilisé une API de film afin d'en récupérer en grand nombre. Je pense qu'au niveau propreté de code j'aurais également pu améliorer certaines choses. Il est fait exprès par exemple pour les styles d'avoir varié la facon de les déclarer afin que vous puissiez constaté que je suis à l'aise dans différente manière de faire. 
