# Notas do teste de Toledo

Uma breve pesquisa da área ao redor dessa barreira revela outra entrada no diário de Toledo Van Possum.

<blockquote>
21 de agosto de 2016
<hr/>
<p>
Nossa busca pela Câmara do ritual de iniciação continua, embora eu esteja começando a duvidar se a pista final existe mesmo. Felizmente, finalmente encontramos outro teste, o teste de caminhos ramificados Usando o que aprendi sobre booleanos e lógica de comparação, agora preciso aprender a ramificar meu código em várias direções para dar suporte a muitos cenários diferentes.
</p>
<p>
Se eu conseguir sair desta câmara, peço ao programa TwilioQuest que dobre a minha taxa habitual.
</p>
<p>
--TVP
</p>
</blockquote>
## Dicas e sugestões

Ao longo da entrada do diário, você encontra algumas passagens úteis.

<details>
<summary>Como escrever código que ramifica em várias direções?</summary>
Já vimos a instrução `if`, que nos permite executar um bloco de códigos quando uma determinada condição é verdadeira. Para apoiar mais de uma condição, também devemos nos sentir confortáveis com as instruções `elif` e `else`.

```python
dinner_name = "kale"

if dinner_name == "tacos":
    print("Tacos for dinner - right on!")
elif dinner_name == "pizza":
    print("Pizza - can't go wrong there!")
else:
    print("Okay - better than being hungry amirite?")
```

Você pode usar a [lógica de comparação](https://docs.python.org/3/library/stdtypes.html#comparisons) para determinar se um bloco de código deve ou não ser executado. Instruções condicionais como esta podem ter apenas um bloco `if` e `else`, mas seu código pode incluir quantos blocos `elif` forem necessários.

Um bloco `elif` funciona como uma instrução IF. Essas comparações são todas executadas em ordem, e sempre que a primeira avalia para `True`, nenhuma das outras condições será avaliada. A ordem é importante para eles!

Uma instrução `else` declara um bloco de código que será executado se nenhuma das outras condições for verdadeira.

</details>
<details>
<summary>Como converter entradas no meu script (strings) em números?</summary>
Para concluir este desafio, você precisa comparar os valores dos números passados para o seu script como argumentos. No entanto, quando você os lê inicialmente a partir de `sys.argv`, esses valores serão __strings__ e não __números__. Para fazer comparações numéricas, precisamos converter os argumentos em __inteiros (números inteiros)__ ou __flutuantes (números decimais)__. O código abaixo mostra como converter entradas em inteiros.

```python
first_num = int(sys.argv[1])
second_num = int(sys.argv[2])
sum_to_use = first_num + second_num
```

</details>
<details>
<summary>O que preciso fazer para concluir este teste?</summary>
Crie um arquivo chamado `branching.py` na sua pasta de código localizada aqui:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Crie um programa que __aceita dois argumentos de linha de comando__, dois números (números inteiros) que você deve somar. Dependendo da __soma desses números__, seu código deve imprimir mensagens diferentes.

* Se a soma dos números for __menor ou igual a zero__, imprima o texto: <div>`You have chosen the path of destitution.`</div>
* Se a soma dos números for de __1 a 100 (incluindo 100)__, imprima o texto: <div> `You have chosen the path of plenty.`</div>
* Se a soma dos números for __maior que 100__, imprima o texto: <div> `You have chosen the path of excess.`</div>

Exemplo de execução de script:

```bash
python3 branching.py 30 200
```

Exemplo de saída:

```bash
You have chosen the path of excess.
```

Depois que o script puder lidar com todas as três condições corretamente, clique no botão *HACK*!

</details>
