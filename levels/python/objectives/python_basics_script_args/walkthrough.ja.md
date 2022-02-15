# Toledoの試練に関するメモ

このバリアの横に、Toledo Van Possumの日誌の書き込みがもう1つあります。

<blockquote>
2016年2月12日
<hr/>
<p>
「要請された入力の試練」の目的は、Python開発者を目指す人に、使用する初期データをコードに指定する方法について示すことです。一般に、タスクを実行するコードを記述する場合、次の3つの手順があります。
</p>
<ol>
<li>コードに入力を渡します。</li>
<li>コードが実行され、入力に対して計算などの処理が実行されます。</li>
<li>処理が終了すると、コードで出力が返されます。</li>
</ol>
<p>
この場合、入力は<b>コマンドライン引数</b>の形式で提供されます。これらは、スクリプト名の後に入力する文字列です。出力は、作成するように求められたprintステートメントになります。次の操作をすべて実行するには、Pythonの新しい活用術を使用する必要もあります。
</p>
<ul>
<li>Pythonの標準ライブラリーからモジュールをインポートする</li>
<li>スクリプトに渡される「引数」（入力）にアクセスする</li>
<li>printステートメントでスクリプトに渡されるデータ（引数）を挿入する</li>
</ul>
<p>
これらの活用術は、将来の探索者向けに記録しておきます。
</p>
<p>
--TVP
</p>
</blockquote>
## ヒントとコツ

日誌の残りの部分を読むと、この試練の完了方法について役立ちそうなヒントが見つかります。特に、コマンドライン引数からの入力を使用するスクリプトを記述する方法の例が1つあります。

```python
import sys

print(f"The name of this Python file is '{sys.argv[0]}'")
print(f"The first argument passed in to my script was: '{sys.argv[1]}'")
print(f"The second argument passed in to my script was: '{sys.argv[2]}'")
print(f"The third argument passed in to my script was: '{sys.argv[3]}'")
```

このコードを`collect_input.py`というファイルにコピーし、次のように実行します。

```bash
python3 collect_input.py snacky yogurt "a long thing in quotes"
```

スクリプトが実行され、すべての引数が順番に出力されます。この方法で実際にすべて解決できるように思えますが、少し時間をかけて、このコードの重要な部分は何か理解してください。

## モジュールのインポート

この解決方法のコードは、次の行から始まります。

```python
import sys
```

ここでは、Pythonの標準ライブラリーからモジュールを[インポート](https://docs.python.org/3/reference/import.html)しています。では、いくつかの専門用語について詳しく見てみましょう。

* __モジュール__: モジュールとは、特定のタスクを行うためにコード内で使用している、他の場所で記述された（おそらくは他の人が記述した）コードです。独自のモジュールを記述することにより、コードをさまざまなファイルに整理したり、他のユーザーが作成したモジュールを使用したりできます。[sys](https://docs.python.org/3/library/sys.html)モジュールはPythonに組み込まれており、スクリプトの入力を収集するなどのタスクを実行します。
* __インポート__: 別のモジュールで定義されたコードを使用する必要がある場合、`import`キーワード（[docs](https://docs.python.org/3/reference/import.html)）を使用してコードにインポートします。`sys`など組み込みモジュールの場合は、`import`キーワードの後にモジュール名を渡すだけです。モジュールを含める方法は他にもありますが、これについては別の機会に取り上げます。
* __標準ライブラリー__: これらは、一般的なタスクを実行するために[Pythonに組み込まれている](https://docs.python.org/3/library/)モジュールです。標準ライブラリーには、数値、日付、テキスト、その他の一般的なデータ型の操作に役立つモジュールがあります。

この試練のコードでは、`sys`モジュールを使用し、実行時にスクリプトに渡された入力にアクセスします。

## コンソールへのテキストの出力

これは、サンプルコードで前に説明しましたが、`print`という名前の__関数__です。[この関数](https://docs.python.org/3/tutorial/inputoutput.html)は、コンソールにテキストを出力するための利便性のため、すべてのPythonコードで自動的に使用できます。

__関数__の詳細については、後で説明しますが、関数とは、タスクを実行するために、さまざまな入力を使用して繰り返し呼び出せる再利用可能なコードの集まりです。[print関数](https://docs.python.org/3/library/functions.html#print)は、コンソールに出力する情報を表す引数を取ります。

これらのprintステートメントでは、["f"文字列](https://docs.python.org/3/tutorial/inputoutput.html#tut-f-strings)と呼ばれるPythonの機能も使用します。これにより、プログラムからテキスト文字列にデータを挿入できます。文字列の詳細については、後で説明します。

## スクリプト引数へのアクセス

プログラムに渡される引数を実際に取得するには、`sys.argv`オブジェクトを使用します。このオブジェクトは、`python3`コマンドに渡されるすべての引数が含まれる文字列からなる[リスト](https://www.w3schools.com/python/python_lists.asp)です（スクリプトの名前を含む）。

`sys.argv[0]`は、常にスクリプトの名前になります。この例では、"collect_input.py"になります。

`sys.argv[1]`は、名前の次、スクリプトの第1引数です。

`sys.argv[200]`は、スクリプトに渡される200番目の引数です。このコードでは、スクリプトに引数が200個ないと[エラーが発生する](https://docs.python.org/3/tutorial/errors.html)ことに注意してください。

## 試練の完了

試練を完了するには、コンピューターの`<%= env.TQ_PYTHON_CODE_PATH.value %>`フォルダにある、`collect_input.py`というファイルに上記のToledoのコードをコピーします。ターミナルで、次のコマンドを入力して開始します。

```bash
cd <%= env.TQ_PYTHON_CODE_PATH.value %>
```

これにより、[現在の作業ディレクトリ](https://en.wikipedia.org/wiki/Working_directory)がPythonコードフォルダに変更されます。次に、`collect_input.py`いう名前のPythonコードファイルをこのフォルダに作成します（まだ作成していない場合）。

MacまたはLinuxでは、次のコマンドを入力します。

```bash
touch collect_input.py
```

Windows（PowerShell）では、次のコマンドを入力します。

```bash
New-Item -ItemType file collect_input.py
```

次に、Visual Studio Codeまたは任意のテキストエディターでコードファイルを開きます。次のコードを`collect_input.py`に保存します。

```python
import sys

print(f"The name of this Python file is '{sys.argv[0]}'")
print(f"The first argument passed in to my script was: '{sys.argv[1]}'")
print(f"The second argument passed in to my script was: '{sys.argv[2]}'")
print(f"The third argument passed in to my script was: '{sys.argv[3]}'")
```

このように、3つの引数を使用してスクリプトを実行し、テストします。

```bash
python3 collect_input.py snacky yogurt "a long thing in quotes"
```

スクリプトにより、すべての引数がコンソールに出力されます。この処理をコードで実行できた場合は、右側の[*HACK*]ボタンをクリックし、試練を完了してください。