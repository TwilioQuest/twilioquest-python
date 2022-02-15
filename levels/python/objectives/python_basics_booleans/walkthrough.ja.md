# Toledoの試練に関するメモ

このバリアの周辺を少し探索すると、Toledo Van Possumの日誌の書き込みがもう1つ見つかります。

<blockquote>
2016年7月10日
<hr/>
<p>
初期のPythonistaたちは、客観的な真実を確立するために、科学と査読の力を信じていました。彼らは、市民権を得るための試練に「真実の試練」を含め、この値が最新のメンバーにも確実に渡るようにしました。
</p>
<p>
この試練を完了するため、新しい種類の値（<a href="https://docs.python.org/3/library/stdtypes.html#truth-value-testing">ブール値</a>）を含む変数を作成します。「ブール値」とは面白い言葉ですね。
</p>
<p>
<b>ブール値</b>は、trueとfalseの概念を表します。プログラミングでは、ある一連の状況下ではあるコードパスを実行し、別の状況下では別のコードを実行する必要があることがよくあります。例えば、ユーザーがログインしている場合は、口座の残高を表示し、ログインしていない場合は、ログインページにリダイレクトします。この試練を完了するため、この概念の基本的なコマンドを実演します。
</p>
<p>
--TVP
</p>
</blockquote>
## ヒント

日誌を読むと、役に立つ一節がいくつか見つかります。

<details>
<summary>ブール変数作成する方法を教えてください。</summary>
同じ名前を大文字にした単語を使用し、変数に`True`または`False`の値を直接割り当てることができます。

```python
tacos_rule = True
root_canal_fun = False
```

</details>
<details>
<summary>特定の条件がtrueの場合、コードを実行する方法を教えてください。</summary>
__ifステートメント__を使用し、特定の条件でのみ実行されるコードブロックを定義できます。

```python
tacos_rule = True

if tacos_rule:
    print("Well, of course tacos rule!")
```

多くの場合、[比較ロジック](https://docs.python.org/3/library/stdtypes.html#comparisons)を使用し、コードブロックを実行するかどうかを決定します。これらは、比較するデータに応じて`True`または`False`に評価されるステートメントです。次のコードでは、「～と等しくない」比較（`!=`）を使用し、printステートメントを実行するかどうかを決定します。

```python
dinner_name = "kale"

if dinner_name != "tacos":
    print("Why aren't we eating tacos?")
```

</details>
<details>
<summary>この試練を完了するには何をする必要がありますか?</summary>
次の場所にあるコードフォルダに、新しいファイル`booleans.py`を作成します。

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

複数の[ブール](https://docs.python.org/3/library/stdtypes.html#truth-value-testing)変数を宣言するプログラムを作成します。変数には、次の名前と値が必要です。

* 変数`python_is_glorious`を`True`に設定します。
* 変数`failure_is_option`を`False`に設定します。
* 変数`proper_greeting`は、初期設定を`False`にします。

スクリプトを実行する場合は、次のスクリプトに渡される最初の引数の値を確認してください:  `sys.argv[1]`.その引数が`For the glory of Python!`の場合は、`proper_greeting`変数を`True`に設定します。次のスクリプト呼び出しの例では、`proper_greeting`変数が`True`に設定されます。

```bash
python3 booleans.py 'For the glory of Python!'
```

それ以外を入力すると、`proper_greeting`の値は`False`のままになります。

スクリプトで変数が正しく宣言された場合は、[*HACK*]ボタンをクリックしてください。

</details>
