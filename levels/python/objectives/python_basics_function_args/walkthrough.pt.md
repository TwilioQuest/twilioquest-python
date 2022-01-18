# Notas do teste de Toledo

Você encontra outra entrada de diário ao lado dessa barreira.

<blockquote>
10 de abril de 2016
<hr/>
<p>
O templo pitônico foi um foco de debate político e de vida pública na cidade de Python. Um argumento bem elaborado poderia (e pode) alterar o curso da história. Cidadãos potenciais na cidade de Python tiveram que aprender a fazer e aceitar argumentos persuasivos.
</p>
<p>
As funções, como eu observei, me permitem reutilizar partes de código. Mas frequentemente, precisarei modificar o comportamento desse código para trabalhar com diferentes dados. É por isso que as funções precisam ser capazes de aceitar <b>argumentos</b>, dados de entrada diferentes para trabalhar. Posso usar o mesmo código de função que criei para o último teste como ponto de partida, mas precisarei modificá-lo para aceitar um argumento.
</p>
<p>
--TVP
</p>
</blockquote>
## Dicas e truques

A entrada de diário contém alguns outros tidbits que você pode achar úteis.

<details>
<summary>Como faço para que uma função aceite argumentos?</summary>
Os __argumentos__ não são um conceito totalmente novo para nós. Já estamos trabalhando com __argumentos__ que foram passados para nossos scripts Python a partir da linha de comando. [Argumentos para funções](https://docs.python.org/3.7/tutorial/controlflow.html#defining-functions) funcionam de maneira muito semelhante. Os argumentos são partes de dados que suas funções usam para alimentar o código dentro delas.

Aqui está um exemplo de definição de uma função com dois argumentos.

```python
def favorite_foods(firstFavorite, secondFavorite):
    print(f"My favorite foods are {firstFavorite} and {secondFavorite}.")

favorite_foods('tacos', 'pizza')
```

Ao executar este código, você define uma função chamada `favorite_foods`. Você especifica que sua função usa __dois argumentos__ configurando duas variáveis de espaço reservado entre os parênteses aberto e fechado. Se a sua função usar vários argumentos, os nomes das variáveis para esses argumentos serão separados por uma vírgula `,`.

A função em si tem apenas uma linha de código. Ela imprime uma [string formatada](https://realpython.com/python-f-strings/) que se encaixa nas variáveis de argumento `firstFavorite` e `secondFavorite`.

Na última linha do código no exemplo, chamamos a função com dois argumentos, as strings `tacos` e `pizza`. Ao passar argumentos, os separamos com uma vírgula `,` também.

</details>
<details>
<summary>O que preciso fazer para concluir este teste?</summary>
Abra o arquivo que você criou para a versão de teste anterior, `functions.py`, ou crie novamente (se você o excluiu) em sua pasta de código localizada aqui:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Nesse arquivo, você precisará __declarar ou modificar uma função__ chamada `hail_friend` que usa um argumento, o nome da pessoa a ser recebida. Em vez de imprimir a mesma mensagem sempre que a função é chamada, desta vez a função deve imprimir uma mensagem diferente sempre, usando a entrada para a função.

Por exemplo, se a sua função for chamada assim:

```python
hail_friend('Jonathan Joestar')
```

Ela deve imprimir o texto `Hail, Jonathan Joestar!` no console. Consulte o restante deste tutorial para obter ajuda sobre como declarar uma função que usa argumentos. Quando o seu código `functions.py` estiver funcionando conforme prescrito, clique no botão *HACK* para enviar seu trabalho!

</details>
