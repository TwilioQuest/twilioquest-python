<%
const pystate = levelState.pythonWorldState;
%>

# Résoudre le puzzle final

À côté de la plaque se trouve une page déchirée provenant d'un journal de presse quotidienne. En l'examinant de plus près, vous réalisez qu'elle n'a été écrite par nul autre que <b>Toledo Van&nbsp;Possum</b>, le chef de l'équipe de recherche&nbsp;!

<blockquote>
23 janvier 2016
<hr/>
<p>
Nous avons enfin dégagé les décombres et pénétré dans la Chambre de Rituel d'Initiation! Rappelez-vous: les premiers programmeurs Python sont entrés dans cette chambre pour faire leurs preuves et devenir citoyens de la Ville perdue de Python.</p>
<p>
Après avoir maîtrisé les bases du langage de programmation Python, les citoyens potentiels ont dû résoudre la «grille de mots mêlés». Je ne peux pas distinguer les lettres de la dernière grille proposée ici, mais je devrais pouvoir la reconstituer à partir d'artefacts contenus dans la chambre.
</p>
<p>
Il semble qu'une sorte de mécanisme de sécurité se soit déclenché lorsque nous sommes entrés dans la chambre de rituel d'initiation. Les barrières qui sont apparues correspondent-elles aux <b>Épreuves de Citoyenneté</b> pour la ville de Python? Il n'y a qu'une seule façon de le découvrir.
</p>
<p>
Ça alors. Je vais être célèbre!
</p>
<p>
--TVP
</p>
</blockquote>
Vous décidez d'avancer dans les profondeurs de la chambre pour trouver les indices manquants.

<% if (pystate.canSolvePuzzle) { %>

## Comment résoudre la grille&nbsp;?

Si vous n'arrivez pas à résoudre la grille, [consultez le thread Stack Overflow](https://stackoverflow.com/questions/746082/how-to-find-list-of-possible-words-from-a-letter-matrix-boggle-solver). Il contient des informations générales sur le fonctionnement des grilles Boggle, et même du code que vous pourriez utiliser pour résoudre la grille par programmation.

<% } %>

## Conseils et astuces

* Pour trouver les indices nécessaires pour résoudre la grille, parlez aux esprits de cette chambre.
* Vous devez trouver <b>tous les esprits</b> et leur parler avant de pouvoir déverrouiller ce coffre.
* Pour vérifier le statut de votre recherche, consultez l'onglet «&nbsp;Objectif&nbsp;» de ce coffre.
* Les barrières laser peuvent être désactivées à l'aide de votre outil de piratage. Approchez-vous des barrières et appuyez sur la *BARRE D'ESPACE*. Terminez chaque épreuve de programmation pour poursuivre votre recherche.