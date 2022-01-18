# Notas do teste de Toledo

Você encontra outra entrada de diário ao lado dessa barreira.

<blockquote>
4 de abril de 2016
<hr/>
<p>
Depois de uma série de conflitos civis que surgiram de uma sucessão de líderes na cidade do Python, os primeiros pitonistas desenvolveram um sistema rigoroso de sucessão entre seus principais líderes. As listas ordenadas continuam a ser muito importantes na maioria das sociedades, e os cidadãos potenciais tiveram de completar este teste para garantir que entenderam o conceito.
</p>
<p>
As <b>Listas</b> são listas ordenadas de objetos no código Python. As listas podem conter qualquer tipo de dados, strings, números e tipos de dados ainda mais complexos. Precisarei aprender a criar e trabalhar com os dados em uma lista para concluir este teste.
</p>
<p>
--TVP
</p>
</blockquote>
## Dicas e truques

A entrada do diário continha algumas outras pérolas úteis de sabedoria.

<details>
<summary>Como criar uma lista?</summary>
Agora, você deve aprender a criar e trabalhar com [listas](https://docs.python.org/3/tutorial/datastructures.html) em seu código Python. Vamos criar uma lista de itens que podem aparecer em uma lista de supermercados.

```python
groceries = ['apples', 'coffee', 'pizza rolls', 'olives']

print(f"The first item on my grocery list is {groceries[0]}")
print(f"The last item on my grocery list is {groceries[3]}")
```

Ao executar este código, você cria uma lista ordenada de quatro strings. Cada item da lista tem um __índice__, que é um número que representa o lugar dele na lista. Na programação, o primeiro item de uma lista está no índice `0`, e os índices aumentam a partir daí. Em uma lista de quatro itens, o último índice é `3`.

Você pode obter um item em uma lista de um índice específico usando a __notação subscrita__, essa parte com os colchetes `[]` na instrução de impressão acima. `first_item = groceries[0]` armazenará o primeiro item na lista, a string `apples`, na variável `first_item`.

As listas podem conter qualquer tipo de dados. Este exemplo mistura vários tipos de dados em uma lista.

```python
stuff = ['apples', {'favoriteMovieName': 'Star Wars'}, 42, True]

print(f"My favorite movie is {stuff[1]['favoriteMovieName']}")
```

</details>
<details>
<summary>O que preciso fazer para concluir este teste?</summary>
Crie um arquivo chamado `lists.py` na sua pasta de código localizada aqui:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Nesse arquivo, você precisará __criar uma lista__ chamada `order_of_succession` que contenha os nomes dos cinco líderes. Eles devem aparecer na mesma ordem que estavam na última ordem pitônica de sucessão. Os nomes são: `Isabelle`, `Grace`, `Charlotte`, `LeBron` e `Steve`.

Consulte o restante deste guia para obter ajuda sobre como criar uma lista. Depois de criar o objeto de lista `order_of_succession`, clique no botão *HACK* para enviar seu trabalho!

</details>
