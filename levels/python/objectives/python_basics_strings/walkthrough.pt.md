# Notas do teste de Toledo

Ao lado da barreira, você encontra outra entrada para o diário de Toledo.

<blockquote>
3 de março de 2016
<hr/>
<p>
A cidade de Python é conhecida por seus pensadores e filósofos, cujas palavras ecoaram ao longo dos tempos. Este teste foi projetado para ajudar futuros programadores de Python a aprender a usar as próprias palavras de uma forma igualmente poderosa.
</p>
<p>
Para concluir este teste, vou precisar escrever um código que usa uma string de entrada e torná-lo <b>SUPER ANIMADO!!!</b> Já usei strings em alguns desses desafios, mas strings são objetos incorporados no Python que representam strings de caracteres (texto e outros dados). Muitos códigos Python que escrevo precisarão manipular texto por meio desses objetos, portanto, fica claro por que era importante o bastante para incluir nos testes de cidadania.
</p>
<p>
--TVP
</p>
</blockquote>
## Dicas e truques

Ao olhar o resto da entrada do diário, você encontra algumas passagens mais interessantes.

<details>
<summary>Como obter a string de entrada para o meu programa?</summary>
Veja agora um código que você pode usar como ponto de partida para este exercício. Como anteriormente, ele usa o módulo `sys` para ler em uma string de entrada como um argumento de linha de comando:

```python
import sys

# Read in an input string passed in to our script as an argument
input_string = sys.argv[1]
output_string = input_string

# Now, print your transformed string:
print(output_string)
```

Você executaria este programa da seguinte forma:

```bash
python3 strings.py "am I stoked enough yet"
```

Como escrito, o código inicial acima não manipularia nem mudaria a cadeia de caracteres de nenhuma forma, essa é a sua tarefa.

</details>
<details>
<summary>Como alterar uma string no código Python?</summary>
Tecnicamente, strings Python são __imutáveis__, o que significa que, depois de criá-las, você não pode alterá-las. Em vez disso, o que você faz é usar strings existentes para transformar o valor delas e criar outras strings.

O [objeto de string](https://docs.python.org/3/library/stdtypes.html#string-methods) do Python tem muitos __métodos__ que permitem retornar uma nova string com algum tipo de transformação aplicada a ela. Vamos aprender mais sobre eles mais tarde, mas os __métodos__ são __funções__ (como `print`) que operam em uma __instância__ específica (cópia) de um objeto. O método [upper](https://docs.python.org/3/library/stdtypes.html#str.upper) pode ser útil.

```python
new_string = "get stoked".upper()
print(new_string)
```

Você pode combinar strings (__concatená-las__) de várias maneiras, mas uma delas é usar o operador `+`. Sim, este é o mesmo operador usado para __adicionar números__, mas quando você o utiliza com duas ou mais strings, ele une essas strings.

Veja agora um exemplo da união de duas strings para formar uma string completa com o valor `The NY Mets are my favorite squadron.`:

```python
part_one = "The NY Mets "
part_two = "are my favorite squadron."

full_message = part_one + part_two
print(full_message)
```

</details>
<details>
<summary>O que preciso fazer para concluir este teste?</summary>
Crie um arquivo chamado `strings.py` na sua pasta de código localizada aqui:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Nesse arquivo, você precisa usar um __argumento de linha de comando__, uma string e transformá-la de duas maneiras. Use este código como ponto de partida:

```python
import sys

# Read in an input string passed in to our script as an argument
input_string = sys.argv[1]
output_string = input_string

# Now, print your transformed string:
print(output_string)
```

Se não for alterado, o código acima não atenderá aos requisitos do teste, ele simplesmente imprimirá a string de entrada. Você precisa usar as técnicas descritas neste passo a passo para criar uma string que tenha __convertido todas em maiúsculas__ e que tenha __três pontos de exclamação__ anexados a ela e, em seguida __imprimir essa string no console__.

Você pode testar o código executando-o da seguinte forma:

```bash
python3 strings.py "am I stoked enough yet"
```

Se o código funcionasse, ele imprimiria a string `AM I STOKED ENOUGH YET!!!`.

Quando o seu código `strings.py` estiver funcionando conforme prescrito, clique no botão *HACK* para enviar seu trabalho!

</details>
