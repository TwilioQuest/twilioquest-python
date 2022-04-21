# Toledoの試練に関するメモ

このバリアの隣に、Toledo Van Possumが残したひどく傷んだ日誌の書き込みが見つかります。これは、彼がイニシエーション儀式室で最後に遭遇したバリアの1つのようです。

<blockquote>
2016年10月3日
<hr/>
<p>
日付は10月3日です。
</p>
<p>
最後に辿り着いたのは、悪名高い<b>策略の試練</b>です。Pythonの古代都市では、この試練が基礎的なプログラミング能力の公正な試験であると信じている人もいましたが、不公正な策略であるという意見もありました。使用されることの稀な数学演算子(<a href="https://stackoverflow.com/questions/4432208/what-is-the-result-of-in-python">剰余演算子</a>)をプログラマーが承知しているかどうかに依存するというのです。
</p>
<p>
この試練で能力が公正に評価されるかどうかに関係なく、いわゆる"FizzBuzz"の課題を実施することは、リストの反復処理と条件ロジックを組み合わせる場合に便利です。ここでは、将来の探検家たちが私の技術を活用できるよう、テストではなく演習による学習を目指して進めていきます。
</p>
<p>
--TVP
</p>
</blockquote>
## ヒントとコツ

日誌に目を通すと、この試練の完了に役立ちそうな一節がいくつか見つかります。

<details>
<summary>一般に、コードでは何を実行する必要がありますか?</summary>
多くの場合、__擬似コード__の使用は、問題を解く方法を計画するために役立ちます。擬似コードは、実際には実行されませんが、どのように解くことができるかを描くのに便利です。手順を理解し、擬似コードを実際のコードに実装します。

FizzBuzzの課題を完了するのに必要な手順を記述した擬似コードを次に示します。

<pre>
inputs = list of all arguments to my script

for each input in the list, do the following:
    convert the input to a number
    set my print string equal to a blank/empty string
    if the number is divisible by 3, append "fizz" to the output string
    if the number is divisible by 5, append "buzz" to the output string
    if by now the output string is still blank, set it to the input number
    print the output string
</pre>
この擬似コードでは、課題を完了するための手法を記述します。他にもありますが、この方法で十分に動作します。次に、これらすべてを実際のPythonコードで実行する方法を理解する必要があります。

</details>
<details>
<summary>スクリプトに渡される全引数のリストを取得する方法を教えてください。</summary>
前の課題では、`sys`モジュールを使用してスクリプトの全引数のリストを取得し、最初の項目(ここでは不要なプログラム名を格納)を削除できました。

```python
import sys

# Set up a list for our code to work with that omits the first CLI argument, 
# which is the name of our script (fizzbuzz.py)
inputs = sys.argv
inputs.pop(0)

# Now, inputs is ready for us to work with
```

</details>
<details>
<summary>文字列を整数に変換する方法を教えてください。</summary>
入力がプログラムに渡されると、最初はテキスト文字列として提供されます。入力を使用して計算するには、入力を数値に変換します。この手法は、[型キャスト/強制型変換/変換](https://en.wikipedia.org/wiki/Type_conversion)と呼ばれ、「強制型変換」がいずれの単語とも最も交換可能です。

Pythonには、[組み込みの](https://www.w3schools.com/python/python_casting.asp)型キャスト関数がいくつか用意されています。この課題では、`int`関数により、文字列を整数に変換します。

```python
number_string = "100"
number_converted = int(number_string)
print(f"100 minus 60 is {number_converted - 60}")
```

</details>
<details>
<summary>数値が別の数値で割り切れるかどうかを確認する方法を教えてください。</summary>
数値AとBがある場合、AをBで除算した後に余りがないということは、数値Aは数値Bで割り切れることになります。

`6`を`3`で割ると、`2`余り0になります。`6`は`3`で割り切れます。

`7`を`3`で割ると、`2`余り`1`になります。`7`は`3`で割り切れません。

では、これをPythonコードで判別する方法を教えてください。`modulus`または`modulo`と呼ばれる、稀にしか使用しない演算子を使用します。これは、コードの`%`(パーセント)文字です。この演算子を使用すると、2つの数値を除算した余りを変数に格納できます。

```python
rem1 = 6 % 3
rem2 = 7 % 3

print(f"The remainder after dividing 6 by 3 is {rem1}.")
print(f"The remainder after dividing 7 by 3 is {rem2}.")
```

上記のコードでは、`rem1`は`0`になり、`rem2`は`1`になります。

つまり、`%`演算子を使用すると、数値を別の数値で割り切れるかどうかを確認できます。結果が0の場合、最初の数値は2番目の数値で割り切れます。

</details>
<details>
<summary>リストをループして条件ロジックを実行する方法を教えてください。</summary>
ここまでに、これらの両方を実行するコードをすでに作成しています。コードフォルダで、すでに記述したコードを参照してください。

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

`list_iteration.py`、`booleans.py`、`branching.py`のファイルには、役に立つ例がいくつか含まれています。この試練を完了するには、__これらの手法を組み合わせ__ます。

</details>
<details>
<summary>この試練を完了するには何をする必要がありますか?</summary>
次の場所にあるコードフォルダに、新しいファイル`fizzbuzz.py`を作成します。

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

このファイルでは、スクリプトのコマンドライン引数を処理し、各入力に対してそれぞれ適切に出力します。スクリプトの実行例:

```bash
python3 fizzbuzz.py 30 200 7 6
```

出力例:

```bash
fizzbuzz
buzz
7
fizz
```

繰り返しますが、printステートメントのルールは次のとおりです。

* 数値が__3で割り切れる__場合は、テキスト: `fizz`を出力します。
* 数値が__5で割り切れる__場合は、テキスト: `buzz`を出力します。
* 数値が__3と5の両方で割り切れる__場合は、テキスト: `fizzbuzz`を出力します。
* 上記のいずれも当てはまらない場合は、__その数値を出力__します。

次のコードを参考として使用することを検討してください。このコードにより、スクリプトに渡されるすべてのコマンドライン引数を含むリストが作成されます。

```python
import sys

# Set up a list for our code to work with that omits the first CLI argument, 
# which is the name of our script (fizzbuzz.py)
inputs = sys.argv
inputs.pop(0)

# Process the "inputs" list as directed in your code
```

`fizzbuzz.py`のコードで、これらの要件を満たすようにコマンドライン引数を処理し、[*HACK*]ボタンをクリックして試練を完了します。あなたならできます。

</details>
