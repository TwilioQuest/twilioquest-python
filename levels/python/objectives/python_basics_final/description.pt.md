<%
const pystate = levelState.pythonWorldState;
%>

# Quebra-cabeça de palavras serpenteantes

<div style="font-size: 22px;border-bottom: 2px dashed;padding:10px 0;">
<b>Status atual do quebra-cabeça:&nbsp;</b> 
<b style="color:<%= pystate.canSolvePuzzle ? 'green' : 'red' %>">
  <%= pystate.canSolvePuzzle ? 'Solvable' : 'Unsolvable - See Below' %>
</b>
<span style="height: 10px;display:block;"></span>
<b>Dicas encontradas:&nbsp;</b> 
<b>
  <%= pystate.cluesFound %> / <%= pystate.cluesTotal %>
</b>
</div>
Os novos cidadãos da antiga <b>Cidade de Python</b> foram obrigados a resolver um quebra-cabeça de palavras serpenteantes para provar sua inteligência antes de ganhar a cidadania. A recompensa: um símbolo da posição deles, o <b>Cajado do conhecimento pitônico</b>. Um desses quebra-cabeças é encontrado a seguir. Resolva-o para ganhar este prêmio ancestral!

## Grade de quebra-cabeça

<% if (pystate.cluesFound === 0) { %>

Perto do baú que contém o cajado, você vê uma placa de pedra desgastada. Ela contém uma grade de quadrados 3x3. Em cada quadrado parece ter algo escrito, mas o desgaste apagou qualquer vestígio das letras:

<% } else if (pystate.cluesFound > 0) { %>

Perto do baú que contém o cajado, você vê uma placa de pedra desgastada. Ela contém uma grade de quadrados 3x3. Você pega um cinzel próximo e grava suavemente as letras que você descobriu com os fantasmas que assombram a câmara:

<% } else { %>

Perto do baú que contém o cajado, você vê uma placa de pedra desgastada. Ela contém uma grade de quadrados 3x3. Agora que você encontrou todas as pistas, você pode usar um cinzel próximo para gravar uma letra em cada quadrado. O quebra-cabeça concluído é o seguinte:

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

## Solução do quebra-cabeça de palavras serpenteantes

Agora que você recuperou todas as pistas, o quebra-cabeça de palavras serpenteantes completo foi revelado. Parece ser composto de forma semelhante ao jogo de [Boggle](https://en.wikipedia.org/wiki/Boggle). Para resolver o quebra-cabeça, você precisa traçar uma linha contínua entre as letras (para cima, para baixo, para a esquerda, para a direita ou diagonalmente) para <b>formar uma palavra em inglês de cinco letras</b>.

Depois de encontrar a palavra (pode haver mais de uma), insira-a no campo de texto à direita e clique em *HACK*.

<% } %>

## Reconstrução do quebra-cabeça

As figuras fantasmagóricas que assombram a câmara do ritual de iniciação têm as pistas para desvendar este mistério. <b>Encontre e fale com todos os espíritos nesta câmara</b>, e eles descobrirão uma das pistas de que você precisa para resolver este quebra-cabeça.

Para seguir o seu caminho pela área, você precisará passar por uma série de testes, os mesmos colocados antes dos primeiros pitonistas em seu caminho para a cidadania na cidade de Python. Ao dominar os princípios básicos da [linguagem de programação Python](https://www.python.org/), você será capaz de seguir seus passos e descobrir os segredos da câmara do ritual de iniciação.

<% if (pystate.canSolvePuzzle) { %>

Agora que coletou todas as pistas, você pode resolver o quebra-cabeça final. Insira a solução do quebra-cabeça (descrito embaixo da grade acima) no campo de texto e clique em *HACK* para reivindicar o cajado!

<% } else { %>

Conforme você __recupera as pistas__, o __quebra-cabeça acima mudará__. Depois de recuperar __todas as nove pistas__, você poderá retornar aqui e resolver o quebra-cabeça!

<% } %>