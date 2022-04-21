# Toledoの試練に関するメモ

このバリアの周辺を少し探索すると、Toledo Van Possumの日誌の書き込みがもう1つ見つかります。

<blockquote>
2016年8月21日
<hr/>
<p>
最終的な手がかりが存在するかどうか疑い始めていましたが、儀式の間の探索を続けたところ、ありがたいことに、もう1つの試練（「分岐パスの試練」）をついに見つけました。ブール値と比較ロジックについて学習した内容を使用し、さらにコードを複数の方向に分岐する方法を学習し、さまざまなシナリオをサポートします。
</p>
<p>
この部屋を脱出できるのなら、TwilioQuestプログラムの通常料金が2倍に増額されてもかまいません。
</p>
<p>
--TVP
</p>
</blockquote>
## ヒント

日誌を読むと、役に立つ一節がいくつか見つかります。

<details>
<summary>複数の方向に分岐するコードを記述する方法を教えてください。</summary>
すでに`if`ステートメントについて見てきましたが、このステートメントでは、特定の条件がtrueの場合にコードブロックを実行できます。複数の条件をサポートするには、`elif`ステートメントと`else`ステートメントについても理解しておく必要があります。

```python
dinner_name = "kale"

if dinner_name == "tacos":
    print("Tacos for dinner - right on!")
elif dinner_name == "pizza":
    print("Pizza - can't go wrong there!")
else:
    print("Okay - better than being hungry amirite?")
```

[比較ロジック](https://docs.python.org/3/library/stdtypes.html#comparisons)を使用し、コードブロックを実行するかどうかを決定できます。このような条件付きステートメントには`if`と`else`ブロックを1つのみ含めることができますが、コードには、必要な数の`elif`ブロックを含めることができます。

`elif`ブロックはifステートメントと同じように機能します。これらの比較はすべて順番に実行され、最初の比較が`True`と評価されると、他の条件はいずれも評価されなくなります。そのため、順番が重要になります。

`else`ステートメントは、他の条件がいずれもtrueでない場合に実行されるコードブロックを宣言します。

</details>
<details>
<summary>スクリプト（文字列）への入力を数値に変換する方法を教えてください。</summary>
この課題を完了するため、スクリプトに引数として渡される数値の値を比較します。ただし、`sys.argv`から最初に読み込むと、これらの値は__数字__ではなく__文字列__になります。数値を比較するには、引数を__整数（自然数）__または__浮動小数（小数）__に変換します。次のコードは、入力を整数に変換する方法を示しています。

```python
first_num = int(sys.argv[1])
second_num = int(sys.argv[2])
sum_to_use = first_num + second_num
```

</details>
<details>
<summary>この試練を完了するには何をする必要がありますか?</summary>
次の場所にあるコードフォルダに、新しいファイル`branching.py`を作成します。

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

__2つのコマンドライン引数を受け付けるプログラム__を作成します。これらの引数は、合計する必要がある2つの数値（自然数/整数）になります。__これらの数値の合計__に応じて、異なるメッセージがコードで出力されます。

* 数値の合計が__ゼロ以下__の場合は、次のテキストを出力します。 <div>`You have chosen the path of destitution.`</div>
* 数値の合計が__1以上100以下__の場合は、次のテキストを出力します。 <div> `You have chosen the path of plenty.`</div>
* 数値の合計が__100より大きい__場合は、次のテキストを出力します。 <div> `You have chosen the path of excess.`</div>

スクリプトの実行例:

```bash
python3 branching.py 30 200
```

出力例:

```bash
You have chosen the path of excess.
```

スクリプトで3つの条件をすべて正しく処理できることを確認した後、[*HACK*]ボタンをクリックします。

</details>
