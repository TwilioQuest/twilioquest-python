# Notas do teste de Toledo

Você encontra outra entrada de diário ao lado dessa barreira.

<blockquote>
15 de março de 2016
<hr/>
<p>
Na cidade de Python, uma educação de artes liberais foi considerada algo de valor. Aprender como aprender e ser exposto a uma grande variedade de disciplinas acadêmicas fez dos primeiros pitonistas uma população multifacetada. Claramente, às vezes eles queriam que seus dados fossem multifacetados também.
</p>
<p>
<b>Dicionários</b> são um tipo de dados que permite aos programadores criar dados mais complexos do que apenas números, strings e outros tipos de dados básicos. Usando <b>pares chave/valor</b>, torna-se possível modelar conceitos como uma postagem de blog que tem um <code>title</code> e um <code>author</code> e outras ideias mais complexas. É claro que as <a href="https://docs.python.org/3/tutorial/classes.html">aulas</a> também são usadas para esse fim, mas esse é um tópico para outro momento. Os dicionários são uma maneira leve de criar um contentor para dados relacionados.
</p>
<p>
--TVP
</p>
</blockquote>
## Dicas e truques

Percorrendo a entrada do diário, você encontra algumas outras dicas úteis para este teste.

<details>
<summary>Como criar um dicionário?</summary>
Os [Dicionários](https://docs.python.org/3/tutorial/datastructures.html#dictionaries) são uma das muitas ferramentas do Python que nos permitem descrever dados mais complexos. O código abaixo cria um dicionário que descreve as propriedades de um cão:

```python
dog = {
    'name' : 'Koto',
    'age' : 4,
    'color' : 'white',
    'fluffy' : True }

print(f"My dog's name is {dog['name']}")
```

Quando você executa esse código, cria um novo dicionário e o atribui a uma variável chamada `dog`. Na instrução de impressão, você acessa um dos __valores__ armazenados no dicionário por sua __chave__. A chave `name` no dicionário `dog` tem um valor de `Koto`.

</details>
<details>
<summary>O que preciso fazer para concluir este teste?</summary>
Crie um arquivo chamado `dictionaries.py` na sua pasta de código localizada aqui:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Nesse arquivo, você precisará __declarar uma variável__ chamada `super_hero` que contém um dicionário com estas propriedades:

| Chave| Valor| Tipo de valor|
|----------|----------|----------|
| name| `Miles Morales`| string|
| hero_name| `Spider-Man`| string|
| power_level| `9999`| integer|

Quando o seu código `dictionaries.py` estiver funcionando conforme prescrito, clique no botão *HACK* para enviar seu trabalho!

</details>
