# Toledoの試練に関するメモ

このバリアの横に、よく目立つようにToledo Van Possumの日誌の書き込みが落ちています。

<blockquote>
2016年3月1日
<hr/>
<p>
初期のPythonistaたちは、コンピューターに数学をまかせる能力を持ち、自身は野心的な構想に取り組むことができたため、業績が加速されました。ここでは、彼らの足跡を追い、Pythonで数学の力を使用する方法を学びます。
</p>
<p>
このトライアイルを完了するには、指示に従い、4つの変数を宣言します。コマンドライン引数としてスクリプトに渡される数値を使用し、Pythonの組み込みの算術演算子により、加算、減算、乗算、除算を行います。
</p>
<p>
--TVP
</p>
</blockquote>
## ヒントとコツ

日誌の書き込みの未読部分を見てみると、この試練を完了するために役立つ興味深いヒントがいくつか見つかります。

<details>
<summary>さまざまな数学演算に使用する記号を理解する方法を教えてください。</summary>
完全なリストについては[こちら](https://docs.python.org/3/library/operator.html#mapping-operators-to-functions)で確認できますが、この試練で必要になる例は次のとおりです。

```python
print(f"2 plus 2 equals { 2 + 2 }");
print(f"8 minus 4 equals { 8 + 4 }");
print(f"12 divided by 4 equals { 12 / 4 }");
print(f"11 times by 3 equals { 11 * 3 }");
```

</details>
<details>
<summary>この試練を完了するには何をする必要がありますか?</summary>
コードフォルダに、`numbers.py`という名前のファイルを作成します。

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

このファイルでは、__4つの変数__を宣言します。名前を付けるために必要な情報については、[Objective]タブの表を参照してください。変数には、スクリプトに渡される数値に対する4つの数学演算の結果を、__コマンドライン引数__として格納します。開始点として次のコードが指定されました。

```python
import sys

# This code reads in arguments and converts those inputs to decimal numbers
first_number = float(sys.argv[1])
second_number = float(sys.argv[2])

# Your code goes here!
result_sum = first_number + second_number

print(f"{first_number} plus {second_number} equals {result_sum}")
```

前の例と同様に、`sys`モジュールを使用してスクリプトの入力を読み取り、その入力を`first_number`と`second_number`という変数に割り当てます。引数を指定してスクリプトを実行するには、ターミナルで次のコマンドを使用します。

```bash
python3 numbers.py 12 4
```

コードを記述するときに、この方法でコードを実行してテストし、動作を確認できます。コードを準備し、[*HACK*]ボタンをクリックし、試練を完了します。[数学!](https://www.youtube.com/watch?v=FfPFtbJAEm8)

</details>
