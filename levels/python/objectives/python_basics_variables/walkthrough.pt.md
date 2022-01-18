# Notas do teste de Toledo

Uma breve pesquisa da área ao redor dessa barreira revela outra entrada no diário de Toledo Van Possum.

<blockquote>
21 de fevereiro de 2016
<hr/>
<p>
Os nomes tiveram grande importância na cidade de Python e foram escolhidos cuidadosamente para descrever a pessoa ou o objeto a que eram atribuídos. Eles esperavam que o mesmo fosse verdadeiro no código Python de seus cidadãos.
</p>
<p>
Para concluir este teste, preciso declarar duas variáveis conforme as instruções. Em programação, "variáveis" são usadas como espaços reservados para dados nos quais meu código funcionará. As variáveis geralmente recebem nomes descritivos, de modo que alguém que lê o código terá alguma ideia de que tipo de dados está contido neles.
</p>
<p>
--TVP
</p>
</blockquote>
## Dicas e truques

Ao ler o resto da entrada do diário de Toledo, você encontra algumas dicas potencialmente úteis.

<details>
<summary>Esqueci como criar arquivos de código e executá-los...</summary>
Não se preocupe! Você pode voltar para revisar os testes anteriores, basta caminhar até as barreiras do teste concluídas e pressionar a *SPACEBAR* (BARRA DE ESPAÇO). Você pode revisar as técnicas aprendidas nesses testes sempre que for necessário. As primeiras tentativas dessa área devem familiarizá-lo com a forma de escrever e executar o código Python.

</details>
<details>
<summary>O que é uma variável e como criar uma?</summary>
Uma [variável](https://www.w3schools.com/python/python_variables.asp) é um contêiner para dados em que o programa irá operar. As variáveis devem ter nomes contínuos sem espaços. No Python, se você achar que um nome de variável precisa ter várias palavras, use um caractere `_` no nome em vez de um espaço. Assim, se você quiser nomear uma variável "my awesome thing", uma boa maneira de expressar isso em Python é `my_awesome_thing`.

Os nomes de variáveis são criados por você e podem ser (quase) qualquer coisa que você quiser.

Você __assign__ (atribui) um valor a uma variável no código usando o `=` (sinal de igual). O código abaixo atribui o número `777` a uma variável chamada `lucky_number` e atribui a string `"Star Wars"` a uma variável chamada `favorite_movie`.

```python
lucky_number = 777
favorite_movie = "Star Wars"

print(f"My luck number is {lucky_number}")
print(f"My favorite movie is {favorite_movie}")
```

</details>
<details>
<summary>O que preciso fazer para concluir este teste?</summary>
Crie um arquivo chamado `variables.py` na sua pasta de código:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Nesse arquivo, crie uma variável `favorite_robot` que seja definida para a string `"Cedric"`. Crie outra variável chamada `meaning_of_life` que seja definida para o número `42`. Se você não souber como declarar variáveis, leia a dica acima desta.

Quando seu código estiver pronto, clique no botão *HACK* para concluir o teste.

</details>
