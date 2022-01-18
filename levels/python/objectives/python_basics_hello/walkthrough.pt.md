# Notas do teste de Toledo

Outra anotação do diário de Toledo Van Possum se encontra próxima dessa barreira!

<blockquote>
1º de fevereiro de 2016
<hr/>
<p>
É claro que um dos primeiros testes de cidadania seria o Teste de saudação. "Olá, mundo" é uma primeira etapa universal na programação, onde você escreve algum código que emite uma mensagem simples. Os primeiros pitonistas fizeram isso usando sua tradicional saudação: <b>"Para a glória do Python!"</b>
</p>
<p>
A parte importante aqui é criar uma pasta no meu computador onde ficarão todos os meus códigos Python para os testes. Vou retornar a esta pasta novamente enquanto escrevo o código para concluir os testes. Esse código de saudação é muito simples, mas tenho um palpite de que mais testes desafiadores estão por vir.
</p>
<p>
--TVP
</p>
</blockquote>
## Dicas e truques

Ao examinar o restante da entrada do diário, você encontra algumas dicas possivelmente úteis sobre como completar este teste.

<details>
<summary>Como criar uma pasta usando o PowerShell no Windows?</summary>
Como você executará seu código Python a partir do terminal, talvez queira criar a pasta para seu código usando o terminal também. Você poderia criar uma pasta com a mesma facilidade usando o Windows Explorer, mas os comandos a seguir farão a mesma coisa.

Inicie o app PowerShell em seu computador. Digite o seguinte comando:

```bash
cd ~
```

O comando `cd` __altera o diretório de trabalho atual__ da sessão do terminal. É como abrir uma pasta no Windows Explorer. Ao usar o comando seguido de um `~` (til), você será levado ao diretório inicial.

Quando estiver lá, digite este comando na interface do PowerShell:

```bash
mkdir quest
```

Este comando __fará com que um novo diretório__ (uma pasta) chamado `quest` na sua pasta inicial. Você pode colocar todo o seu código Python para os testes nesta pasta. Por fim, é possível alterar seu diretório de trabalho atual para essa nova pasta, para que você possa criar e executar código Python a partir desse local.

```bash
cd quest
```

Agora, você está pronto para criar e executar algum código Python!

</details>
<details>
<summary>Como criar uma pasta usando o Terminal no Mac?</summary>
Como você executará seu código Python a partir do terminal, talvez queira criar a pasta para seu código usando o terminal também. Você poderia criar uma pasta com a mesma facilidade usando o app Finder, mas os comandos a seguir farão a mesma coisa.

Inicie o aplicativo Terminal (em aplicativos > Utilitários) em seu computador. Uma vez ali, digite o seguinte comando:

```bash
cd ~
```

O comando `cd` __altera o diretório de trabalho atual__ da sessão do terminal. É como abrir uma pasta no Finder. Ao usar o comando seguido de um `~` (til), você será levado ao seu __home directory__ (diretório inicial).

Quando estiver lá, digite este comando no Terminal:

```bash
mkdir quest
```

Este comando __fará um novo diretório__ (uma pasta) chamado `quest` na sua pasta inicial. Você pode colocar todo o seu código Python para os testes nesta pasta. Por fim, é possível alterar seu diretório de trabalho atual para essa nova pasta, para que você possa criar e executar código Python a partir desse local.

```bash
cd quest
```

Agora, você está pronto para criar e executar algum código Python!

</details>
<details>
<summary>Como criar um arquivo Python para meu código?</summary>
Antes de criar seu arquivo de código Python, __certifique-se de ter mudado para o diretório onde deseja usá-lo__ por meio do comando `cd`, conforme descrito nas etapas acima! Caso contrário, seu código pode acabar na pasta errada.

Se você seguiu os exemplos acima, pode mudar para o diretório de códigos com este comando:

```bash
cd ~/quest
```

Você pode verificar duas vezes se está na pasta correta com o comando `pwd` (apresentar diretório de trabalho):

```bash
pwd
```

Depois de fazer isso, você pode criar um novo arquivo de código Python nesta pasta com o nome que foi dito para usar para concluir o teste, `salutation.py`. No Windows/PowerShell, digite este comando:

```bash
New-Item -ItemType file salutation.py
```

No Mac ou Linux, digite este comando:

```bash
touch salutation.py
```

Observe a extensão `.py` no final do nome do arquivo. Todos os arquivos de código-fonte Python devem ter essa extensão, assim como um documento do Microsoft Word, pode ter a extensão `.docx` ou um arquivo de música pode ter uma extensão `.mp3`.

Agora que você tem um arquivo de código criado, pode abri-lo e gravar código nele!

</details>
<details>
<summary>Como editar meu arquivo de código Python?</summary>
Se você já tem um editor de texto favorito, basta usar! Se você não tiver certeza do que é um editor de texto ou gostaria de uma recomendação, então leia.

Ao escrever o código, você precisa usar algum tipo de __editor de texto__. Normalmente, você não edita o código diretamente no terminal. O terminal é exatamente onde executamos os comandos para o computador. Você também não abriria um arquivo de código em um processador de texto completo, como o Microsoft Word.

Há escolhas muito boas para editores do texto, mas um editor poderoso, razoavelmente simples e de texto livre que está disponível em todas as plataformas é o [Visual Studio Code](https://code.visualstudio.com/). Às vezes, vamos chamá-lo de "VS Code".

Observe que isso não é o mesmo que o [Visual Studio](https://visualstudio.microsoft.com/), que é um [ambiente de desenvolvimento integrado (IDE)](https://en.wikipedia.org/wiki/Integrated_development_environment) completo. Isso __não é o que você quer agora__, a menos que você já tenha usado antes e saiba o que está fazendo. Um IDE completo pode ser poderoso, mas todos os botões dentro dele podem ser muito confusos.

O VS Code, por outro lado, não tem tantos botões que você precisa aprender de imediato. Ele ainda tem muitos recursos, mas vamos manter o foco na edição de texto.

### Como abrir sua pasta de códigos com o VS Code

Depois de instalar o VS Code, inicie o aplicativo. Você verá uma tela em branco para começar. Em seguida, escolha __"File" then "Open..."__ ("Arquivo" e "Abrir...") na barra de menus. Na caixa de diálogo exibida, __navigate to the folder you created earlier__ (navegue até a pasta que você criou anteriormente). Escolha __a pasta que você criou, não o arquivo de origem Python__. Isso permitirá que você edite facilmente todos os arquivos na pasta.

A tela inicial que você verá no VS Code terá esta aparência. Clique no arquivo `salutation.py` para começar a editá-lo!

![vs code](images/python/vscode.png)

Nesse arquivo, você pode colar o seguinte código Python para concluir o teste:

```python
# Your first line of Python code is below!
print("For the glory of Python!")
```

Que deve ser parecido com isto:

![olá no vs code](images/python/hello.png)

Certifique-se de __save this file__ (salvar este arquivo) (Arquivo > Salvar) após editar o código!

</details>
<details>
<summary>Algumas linhas de código começam com um símbolo "#". O que significa?</summary>
Essas linhas de código são chamadas de __comentários__. Elas não são executadas quando o interpretador Python executa seu código. Os comentários são usados para fornecer notas e contexto para outros desenvolvedores (ou para você mesmo) para explicar o que um código faz.

</details>
<details>
<summary>Como executar meu código Python?</summary>
No aplicativo do terminal, verifique se o diretório de código é o seu __diretório de trabalho atual__. Se você seguiu este tutorial, poderá navegar até o diretório de códigos com este comando:

```bash
cd ~/quest
```

Se você atingiu esse ponto, deverá ter o comando `python3` disponível na janela do terminal. Para executar seu código Python, use este comando em seu terminal:

```bash
python3 salutation.py
```

Se o seu código funcionar como desejado, você deve ver o texto __Pela glória de Python!__ exibido em seu terminal! Muitos dos testes nesta área o instruirão a imprimir o texto dessa maneira.

</details>
<details>
<summary>Como eu realmente concluo o teste depois que meu código funcionar?</summary>
Depois que seu código estiver funcionando como desejado, você precisará inserir o caminho completo para seu arquivo no campo de texto à direita. Seguindo essas instruções, o caminho pode ser parecido com este em um PC.

```bash
C:\Users\susan\quest\salutation.py
```

...ou com esse em um Mac...

```bash
/Users/susan/quest/salutation.py
```

Cole este caminho de arquivo no campo de texto à direita e clique em *HACK*. Validaremos se o seu código funciona como esperado e armazenaremos a __pasta__ para usar depois. Você será instruído a colocar todo o seu código Python nesta pasta.

</details>
