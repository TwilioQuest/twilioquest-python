# Toledoの試練に関するメモ

このバリアの横に、Toledoの別の日誌を見つけました。

<blockquote>
2016年3月3日
<hr/>
<p>
Pythonの都市は、思想家や哲学者を多く輩出していることで有名です。彼らの言葉は時代を超えて伝えられています。このトライアイルは、将来のPythonプログラマーが効果的な方法で同じように単語を使用できるように、その方法を学習するように設計されています。
</p>
<p>
この試練を完了するには、入力文字列を取るコードを記述し、<b>ワクワクする</b>ものにします。これらの課題のいくつかですでに文字列を使用していますが、文字列は、文字の列(テキストやその他のデータ)を表すPythonの組み込みオブジェクトです。記述したPythonコードの多くは、これらのオブジェクトでテキストを操作する必要があり、市民権の試練に含めるのが重要である理由は明らかです。
</p>
<p>
--TVP
</p>
</blockquote>
## ヒントとコツ

日誌の残りの部分に目を通すと、さらに興味深い一節が見つかります。

<details>
<summary>プログラムの入力文字列を取得する方法を教えてください。</summary>
この演習の開始点として使用できるコードをいくつか示します。前と同様に、`sys`モジュールを使用し、入力文字列をコマンドライン引数として読み込みます。

```python
import sys

# Read in an input string passed in to our script as an argument
input_string = sys.argv[1]
output_string = input_string

# Now, print your transformed string:
print(output_string)
```

このプログラムを次のように実行します。

```bash
python3 strings.py "am I stoked enough yet"
```

記述されているように、上記のスターターコードでは、実際には文字列を操作したり変更したりすることはありません。これらの作業は各自で実施してくだい。

</details>
<details>
<summary>Pythonコードで文字列を変更する方法を教えてください。</summary>
技術的には、Python文字列は__不変__であり、作成後は変更できません。代わりに、既存の文字列を使用して値を変換し、新しい文字列を作成します。

Pythonの[文字列オブジェクト](https://docs.python.org/3/library/stdtypes.html#string-methods)には、何らかの変換が適用された新しい文字列を返すための__メソッド__が多数あります。詳細については後で説明しますが、__メソッド__は__関数__(`print`など)であり、オブジェクトの特定の__インスタンス__(コピー)上で動作します。[大文字](https://docs.python.org/3/library/stdtypes.html#str.upper)メソッドが役に立つ場合があります。

```python
new_string = "get stoked".upper()
print(new_string)
```

複数の方法で文字列を結合(__連結__)できますが、代表的なものは`+`演算子を使用する方法です。これは__数値を追加__するために使用するのと同じ演算子ですが、2つ以上の文字列で使用すると、これらの文字列が結合されます。

2つの文字列を結合し、`The NY Mets are my favorite squadron.`の値で完全な文字列を形成する例を次に示します。

```python
part_one = "The NY Mets "
part_two = "are my favorite squadron."

full_message = part_one + part_two
print(full_message)
```

</details>
<details>
<summary>この試練を完了するには何をする必要がありますか?</summary>
次の場所にあるコードフォルダに、新しいファイル`strings.py`を作成します。

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

このファイルでは、1つの__コマンドライン引数__と文字列を取り、2つの方法で変換します。次のコードを開始点として使用します。

```python
import sys

# Read in an input string passed in to our script as an argument
input_string = sys.argv[1]
output_string = input_string

# Now, print your transformed string:
print(output_string)
```

上記のコードは変更されず、試練の要件を満たしません。入力文字列を出力するだけです。このチュートリアルで説明する方法を使用して、__すべて大文字__に変換し、__感嘆符を3つ__追加した文字列を作成し、__その文字列をコンソールに出力__します。

次のようにコードを実行し、コードをテストできます。

```bash
python3 strings.py "am I stoked enough yet"
```

コードが動作すると、文字列`AM I STOKED ENOUGH YET!!!`が出力されます。

`strings.py`でコードが想定通りに動作するのを確認した後、[*HACK*]ボタンをクリックし、送信します。

</details>
