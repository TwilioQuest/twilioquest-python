<%
const pystate = levelState.pythonWorldState;
%>

# Serpentine Word Puzzle
<div style="font-size: 22px;border-bottom: 2px dashed;padding:10px 0;">
<b>Current Puzzle Status:&nbsp;</b> 
<b style="color:<%= pystate.canSolvePuzzle ? 'green' : 'red' %>">
  <%= pystate.canSolvePuzzle ? 'Solvable' : 'Unsolvable - See Below' %>
</b>
<span style="height: 10px;display:block;"></span>
<b>Clues Found:&nbsp;</b> 
<b>
  <%= pystate.cluesFound %> / <%= pystate.cluesTotal %>
</b>
</div>

New citizens in the ancient <b>City of Python</b> were required to solve a serpentine word puzzle to prove their cleverness before earning their citizenship. Their reward: a symbol of their status, the <b>Staff of Pythonic Knowledge</b>. One such puzzle is found below - solve it to earn this ancient prize!

## Puzzle Grid
<% if (pystate.cluesFound === 0) { %>
Near the chest containing the staff, you see a weathered stone tablet. It contains a 3x3 grid of squares. Each square looks like it may have had something written on it, but the ages have erased any trace of the lettering:
<% } else if (pystate.cluesFound > 0) { %>
Near the chest containing the staff, you see a weathered stone tablet. It contains a 3x3 grid of squares. Using a nearby chisel, you gently etch in the letters you have revealed from the research notes scattered about the chamber:
<% } else { %>
Near the chest containing the staff, you see a weathered stone tablet. It contains a 3x3 grid of squares. Now that you have found all the research notes, you are able to use a nearby chisel to etch a letter into each square. The completed puzzle is as follows:
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
## Solving the Serpentine Word Puzzle
Now that you have recovered all the research notes, the full Serpentine Word Puzzle has been revealed. It looks to be composed similarly to the game of [Boggle](https://en.wikipedia.org/wiki/Boggle). To solve the puzzle, you need to trace a continuous line between letters (up, down, left, right, or diagonally) to <b>spell a five-letter English language word</b>.

Once you have found the word (there may be more than one), enter it into the text field on the right and click *HACK*.
<% } %>

## Reconstructing the Puzzle

The <b>TwilioQuest Program</b> sent a research team led by the legendary explorer <b>Toledo Van Possum</b> to study these ruins. Toledo and his team have gone missing, but you may be able to recover some of their research. You should search the ruins of the Initiation Ritual Chamber for <b>Toledo's research notes</b> - they could contain the clues you need to solve this puzzle.

To make your way through the area, you will need to overcome a series of trials - the same ones placed before the first Pythonistas on their path to citizenship in the City of Python. By mastering the basic principles of the [Python programming language](https://www.python.org/), you should be able to follow in their footsteps and uncover the secrets of the Initiation Ritual Chamber.

<% if (pystate.canSolvePuzzle) { %>
Now that you have collected all the clues left by Toledo's research team, you can solve the final puzzle. Enter the solution to the puzzle (described beneath the grid above) in the text field and click *HACK* to claim the staff!
<% } else { %>
As you __recover clues__, the __puzzle above will change__. Once you have recovered __all nine clues__, you will be able to return here and solve the puzzle!
<% } %>
