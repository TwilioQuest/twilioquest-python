# Notas do teste de Toledo

Outra entrada conveniente no diário do Toledo Van Possum é claramente visível ao lado dessa barreira.

<blockquote>
1º de março de 2016
<hr/>
<p>
As realizações dos primeiros pitonistas foram impulsionadas pela capacidade de fazer com que os computadores fizessem cálculos por eles, para que pudessem se concentrar nas grandes ideias. Devo seguir os passos deles e aprender a usar o poder da matemática no Python.
</p>
<p>
Para concluir este teste, precisarei declarar quatro variáveis conforme instruído. Usando números passados para meu script como argumentos de linha de comando, precisarei usar operadores aritméticos internos do Python para fazer adição, subtração, multiplicação e divisão.
</p>
<p>
--TVP
</p>
</blockquote>
## Dicas e truques

Ao ler atentamente o restante da entrada do diário, você observa algumas informações interessantes que podem ajudar a concluir este teste.

<details>
<summary>Como saber quais símbolos usar para as diferentes operações matemáticas?</summary>
Você pode encontrar uma lista completa [aqui](https://docs.python.org/3/library/operator.html#mapping-operators-to-functions), mas aqueles que você precisará para este teste têm exemplos abaixo.

```python
print(f"2 plus 2 equals { 2 + 2 }");
print(f"8 minus 4 equals { 8 + 4 }");
print(f"12 divided by 4 equals { 12 / 4 }");
print(f"11 times by 3 equals { 11 * 3 }");
```

</details>
<details>
<summary>O que preciso fazer para concluir este teste?</summary>
Crie um arquivo chamado `numbers.py` na sua pasta de código:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Nesse arquivo, você precisará __declarar quatro variáveis__. Consulte a tabela na guia "Objective" (Objetivo) para saber o que você precisa para nomeá-las. As variáveis precisam armazenar os resultados de quatro operações matemáticas em números passados para o script como __argumentos de linha de comando__. Você recebeu este código como ponto de partida:

```python
import sys

# This code reads in arguments and converts those inputs to decimal numbers
first_number = float(sys.argv[1])
second_number = float(sys.argv[2])

# Your code goes here!
result_sum = first_number + second_number

print(f"{first_number} plus {second_number} equals {result_sum}")
```

Assim como os exemplos anteriores, ele usa o módulo `sys` para ler entradas para o script e atribuí-las às variáveis denominadas `first_number` e `second_number`. Para executar seu script com argumentos, você usaria este comando no terminal:

```bash
python3 numbers.py 12 4
```

Como você está escrevendo seu código, pode executá-lo dessa maneira para testá-lo e certificar-se de que ele funciona. Quando seu código estiver pronto, clique no botão *HACK* para concluir o teste. [Matemática!](https://www.youtube.com/watch?v=FfPFtbJAEm8)

</details>
