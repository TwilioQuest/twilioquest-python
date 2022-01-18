# Notas do teste de Toledo

Você encontra outra entrada de diário ao lado dessa barreira.

<blockquote>
4 de abril de 2016
<hr/>
<p>
Os sofistas do templo pitônico eram notórios por nunca se repetirem, não importa a desculpa que fosse oferecida por seus alunos exasperados. O zelo deles pela eficiência fica claro neste teste.
</p>
<p>
<b>Funções</b> são blocos reutilizáveis de código Python. Se no seu código, você tiver que executar as mesmas etapas várias vezes, essa é uma dica que você deve considerar ao criar uma função. Em seguida, em vez de copiar/colar o mesmo código novamente, você pode chamar uma função que contenha todo o código necessário.
</p>
<p>
--TVP
</p>
</blockquote>
## Dicas e truques

Percorrendo a entrada do diário, você encontra algumas outras dicas úteis para este teste.

<details>
<summary>Como definir uma função?</summary>
As [funções](https://docs.python.org/3.7/tutorial/controlflow.html#defining-functions) são partes reutilizáveis de código que você pode usar como desenvolvedor para evitar escrever o mesmo código várias vezes. Semelhante às variáveis que já vimos, as __funções também têm nomes__. Isso nos permite __chamá-las__ pelo nome para usar sua funcionalidade. `print()`, por exemplo, é uma função que é incorporada ao Python que nos permite enviar saída para o console.

Aqui está um exemplo de um programa Python que contém uma função usada para imprimir o nome do script em execução no momento para o console.

```python
import sys

def print_name():
    print(f"Current script: {sys.argv[0]}")

print_name()
```

Ao executar esse código, você define uma função chamada `print_name` que contém uma linha de código Python (a que imprime o nome do script atual). A linha final do código neste exemplo __chama__ a função (executa o código da função) anexando um parêntese aberto e fechado `()` ao final do nome da função.

</details>
<details>
<summary>Qual código é considerado parte da função? Por que algumas linhas estão recuadas agora?</summary>
O código dentro da função é __recuado em uma guia__ (geralmente quatro espaços). O recuo é a forma como você cria um __bloco__ de códigos no Python. Todo código que começa no mesmo nível de recuo é considerado parte do mesmo bloco. Você pode incluir outra linha de código à sua função adicionando-a no mesmo nível de recuo assim:

```python
def print_lines():
    print("This will print first.")
    print("This will print second.")

print_lines()
```

Se a próxima linha de código __NÃO__ fosse recuada no mesmo nível, ela seria executada logo após a função ter sido declarada.

```python
def print_lines():
    print("This will print second, and now our function has only one line.")
print("This will print first, and is no longer part of the function.")

print_lines()
```

</details>
<details>
<summary>O que preciso fazer para concluir este teste?</summary>
Crie um arquivo chamado `functions.py` na sua pasta de código localizada aqui:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Nesse arquivo, você precisará __declarar uma função__ chamada `hail_friend` que imprime a mensagem `Hail, friend!`.

Consulte o restante deste guia para obter ajuda sobre como declarar uma função. Quando o seu código `functions.py` estiver funcionando conforme prescrito, clique no botão *HACK* para enviar seu trabalho!

</details>
