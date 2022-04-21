<%
const pystate = levelState.pythonWorldState;
%>

# Grille de mots mêlés

<div style="font-size: 22px;border-bottom: 2px dashed;padding:10px 0;">
<b>Statut actuel de la grille:&nbsp;</b> 
<b style="color:<%= pystate.canSolvePuzzle ? 'green' : 'red' %>">
  <%= pystate.canSolvePuzzle ? 'Solvable' : 'Unsolvable - See Below' %>
</b>
<span style="height: 10px;display:block;"></span>
<b>Indices trouvés:&nbsp;</b> 
<b>
  <%= pystate.cluesFound %> / <%= pystate.cluesTotal %>
</b>
</div>
Les nouveaux citoyens de l'ancienne <b>ville de Python</b> devaient résoudre une grille de mots mêlés pour prouver leur ingéniosité avant de gagner leur citoyenneté. Leur récompense&nbsp;: un symbole de leur statut, le <b>Bâton du Savoir Pythonique</b>. Vous trouverez ci-dessous l'une de ces grilles&nbsp;: résolvez-la pour gagner cet ancien prix&nbsp;!

## Grille de mots mêlés

<% if (pystate.cluesFound === 0) { %>

Près du coffre contenant le bâton se trouve une plaque en pierre érodée. Elle contient une grille de 3&nbsp;carrés sur 3. Il semble que quelque chose était écrit sur chaque case, mais les âges ont effacé toute trace des lettres&nbsp;:

<% } else if (pystate.cluesFound > 0) { %>

Près du coffre contenant le bâton se trouve une plaque en pierre érodée. Elle contient une grille de 3&nbsp;carrés sur 3. À l'aide d'un burin situé à proximité, gravez délicatement les lettres que les fantômes qui hantent la chambre vous ont révélées&nbsp;:

<% } else { %>

Près du coffre contenant le bâton se trouve une plaque en pierre érodée. Elle contient une grille de 3&nbsp;carrés sur 3. Maintenant que vous avez trouvé tous les indices, utilisez le burin situé à proximité pour graver une lettre dans chaque case. Voici la grille terminée&nbsp;:

<% } %>

<style>
.puzzle-grid {
  background-color: #343434;
  background-image: linear-gradient(315deg, #343434 0%, #676767 74%);
}

.puzzle-grid td {
  width: 33%;
  border: 5px solid #aaaaaa;
  text-align: center;
  color: #eee;
  font-size: 42px !important;
  vertical-align: middle !important;
  height: 100px !important;
  font-family: Papyrus, "Times New Roman", serif;
}

.puzzle-grid tr {
  background-color: transparent !important;
}
</style>
<table class="puzzle-grid">
  <tr>
    <td>
      <%= pystate.clues['one'] ? 'R' : '???' %>
    </td>
    <td>
      <%= pystate.clues['two'] ? 'N' : '???' %>
    </td>
    <td>
      <%= pystate.clues['three'] ? 'O' : '???' %>
    </td>
  </tr>
  <tr>
    <td>
      <%= pystate.clues['four'] ? 'A' : '???' %>
    </td>
    <td>
      <%= pystate.clues['five'] ? 'J' : '???' %>
    </td>
    <td>
      <%= pystate.clues['six'] ? 'S' : '???' %>
    </td>
  </tr>
  <tr>
    <td>
      <%= pystate.clues['seven'] ? 'P' : '???' %>
    </td>
    <td>
      <%= pystate.clues['eight'] ? 'Y' : '???' %>
    </td>
    <td>
      <%= pystate.clues['nine'] ? 'F' : '???' %>
    </td>
  </tr>
</table>
<% if (pystate.canSolvePuzzle) { %>

## Résoudre la grille de mots-mêlés

Maintenant que vous avez récupéré tous les indices, toute la grille de mots-mêlés a été révélée. Elle ressemble au [jeu de Boggle](https://en.wikipedia.org/wiki/Boggle). Pour résoudre la grille, vous devez tracer une ligne continue entre les lettres (haut, bas, gauche, droite ou diagonale) pour <b>épeler un mot de cinq lettres en anglais</b>.

Une fois que vous avez trouvé le mot (il peut y en avoir plusieurs), saisissez-le dans le champ de texte à droite et cliquez sur *HACK*.

<% } %>

## Reconstruire la grille

Les fantômes qui hantent la chambre de rituel d'initiation détiennent les indices permettant de résoudre ce mystère. <b>Trouvez tous les esprits de cette chambre et parlez-leur</b>. Chacun vous révèlera l'un des indices dont vous avez besoin pour résoudre cette grille.

Pour avancer, vous devrez surmonter une série d'épreuves, les mêmes que celles endurées par les premiers Pythoneux sur leur voie vers la citoyenneté dans la ville de Python. Si vous maîtrisez les principes de base du [langage de programmation Python](https://www.python.org/), vous pourrez suivre leurs traces et découvrir les secrets de la chambre de rituel d'initiation.

<% if (pystate.canSolvePuzzle) { %>

Maintenant que vous avez rassemblé tous les indices, vous pouvez résoudre la grille finale. Saisissez la solution du casse-tête (décrit sous la grille ci-dessus) dans le champ de texte et cliquez sur *HACK* pour réclamer le bâton&nbsp;!

<% } else { %>

À mesure que vous __récupérez des indices__, la __grille ci-dessus change__. Une fois que vous aurez récupéré __les neuf indices__, vous pourrez revenir ici pour résoudre la grille&nbsp;!

<% } %>
