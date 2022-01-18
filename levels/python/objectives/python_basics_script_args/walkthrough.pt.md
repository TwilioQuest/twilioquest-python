# Notas do teste de Toledo

Outra anotação do diário de Toledo Van Possum se encontra próxima dessa barreira!

<blockquote>
12 de fevereiro de 2016
<hr/>
<p>
O objetivo do Teste de entrada solicitada é mostrar ao aspirante a desenvolvedor Python como passar ao código alguns dados iniciais para trabalhar. Geralmente, quando você escreve código para executar uma tarefa, há três etapas de alto nível:
</p>
<ol>
<li>Você fornece algumas informações ao seu código</li>
<li>Seu código é executado, realizando cálculos ou algum outro trabalho na entrada</li>
<li>No final do processamento, seu código retorna algum tipo de saída</li>
</ol>
<p>
Nesse caso, minha entrada virá na forma de <b>argumentos de linha de comando</b>. Essas são as strings que você digita após o nome do script. As instruções de impressão que me pediram para criar serão a saída. Também precisarei usar alguns novos truques do Python para fazer tudo isso funcionar:
</p>
<ul>
<li>Importar um módulo da biblioteca padrão do Python</li>
<li>Acessar "argumentos" (entrada) passados para o meu script</li>
<li>Inserir dados (os argumentos) passados para meu script em minhas instruções de impressão</li>
</ul>
<p>
Vou gravar minhas técnicas aqui para futuros exploradores.
</p>
<p>
--TVP
</p>
</blockquote>
## Dicas e truques

Ao examinar o restante da entrada do diário, você encontra algumas dicas possivelmente úteis sobre como completar este teste. Em particular, há um exemplo de como escrever um script que usa entrada de argumentos de linha de comando.

```python
import sys

print(f"The name of this Python file is '{sys.argv[0]}'")
print(f"The first argument passed in to my script was: '{sys.argv[1]}'")
print(f"The second argument passed in to my script was: '{sys.argv[2]}'")
print(f"The third argument passed in to my script was: '{sys.argv[3]}'")
```

Depois de copiar esse código em um arquivo chamado `collect_input.py`, execute-o da seguinte forma:

```bash
python3 collect_input.py snacky yogurt "a long thing in quotes"
```

O script é executado e imprime todos os argumentos em ordem. Uau. Isso parece ser a solução completa, na verdade! É rápido entender quais são as partes principais deste código.

## Como importar um módulo

A primeira linha de código na solução é:

```python
import sys
```

Aqui, seu código é "[importar](https://docs.python.org/3/reference/import.html)" um módulo da biblioteca padrão do Python. Vamos quebrar um pouco do jargão aqui:

* __Módulo__: Um módulo é um código escrito em outro lugar (talvez por outra pessoa) que você está usando em seu próprio código para uma tarefa específica. Você pode escrever seus próprios módulos para organizar seu código em arquivos diferentes ou pode usar módulos escritos por outras pessoas. O módulo [sys](https://docs.python.org/3/library/sys.html) é integrado ao Python para executar tarefas como coletar entradas para seu script.
* __Importar__: Quando precisamos usar o código definido em outro módulo, precisamos "importá-lo" para nosso código usando a palavra-chave `import` ([docs](https://docs.python.org/3/reference/import.html)). Para módulos integrados como o `sys`, podemos simplesmente passar o nome do módulo após a palavra-chave `import`. Há outras maneiras de incluir módulos, mas esse é um tópico para outro momento.
* __Biblioteca padrão__: Esses são módulos [integrados ao Python](https://docs.python.org/3/library/) para executar tarefas comuns. Há módulos na biblioteca padrão para ajudá-lo a trabalhar com números, datas, texto e outros tipos de dados comuns.

No código deste teste, usamos o módulo `sys` para acessar a entrada que foi passada para nosso script quando o executamos.

## Impressão de texto no console

Na verdade, essa é a segunda vez que você vê uma __função__ chamada `print` em seu código de exemplo. [Essa função](https://docs.python.org/3/tutorial/inputoutput.html) está disponível automaticamente em todos os códigos Python como conveniência para imprimir texto no console.

Você aprenderá mais sobre as __funções__ posteriormente, mas em resumo, as funções são partes reutilizáveis de código que você pode chamar com diferentes entradas para executar uma tarefa. A [função de impressão](https://docs.python.org/3/library/functions.html#print) utiliza argumentos que representam algumas informações que você deseja imprimir no console.

Essas instruções de impressão também usam um recurso do Python chamado [strings "f"](https://docs.python.org/3/tutorial/inputoutput.html#tut-f-strings). Elas permitem inserir dados do programa em uma string de texto. Aprenderemos mais sobre strings posteriormente.

## Como acessar argumentos de script

Para realmente obter os argumentos passados para o programa, você deve usar o objeto `sys.argv`. Este objeto é uma [lista](https://www.w3schools.com/python/python_lists.asp) de strings que contém todos os argumentos passados para o comando `python3`, incluindo o nome do script.

`sys.argv[0]` será sempre o nome do seu script, que neste exemplo, seria "collect_input.py".

`sys.argv[1]` seria o primeiro argumento para seu script após o nome.

`sys.argv[200]` seria o argumento 200 passado para o seu script. Tenha cuidado. Se o seu script não tiver 200 argumentos, este código [resultará em um erro](https://docs.python.org/3/tutorial/errors.html)!

## Como concluir o teste

Para concluir o teste, copie o código de Toledo acima para um arquivo chamado `collect_input.py` na pasta `<%= env.TQ_PYTHON_CODE_PATH.value %>` do seu computador. No terminal, comece digitando o seguinte comando:

```bash
cd <%= env.TQ_PYTHON_CODE_PATH.value %>
```

Isso alterará seu [diretório de trabalho atual](https://en.wikipedia.org/wiki/Working_directory) para sua pasta de código Python. Em seguida, crie um arquivo de código Python chamado `collect_input.py` nesta pasta, caso ainda não tenha feito isso.

No Mac ou Linux, digite este comando:

```bash
touch collect_input.py
```

No Windows (PowerShell), digite este comando:

```bash
New-Item -ItemType file collect_input.py
```

Em seguida, abra o arquivo de código no Visual Studio Code ou no editor de texto de sua escolha. Salve o seguinte código no `collect_input.py`:

```python
import sys

print(f"The name of this Python file is '{sys.argv[0]}'")
print(f"The first argument passed in to my script was: '{sys.argv[1]}'")
print(f"The second argument passed in to my script was: '{sys.argv[2]}'")
print(f"The third argument passed in to my script was: '{sys.argv[3]}'")
```

Teste seu script executando-o com três argumentos, assim.

```bash
python3 collect_input.py snacky yogurt "a long thing in quotes"
```

Seu script deve imprimir todos os argumentos para o console. Assim que seu código puder fazer isso, clique no botão *HACK* à direita para concluir o teste!