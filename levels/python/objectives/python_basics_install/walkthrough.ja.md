# Toledoの試練に関するメモ

「インストールの試練」に取り組む準備をしている間、Toledoの日誌の別のページが近くにあることに気づきました。スタッフやパズルに関連する情報は含まれていませんが、現在の試練に関する関連情報があるようです。

<blockquote>
2016年1月24日
<hr/>
<p>
私の直感は正しいようです。儀式の間を通り抜けて先に進むには、初期のPythonistaがPythonの都市の市民になる前に受けたものと同じ「市民権の試練」を完了する必要があります。
</p>
<p>
最初の試練では、コンピューターにPythonをインストールするように求められますが、これはとても簡単です。ダウンロードして数回クリックするだけで、すべてを設定できます。インストールの完了後、コンピューターで<code>python3</code>実行可能ファイルのフルパスを貼り付けるだけです。<code>python3</code>コマンドは、試練用に記述したPythonコードを実行するために、ターミナルウィンドウで使用します。
</p>
<p>
--TVP
</p>
</blockquote>
## ヒントとコツ

日誌の残りの部分を読むと、この試練の完了方法について役立ちそうなヒントが見つかります。

<details>
<summary>Python3をダウンロードしてインストールする方法を教えてください。</summary>
Windowsでは、[Windows Store](https://www.microsoft.com/en-us/p/python-37/9nj46sx7x90p)からPython 3をインストールすることを__強く__お勧めします。これにより、システムパスに`python3`コマンドが登録され、他の役に立つファイルがインストールされます。

その他のシステムでは、[python.orgのWebサイトからダウンロードしてください](https://www.python.org/downloads/)。この試練の執筆時点では、Pythonの最新バージョンは`3.7.4`です。Mac向けに、ダウンロード可能なグラフィカルインストーラを用意しています。インストーラの指示に従い、インストールプロセスを進めてください。

</details>
<details>
<summary>「ターミナル」でコマンドを実行する方法を教えてください。</summary>
「ターミナル」と「コマンドラインインターフェイス」は同じ意味で使用することがあります。ターミナルとは、コマンドを入力してコンピューターに操作を指示できるアプリケーションです。

Windowsでは、[PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-6)を使用することをお勧めします。Macでは、[ターミナル](https://support.apple.com/guide/terminal/welcome/mac)アプリケーションを使用することをお勧めします。Linuxユーザーの場合、使用しているLinuxのフレーバーにより、ターミナルアプリケーションが異なります。

TwilioQuest用のPythonコードを記述する場合は、このターミナルアプリケーションを使用してコードを実行します。試練には、ターミナルでコマンドを実行する場所と方法に関するメモが含まれています。

</details>
<details>
<summary>python3がインストールされているパスを見つける方法を教えてください。</summary>
ターミナルで`python3`コマンドを使用できることを確認するには、次のコマンドを入力します。

```bash
python3 --version
```

これにより、インストールしたPython3の現在のバージョンが出力されます。これらの操作を実行できる場合は、Pythonコードが実行されるようにすべて設定されています。コマンドがインストールされている場所を確認する(__この目的を完了する__)には、MacとLinuxで次のコマンドを使用します。

```bash
which python3
```

これにより、インストーラが`python3`コマンドを入力したコンピューターのパス(一連のフォルダ)が出力されます。この文字列全体を右側のテキストフィールドにコピーし、[*HACK*]をクリックします。Macでは、パスは次のようになります。

`/Library/Frameworks/Python.framework/Versions/3.7/bin/python3`

PCでは、プロセスは少し異なります。PowerShellで、次のコマンドを実行します。

```bash
 Get-Command python3.exe | Select-Object -ExpandProperty Definition
```

このコマンドの出力には、`python3`実行可能ファイルのフルパスを含めます。PCでは、パスは次のようになります。

`C:\Users\susan\AppData\Local\Microsoft\WindowsApps\python3.exe`

</details>
<details>
<summary>Python 2がすでにありますが、それで問題ありませんか?答え: いいえ、問題があります。</summary>
TwilioQuestの演習では、Python 3の使用を前提としているため、関連する演習を完了するにはPython 3のインストールが必要です。[Python 2とPython 3には多くの違いがあります](https://www.fullstackpython.com/python-2-or-3.html)。TwilioQuestでは、Python 2では動作しない言語機能について言及しています。Pythonについて初めて学習する場合は、Python 3の学習だけに集中してください。

</details>
