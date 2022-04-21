# Toledoの試練に関するメモ

このバリアの横に、日誌の書き込みがもう1つ見つかります。

<blockquote>
2016年6月1日
<hr/>
<p>
生産性は初期のPythonistaの品質証明でした。彼らは、効率性を追求するあまり、TODOリストを破ることで有名でした。この課題では、自分のコードでリストを操作する能力も実証します。
</p>
<p>
この試練では、<a href="https://realpython.com/python-for-loop">for/inループ</a>を使用し、スクリプトに渡されるコマンドライン引数のリストにある各項目に対してコードを実行します。 
</p>
<p>
--TVP
</p>
</blockquote>
## ヒントとコツ

日誌の書き込みにあるいくつかの一節は、この試練に特に関係あるものです。

<details>
<summary>リストの各項目に対してコードを実行する方法を教えてください。</summary>
リストの各項目に対してコードを実行する(またはリストを__反復処理__する)ことは、プログラミングにおける一般的な作業の1つです。この試練を完了するには、[for/inループ](https://realpython.com/python-for-loop/)を使用し、リストの各項目に対してコードブロックを実行します。前に取り上げた食料品リストを使用した例を見てみましょう。

```python
groceries = ['apples', 'coffee', 'pizza rolls', 'olives']

print("These are the items on my grocery list:")
for item in groceries:
    string_to_print = f"- {item}"
    print(string_to_print)
```

このコードを実行すると、前と同様に、4つの文字列からなる順序付きリストが作成されます。今回は、新しいステートメント(`for item in groceries:`)を使用します。

コードでは、この単一ステートメントにより、次の内容を記述します。

* `groceries`という変数に保存されているリストの各項目について、次の行から開始するコードを実行します。
* このコードを実行するたびに、`item`という名前の変数を作成します。この変数は、リストの次の項目を参照します。

ループ中に実行されるコードは、forループが開始された場所から__1つのタブ(4つまでのスペース)がインデントされます__。[このインデント](https://docs.python.org/3/reference/lexical_analysis.html#indentation)は、ループ中に実行するコードをPythonに指示します。インデントがないと、コードはすべて順番に実行され、ロジックは動作しません。

このロジックは、組み込みの関数[enumerate](https://docs.python.org/3/library/functions.html#enumerate)を使用して改善されています。これにより、リストをループする場合でも各項目の__インデックス__が提供されます。

```python
groceries = ['apples', 'coffee', 'pizza rolls', 'olives']

print("These are the items on my grocery list:")
for index, item in enumerate(groceries, start=1):
    string_to_print = f"{index}. {item}"
    print(string_to_print)
```

上記の方法は、このトライアイルで役に立ちそうです。

</details>
<details>
<summary>この試練を完了するには何をする必要がありますか?</summary>
次の場所にあるコードフォルダに、新しいファイル`list_iteration.py`を作成します。

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

次のコードを開始点として使用します。`order_of_succession`という新しいリストが作成され、スクリプトに渡したすべての引数が格納されます。

```python
import sys

# Set up a list for our code to work with that omits the first CLI argument, 
# which is the name of our script (list_iteration.py)
order_of_succession = sys.argv
order_of_succession.pop(0)

# Now, order_of_succession is ready for us to work with
```

コードでは、Python式の継承順位を前に付けて、リストに含まれている全員の名前を出力します。入力と出力の例については、[Objective]タブを参照してください。

この後のチュートリアルでは、リストの各項目に対してコードを実行する方法について説明します。スクリプトのすべてのコマンドライン引数を処理できるコードを記述してから、[*HACK*]ボタンをクリックし、作業内容を確認してください。

</details>
