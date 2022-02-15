# Toledoの試練に関するメモ

このバリアの横に、日誌の書き込みがもう1つ見つかります。

<blockquote>
2016年4月4日
<hr/>
<p>
Pythonic Templeの学者たちは、発言を二度と繰り返さないことで知られ、困惑した学生たちがどんなに懇願しても無駄でした。この試練では、効率性に対する熱意が明らかでした。
</p>
<p>
<b>関数</b>は、再利用可能なPythonコードの集まりです。コード内で同じ手順を繰り返し実行する必要がある場合は、関数の作成を検討してください。これにより、同じコードを繰り返しコピー/貼り付けしなくとも、必要なコードをすべて含む関数を1つ呼び出すだけで済みます。
</p>
<p>
--TVP
</p>
</blockquote>
## ヒントとコツ

日誌に目を通すと、この試練に役に立つヒントがほかにも見つかります。

<details>
<summary>関数を定義する方法を教えてください。</summary>
[関数](https://docs.python.org/3.7/tutorial/controlflow.html#defining-functions)は、再利用可能なコードの集まりであり、これを使用することにより、開発者は同じコードを何度も記述することを回避できます。これまで見てきた変数と同様、__関数にも名前があります__。そのため、名前で__呼び出し__、その機能を使用できます。例えば、`print()`は、コンソールに出力を送信できるPython内蔵の関数です。

次に、現在実行中のスクリプトの名前をコンソールに出力する関数を含むPythonプログラムの例を示します。

```python
import sys

def print_name():
    print(f"Current script: {sys.argv[0]}")

print_name()
```

このコードを実行する場合は、Pythonコードの1つの行（現在のスクリプト名を出力するコード）を含む、`print_name`という名前の関数を定義します。この例のコードの最後の行では、関数名の末尾に開き括弧と閉じ括弧`()`を追加し、関数を__呼び出します__（関数のコードを実行します）。

</details>
<details>
<summary>関数の一部と見なされるコードは何ですか?一部の行がインデントされるのはなぜですか?</summary>
関数内のコードは、__1つのタブがインデント__されます（通常は4つのスペース）インデントとは、Pythonでコードの__ブロック__を作成する方法です。同じインデントレベルで始まるすべてのコードは、同じブロックの一部と見なされます。次のように、同じインデントレベルで追加することにより、関数にコードの別の行を追加できます。

```python
def print_lines():
    print("This will print first.")
    print("This will print second.")

print_lines()
```

コードの次の行が同じレベルでインデントされて__いない__場合は、関数が宣言された直後に実行されます。

```python
def print_lines():
    print("This will print second, and now our function has only one line.")
print("This will print first, and is no longer part of the function.")

print_lines()
```

</details>
<details>
<summary>この試練を完了するには何をする必要がありますか?</summary>
次の場所にあるコードフォルダに、新しいファイル`functions.py`を作成します。

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

このファイルでは、メッセージ`Hail, friend!`を出力する、`hail_friend`という名前の__関数を宣言__します。

関数を宣言する方法については、このチュートリアルの残りの部分を参照してください。`functions.py`でコードが想定通りに動作するのを確認した後、[*HACK*]ボタンをクリックし、送信します。

</details>
