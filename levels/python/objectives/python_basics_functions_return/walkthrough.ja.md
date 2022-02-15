# Toledoの試練に関するメモ

このバリアの横に、日誌の書き込みがもう1つ見つかります。

<blockquote>
2016年4月22日
<hr/>
<p>
初期のPythonistaのピクセルレンダリングは、彼らの時代に驚くほど進化しました。彼らのファクトリーでは、未加工のパケットを使用して処理し、その時代のクラウドでは珍重された芸術作品を生み出しました。
</p>
<p>
関数は工場と同じように動作します。原材料（引数）を使用して処理（コードを実行）し、役に立つ結果を<b>返す</b>ことができます。これから、この試練を完了する方法について学習します。
</p>
<p>
--TVP
</p>
</blockquote>
## ヒント

日誌の残りの部分に目を通すと、さらにいくつかの注目点が見つかります。

<details>
<summary>関数から値を返す方法を教えてください。</summary>
多くの場合、関数の実行後に、関数の発信側に何らかの結果を返します。これを行うには、`return`キーワードを使用します。前の`hail_friend`関数を開始点として使用してみましょう。  今回は、メッセージをすぐに出力する代わりに、関数から返し（`return`）ましょう。これにより、関数の発信側で、その値を変数に格納し、結果に必要な操作を実行できます。

```python
def hail_friend(name):
    message = f"Hail, {name}!"
    return message

greeting_one = hail_friend("Edward")
greeting_two = hail_friend("Alphonse")

print(greeting_one)
print(greeting_two)
```

これは、これまで見てきた他の関数コードとよく似ていますが、関数のコードの最後の行では、`return`キーワードを使用し、関数コードの結果を発信側に返します。

</details>
<details>
<summary>この試練を完了するには何をする必要がありますか?</summary>
次の場所にあるコードフォルダで、`functions.py`の名前のファイルを開きます（または、必要に応じて再作成します）。

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

このファイルでは、2つの引数を取る`add_numbers`という名前の__関数を宣言__します。これらの引数は、関数で合計する整数になります。数値を合計するためのPythonコードが見つからない場合は、次のようにします。

```python
result_sum = first_number + second_number
```

引数を取り、結果を返す関数を宣言する方法については、このチュートリアルの残りの部分を参照してください。想定通りに動作している`add_numbers`という関数を`functions.py`に追加した後、[*HACK*]ボタンをクリックし、送信します。

</details>
