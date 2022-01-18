# Notas do teste de Toledo

Enquanto você se prepara para enfrentar o Teste de instalação, perceberá outra página do diário de Toledo nas proximidades. Ele não contém nenhuma informação relacionada ao cajado ou ao quebra-cabeça, mas parece ter algumas informações relevantes sobre o teste atual.

<blockquote>
24 de janeiro de 2016
<hr/>
<p>
Parece que meus instintos estavam corretos. Para progredir na câmara de ritual, terei que concluir os mesmos testes de cidadania que os primeiros pitonistas fizeram antes de se tornarem cidadãos na cidade do Python.
</p>
<p>
A primeira versão de teste me pede para instalar o Python em meu computador. Muito fácil! Um download e alguns cliques e deve estar tudo pronto. Depois de instalado, basta colar no caminho completo para o executável <code>python3</code> no meu computador. O comando <code>python3</code> é o que vou usar em uma janela de terminal para executar o código Python escrito para os testes.
</p>
<p>
--TVP
</p>
</blockquote>
## Dicas e truques

Ao examinar o restante da entrada do diário, você encontra algumas dicas possivelmente úteis sobre como completar este teste.

<details>
<summary>Como faço download e instalo o Python 3?</summary>
No Windows é __altamente__ recomendável instalar o Python 3 usando a [Windows Store](https://www.microsoft.com/en-us/p/python-37/9nj46sx7x90p). Isso controla a configuração do comando `python3` no caminho do sistema e outros bits úteis.

Para outros sistemas, há [downloads no site python.org](https://www.python.org/downloads/). Até a data deste texto, a versão mais recente do Python é `3.7.4`. Para Mac, há instaladores gráficos que podem ser baixados e que devem orientá-lo pelo processo de instalação.

</details>
<details>
<summary>Como executo comandos em um "terminal"?</summary>
Às vezes, usaremos "terminal" e "interface de linha de comando" alternadamente. Um terminal é um aplicativo que permite que você diga ao seu computador para fazer coisas digitando comandos.

No Windows, recomendamos o uso do [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-6). No Mac, recomendamos o uso do app [Terminal](https://support.apple.com/guide/terminal/welcome/mac). Se você for um usuário do Linux, seu aplicativo de terminal varia com base na versão do Linux que você está usando.

Ao escrever código Python para o TwilioQuest, você executará o código usando este aplicativo de terminal. Os testes devem conter anotações sobre onde e como executar comandos no terminal.

</details>
<details>
<summary>Como posso encontrar o caminho onde o "python3" está instalado?</summary>
Para confirmar que você tem o comando `python3` disponível em seu terminal, comece digitando o seguinte comando:

```bash
python3 --version
```

Isso imprimirá a versão atual do Python 3 que você instalou. Se você conseguir fazer o que foi mencionado acima, tudo está configurado para executar algum código Python! Para verificar onde o comando foi instalado (e __concluir este objetivo__), você pode usar este comando no Mac e no Linux:

```bash
which python3
```

Isso imprimirá um caminho em seu computador (uma série de pastas) onde o instalador colocará o comando `python3`. Copie toda a string no campo de texto à direita e clique em *HACK*. Em um Mac, o caminho pode ser parecido com este:

`/Library/Frameworks/Python.framework/Versions/3.7/bin/python3`

Em um PC, o processo é ligeiramente diferente. No PowerShell, execute o seguinte comando:

```bash
 Get-Command python3.exe | Select-Object -ExpandProperty Definition
```

O caminho completo para o seu executável `python3` deve estar na saída deste comando. Em um PC, o caminho pode ser parecido com este:

`C:\Users\susan\AppData\Local\Microsoft\WindowsApps\python3.exe`

</details>
<details>
<summary>Eu já tenho o Python 2, está tudo bem? SPOILER: Não, não está :(</summary>
Os exercícios no TwilioQuest presumem que você esteja usando Python 3, então você deve instalar o Python 3 para concluir os exercícios relacionados. Há [muitas diferenças entre Python 2 e 3](https://www.fullstackpython.com/python-2-or-3.html) e o TwilioQuest demonstrará recursos de linguagem que não funcionarão no Python 2. Se estiver aprendendo Python pela primeira vez, você só deve se preocupar em aprender Python 3.

</details>
