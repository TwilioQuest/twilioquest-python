# Notas do teste de Toledo

Você encontra outra entrada de diário ao lado dessa barreira.

<blockquote>
1º de junho de 2016
<hr/>
<p>
A produtividade era uma marca registrada dos primeiros pitonistas. Eles eram famosos por acabar com suas listas de TAREFAS com eficiência implacável. Neste desafio, meu código também deve demonstrar a capacidade de trabalhar nas listas.
</p>
<p>
Neste teste, vou usar um <a href="https://realpython.com/python-for-loop">loop for/in</a> para executar algum código para cada item na lista de argumentos de linha de comando passados para meu script. 
</p>
<p>
--TVP
</p>
</blockquote>
## Dicas e truques

Algumas passagens na entrada do diário são de especial interesse para este teste.

<details>
<summary>Como executo o código para cada item em uma lista?</summary>
Executar código para cada item em uma lista (ou __iterating__ (iterar) por entre uma lista) é uma das tarefas mais comuns na programação. Para concluir este teste, use um [loop for/in](https://realpython.com/python-for-loop/) para executar um bloco de código para cada item em uma lista. Vejamos um exemplo usando nossa lista de supermercados anterior.

```python
groceries = ['apples', 'coffee', 'pizza rolls', 'olives']

print("These are the items on my grocery list:")
for item in groceries:
    string_to_print = f"- {item}"
    print(string_to_print)
```

Ao executar este código, você cria uma lista ordenada de quatro strings, como antes. Desta vez, você usa uma nova instrução: `for item in groceries:`

Seu código está dizendo algumas coisas nesta única instrução:

* Quero executar o código a partir da próxima linha para cada item da lista armazenado na variável chamada `groceries`
* Sempre que esse código for executado, crie uma variável chamada `item` que seja uma referência ao próximo item na lista

O código que é executado durante o loop __é recuado em uma guia (cerca de quatro espaços)__ de onde o loop for foi iniciado. [Esse recuo](https://docs.python.org/3/reference/lexical_analysis.html#indentation) informa ao Python qual código deve ser executado durante o loop. Sem o recuo, o código seria executado em ordem e a lógica não funcionaria.

Há uma melhoria que poderíamos fazer nesta lógica que faz uso da função integrada de [enumeração](https://docs.python.org/3/library/functions.html#enumerate). Isso nos dá o __índice__ de cada item conforme percorremos a lista também:

```python
groceries = ['apples', 'coffee', 'pizza rolls', 'olives']

print("These are the items on my grocery list:")
for index, item in enumerate(groceries, start=1):
    string_to_print = f"{index}. {item}"
    print(string_to_print)
```

A técnica acima pode ser útil neste teste.

</details>
<details>
<summary>O que preciso fazer para concluir este teste?</summary>
Crie um arquivo chamado `list_iteration.py` na sua pasta de código localizada aqui:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Use o código a seguir como um ponto de partida. Ele cria uma nova lista chamada `order_of_succession`, que contém todos os argumentos passados para o script.

```python
import sys

# Set up a list for our code to work with that omits the first CLI argument, 
# which is the name of our script (list_iteration.py)
order_of_succession = sys.argv
order_of_succession.pop(0)

# Now, order_of_succession is ready for us to work with
```

Seu código deve imprimir o nome de cada pessoa nessa lista, prefixado com sua sequência na ordem pitônica da sucessão. Consulte a guia "Objective" (Objetivo) para obter um exemplo de entrada e saída.

O restante deste passo a passo contém ajuda sobre como executar o código para cada item em uma lista. Depois de escrever um código que possa processar todos os argumentos da linha de comando para o seu script, clique no botão *HACK* para verificar o seu trabalho!

</details>
