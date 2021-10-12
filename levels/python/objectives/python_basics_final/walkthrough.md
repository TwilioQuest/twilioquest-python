<%
const pystate = levelState.pythonWorldState;
%>

# Conquering the Final Puzzle

Next to the tablet, you see a page ripped from what looks to be a daily journal. Examining it more closely, you realize it was written by none other than <b>Toledo Van Possum</b>, the leader of the research team!

<blockquote>
January 23rd, 2016

<hr/>

<p>
We've finally cleared the rubble and entered the Initiation Ritual Chamber! Just think of it - the first Python programmers entered this very chamber to prove their mettle and become citizens of the long lost City of Python.</p>

<p>
After mastering the basics of the Python programming language, potential citizens had to solve the so-called "serpentine word puzzle". I can't make out the letters of the last puzzle that was administered here, but it should be possible to reconstruct it from artifacts further inside the chamber.
</p>

<p>
It looks like entering the Initiation Ritual Chamber has triggered a security mechanism of some kind. Could the barriers that appeared be the <b>Trials of Citizenship</b> for the City of Python? Only one way to find out I suppose.
</p>

<p>
Oh, man. I am going to be soooooo famous!
</p>

<p>
--TVP
</p>
</blockquote>

You resolve to travel deeper into the chamber to find the missing clues.

<% if (pystate.canSolvePuzzle) { %>

## How do I solve the puzzle?
If you find yourself stuck on trying to solve the puzzle, [check out this Stack Overflow thread](https://stackoverflow.com/questions/746082/how-to-find-list-of-possible-words-from-a-letter-matrix-boggle-solver). It contains some background information on how Boggle puzzles work, and even some code you could use to solve the puzzle programmatically.

<% } %>

## Hints and Tips

* The clues needed to solve the puzzle can be found by speaking to spirits in this chamber.
* You need to find <b>speak with every spirit</b> before you can unlock this chest.
* You can check the status of your search on the "Objective" tab for this chest.
* The laser barriers can be breached using your hacking tool. Approach the barriers and press the *SPACEBAR* - complete each programming trial to continue your search.
