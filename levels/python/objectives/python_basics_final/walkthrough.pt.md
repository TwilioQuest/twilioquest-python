<%
const pystate = levelState.pythonWorldState;
%>

# Conquista do quebra-cabeça final

Ao lado do tablet, você vê uma página copiada do que parece ser um diário. Examinando mais de perto, você percebe foi escrito por ninguém menos que <b>Toledo Van Possum</b>, o líder da equipe de pesquisa!

<blockquote>
23 de janeiro de 2016
<hr/>
<p>
Finalmente, limpamos os escombros e entramos na Câmara do ritual de iniciação! Pense nisso: os primeiros programadores de Python entraram nesta câmara para provar a própria coragem e se tornar cidadãos da cidade perdida de Python.</p>
<p>
Depois de dominar os princípios básicos da linguagem de programação Python, os cidadãos em potencial tiveram que resolver o chamado “quebra-cabeça de palavras serpenteantes". Não consigo decifrar as letras do último quebra-cabeça administrado aqui, mas deve ser possível reconstruí-lo a partir de artefatos mais para dentro da câmara.
</p>
<p>
Parece que entrar na câmara do ritual de iniciação desencadeou algum tipo de mecanismo de segurança. As barreiras que apareceram seriam os <b>Testes de cidadania</b> para a cidade de Python? Só há uma maneira de descobrir, suponho.
</p>
<p>
Ah, cara. Vou ficar muuuuuito famoso!
</p>
<p>
--TVP
</p>
</blockquote>
Você resolve ir mais fundo na câmara para encontrar as pistas ausentes.

<% if (pystate.canSolvePuzzle) { %>

## Como resolver o quebra-cabeça?

Se você não conseguir resolver o quebra-cabeça, [confira este tópico do Stack Overflow](https://stackoverflow.com/questions/746082/how-to-find-list-of-possible-words-from-a-letter-matrix-boggle-solver). Ele contém algumas informações básicas sobre como os quebra-cabeças Boggle funcionam, e até mesmo algum código que você poderia usar para resolver o quebra-cabeça de forma programática.

<% } %>

## Dicas e sugestões

* As pistas necessárias para resolver o quebra-cabeça podem ser encontradas falando com espíritos nesta câmara.
* Você precisa <b>falar com cada espírito</b> antes de poder desbloquear este baú.
* Você pode verificar o status de sua pesquisa na guia “Objective” (Objetivo) deste baú.
* As barreiras do laser podem ser violadas usando sua ferramenta de hacking. Aproxime-se das barreiras e pressione a *SPACEBAR* (BARRA DE ESPAÇO). Conclua cada teste de programação para continuar sua pesquisa.