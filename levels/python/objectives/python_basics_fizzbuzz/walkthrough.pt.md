# Notas do teste de Toledo

Você verá uma entrada do diário de Toledo Van Possum particularmente quebrada ao lado dessa barreira. Parece que essa foi uma das últimas barreiras que ele encontrou na Câmara do ritual de iniciação.

<blockquote>
3 de outubro de 2016
<hr/>
<p>
É 3 de outubro.
</p>
<p>
Finalmente, chegamos nele, o infame <b>Teste de trapaça</b>. Na antiga cidade de Python, havia alguns que acreditavam que esse teste era um teste justo das habilidades básicas de programação. Outros disseram que era um truque injusto, e confiaram que o programador estivesse ciente de um operador matemático raramente usado (o <a href="https://stackoverflow.com/questions/4432208/what-is-the-result-of-in-python">operador do módulo</a>).
</p>
<p>
Quer este teste seja ou não um teste justo de habilidade, implementar o chamado desafio "FizzBuzz" é um exercício útil na combinação da iteração de lista e da lógica condicional. Vou guardar as minhas técnicas aqui para os futuros exploradores, para que este possa ser um exercício de aprendizagem em vez de um teste.
</p>
<p>
--TVP
</p>
</blockquote>
## Dicas e truques

Ao olhar atentamente a entrada do diário, você encontrará algumas passagens que podem ajudar a concluir este teste.

<details>
<summary>Em um alto nível, o que meu código precisa fazer?</summary>
Muitas vezes, é útil mapear uma solução para um problema usando __pseudocódigo__. O pseudocódigo é um código que não deve ser realmente executado, mas ajuda a esboçar como você quer que sua solução funcione. Depois de ter uma ideia de como agir, você implementa seu pseudocódigo no código real.

Eis alguns pseudocódigos que descrevem o que é preciso fazer para completar o desafio FizzBuzz.

<pre>
inputs = list of all arguments to my script

for each input in the list, do the following:
    convert the input to a number
    set my print string equal to a blank/empty string
    if the number is divisible by 3, append "fizz" to the output string
    if the number is divisible by 5, append "buzz" to the output string
    if by now the output string is still blank, set it to the input number
    print the output string
</pre>
Este pseudocódigo descreve uma técnica para completar o desafio. Há outros, mas essa abordagem deve funcionar. Agora, precisamos descobrir como fazer tudo isso acontecer com o verdadeiro código Python.

</details>
<details>
<summary>Como obtenho uma lista de todos os argumentos passados para o meu script?</summary>
Você se lembra de um desafio anterior que pode usar o módulo `sys` para obter uma lista de todos os argumentos para seu script e, em seguida, remover o primeiro item (já que ele contém o nome do programa, o qual você não precisa).

```python
import sys

# Set up a list for our code to work with that omits the first CLI argument, 
# which is the name of our script (fizzbuzz.py)
inputs = sys.argv
inputs.pop(0)

# Now, inputs is ready for us to work with
```

</details>
<details>
<summary>Como converter uma string em um número inteiro?</summary>
Quando as entradas são passadas para o programa, elas são inicialmente disponibilizadas como strings de texto. Para fazer cálculos com as entradas, precisamos converter a entrada em um número. Essa técnica é chamada de [fusão/coerção/conversão de tipo](https://en.wikipedia.org/wiki/Type_conversion), com a segunda palavra sendo usada principalmente de forma intercambiável.

Python tem algumas funções [integradas](https://www.w3schools.com/python/python_casting.asp) de fusão de tipo. Para esse desafio, você precisará converter uma string em um número inteiro usando a função `int`.

```python
number_string = "100"
number_converted = int(number_string)
print(f"100 minus 60 is {number_converted - 60}")
```

</details>
<details>
<summary>Como posso saber se um número é divisível por outro?</summary>
Se você tiver um número A e um número B, o número A será divisível pelo número B se, depois de dividir A por B, não houver resto.

Se você dividir `6` por `3`, o resultado será `2` sem nenhum resto. `6` É divisível por `3`.

Se você dividir `7` por `3`, o resultado será `2` com resto `1`. `7` NÃO É divisível por `3`.

Então, como podemos descobrir isso no código Python? Com um operador raramente usado chamado `modulus` ou `modulo`, o caractere `%` (porcentagem) em seu código. Usando esse operador, você pode armazenar o resto após dividir dois números em uma variável.

```python
rem1 = 6 % 3
rem2 = 7 % 3

print(f"The remainder after dividing 6 by 3 is {rem1}.")
print(f"The remainder after dividing 7 by 3 is {rem2}.")
```

No código acima, `rem1` seria `0` e `rem2` seria `1`.

Então, em resumo, você pode dizer se um número é divisível por outro número usando o operador `%`. Se o resultado for igual a zero, o primeiro número será divisível pelo segundo.

</details>
<details>
<summary>Como posso percorrer uma lista e executar uma lógica condicional?</summary>
Se você chegou a esse ponto, já escreveu um código que faz as duas coisas. Consulte o código que você já escreveu em sua pasta de código:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Os arquivos `list_iteration.py`, `booleans.py` e `branching.py` devem conter alguns exemplos úteis. Você terá que __combinar essas técnicas__ para concluir este teste.

</details>
<details>
<summary>O que preciso fazer para concluir este teste?</summary>
Crie um arquivo chamado `fizzbuzz.py` na sua pasta de código localizada aqui:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Nesse arquivo, você precisará processar argumentos de linha de comando para seu script e imprimir a saída apropriada para cada entrada. Exemplo de execução de script:

```bash
python3 fizzbuzz.py 30 200 7 6
```

Exemplo de saída:

```bash
fizzbuzz
buzz
7
fizz
```

Mais uma vez, as regras para as declarações impressas são as seguintes:

* Se o número for __divisível por 3__, imprima o texto: `fizz`
* Se o número for __divisível por 5__, imprima o texto: `buzz`
* Se o número for __divisível por 3 e 5__, imprima o texto: `fizzbuzz`
* Se nenhuma das opções acima for verdadeira, __imprima o número__

Você pode considerar o uso do código abaixo como um ponto de partida. Ele irá preparar uma lista contendo todos os argumentos da linha de comando passados para seu script.

```python
import sys

# Set up a list for our code to work with that omits the first CLI argument, 
# which is the name of our script (fizzbuzz.py)
inputs = sys.argv
inputs.pop(0)

# Process the "inputs" list as directed in your code
```

Assim que seu código no `fizzbuzz.py` puder processar argumentos de linha de comando de uma maneira que satisfaça esses requisitos, clique no botão *HACK* para concluir o teste. Você consegue!

</details>
