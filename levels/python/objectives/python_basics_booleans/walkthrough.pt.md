# Notas do teste de Toledo

Uma breve pesquisa da área ao redor dessa barreira revela outra entrada no diário de Toledo Van Possum.

<blockquote>
10 de julho de 2016
<hr/>
<p>
Os primeiros pitonistas acreditavam no poder da ciência e da revisão por pares para estabelecer a verdade objetiva. Eles incluíram o teste da verdade em seus testes de cidadania para garantir que esse valor fosse passado para seus membros mais novos.
</p>
<p>
Para concluir este teste, precisarei criar variáveis que contenham um novo tipo de valor - um <a href="https://docs.python.org/3/library/stdtypes.html#truth-value-testing">Booleano</a>. Hah. “Booleano”. Essa é uma palavra engraçada de falar.
</p>
<p>
<b>Os booleanos</b> representam o conceito de verdadeiro e falso. Na programação, é frequentemente necessário executar um caminho de código em um conjunto de circunstâncias e um código diferente em outro. Se um usuário estiver conectado, mostre a ele o saldo da conta. Se eles não estiverem conectados, redirecione-os para uma página de login. Preciso demonstrar o comando básico desse conceito para concluir este teste.
</p>
<p>
--TVP
</p>
</blockquote>
## Dicas e sugestões

Ao longo da entrada do diário, você encontra algumas passagens úteis.

<details>
<summary>Como criar variáveis booleanas?</summary>
Você pode atribuir um valor de `True` ou `False` diretamente a uma variável usando as palavras em maiúsculas com o mesmo nome.

```python
tacos_rule = True
root_canal_fun = False
```

</details>
<details>
<summary>Como executar o código se uma determinada condição for verdadeira?</summary>
Você pode definir um bloco de código que só será executado sob determinadas condições usando uma __instrução IF__:

```python
tacos_rule = True

if tacos_rule:
    print("Well, of course tacos rule!")
```

Mais frequentemente, você usará a [lógica de comparação](https://docs.python.org/3/library/stdtypes.html#comparisons) para determinar se um bloco de código deve ou não ser executado. Essas são instruções que avaliam `True` ou `False` dependendo dos dados que estão sendo comparados. O código abaixo usa a comparação diferente (`!=`) para determinar se a instrução de impressão deve ou não ser executada.

```python
dinner_name = "kale"

if dinner_name != "tacos":
    print("Why aren't we eating tacos?")
```

</details>
<details>
<summary>O que preciso fazer para concluir este teste?</summary>
Crie um arquivo chamado `booleans.py` na sua pasta de código localizada aqui:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Crie um programa que declare diversas variáveis [booleanas](https://docs.python.org/3/library/stdtypes.html#truth-value-testing). As variáveis devem ter os seguintes nomes e valores:

* Uma variável `python_is_glorious` deve ser definida como `True`
* Uma variável `failure_is_option` deve ser definida como `False`
* Uma variável `proper_greeting` deve ser INICIALMENTE definida como `False`

Quando o script for executado, você deve verificar o valor do primeiro argumento passado para o script: `sys.argv[1]`. Se esse argumento for `For the glory of Python!`, defina a variável `proper_greeting` como `True`. Este é um exemplo de invocação de script que faria com que a variável `proper_greeting` fosse definida como `True`:

```bash
python3 booleans.py 'For the glory of Python!'
```

Qualquer outra entrada deixaria o valor de `proper_greeting` como `False`.

Depois que o script declarar as variáveis corretamente, clique no botão *HACK* (HACKEAR)!

</details>
