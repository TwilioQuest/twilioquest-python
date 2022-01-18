# Notas do teste de Toledo

Você encontra outra entrada de diário ao lado dessa barreira.

<blockquote>
22 de abril de 2016
<hr/>
<p>
A renderização de pixels dos antigos pitonistas era incrivelmente avançada para aquele tempo. As fábricas deles podiam receber pacotes brutos, processá-los e produzir obras de arte premiadas em torno da nuvem daquela época.
</p>
<p>
As funções funcionam da mesma forma que uma fábrica. Elas utilizam matérias-primas (argumentos), as processam (executam código) e podem <b>retornar</b> um resultado útil. É isso que aprenderemos a fazer para concluir este teste.
</p>
<p>
--TVP
</p>
</blockquote>
## Dicas e sugestões

Ao ler atentamente o resto da entrada do diário, você encontra mais alguns pontos de interesse.

<details>
<summary>Como faço para retornar um valor de uma função?</summary>
Muitas vezes, depois que sua função é executada, você vai querer devolver algum tipo de resultado para o autor da chamada de sua função. Para isso, usamos a palavra-chave `return`. Vamos usar nossa função anterior `hail_friend` como ponto de partida.  Desta vez, em vez de imprimir a mensagem imediatamente, vamos usar `return` a partir da nossa função. Isso permitirá que o autor da chamada de nossa função armazene esse valor em uma variável e faça o que quiser com o resultado.

```python
def hail_friend(name):
    message = f"Hail, {name}!"
    return message

greeting_one = hail_friend("Edward")
greeting_two = hail_friend("Alphonse")

print(greeting_one)
print(greeting_two)
```

Isso é muito semelhante a outro código de função que vimos, mas agora a linha final de código em nossa função usa a palavra-chave `return` para enviar o resultado de nosso código de função de volta para o autor da chamada.

</details>
<details>
<summary>O que preciso fazer para concluir este teste?</summary>
Abra (ou recrie, se necessário) um arquivo chamado `functions.py` na sua pasta de código localizada aqui:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Nesse arquivo, você precisará __declarar uma função__ chamada `add_numbers` que usa dois argumentos. Esses argumentos serão números inteiros que sua função deve adicionar. Se você não encontrou um código Python para adicionar números juntos, veja como você faria isso:

```python
result_sum = first_number + second_number
```

Consulte o restante deste guia para obter ajuda sobre como declarar uma função que usa argumentos e retorna um resultado. Depois de adicionar uma função `functions.py` à chamada `add_numbers` que está funcionando conforme prescrito, clique no botão *HACK* para enviar seu trabalho!

</details>
