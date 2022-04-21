# Toledoの試練に関するメモ

このバリアの横に、日誌の書き込みがもう1つ見つかります。

<blockquote>
2016年4月4日
<hr/>
<p>
Python市の指導者継承に端を発した一連の内戦を経て、初期のPythonistaたちは、主要な指導者の継承順位を定める厳格な制度を構築しました。順位付きリストはほとんどの社会で非常に重要であり、市民を目指す者は、この概念を理解するために、このトライアイルを完了する必要がありました。
</p>
<p>
<b>リスト</b>は、Pythonコードのオブジェクトの順序付きリストです。リストには、文字列、数値、さらには複雑なデータ型など、あらゆる種類のデータを含めることができます。この試練を完了するには、リストのデータを作成して操作する方法を学習する必要があります。
</p>
<p>
--TVP
</p>
</blockquote>
## ヒントとコツ

この日誌の書き込みには、他にも役に立つ知恵がいくつか書かれていました。

<details>
<summary>リストを作成する方法を教えてください。</summary>
ここでは、Pythonコードで[リスト](https://docs.python.org/3/tutorial/datastructures.html)を作成して操作する方法を学習します。食料品のリストに表示される可能性のある項目のリストを作成しましょう。

```python
groceries = ['apples', 'coffee', 'pizza rolls', 'olives']

print(f"The first item on my grocery list is {groceries[0]}")
print(f"The last item on my grocery list is {groceries[3]}")
```

このコードを実行すると、4つの文字列からなる順序付きリストが作成されます。リストの各項目には__インデックス__があります。インデックスとは、リスト内で項目の位置を表す番号です。プログラミングでは、リストの最初の項目はインデックス`0`にあり、インデックスはそこから上に向います。4つの項目からなるリストでは、最後のインデックスは`3`です。

__添字表記法__を使用し、特定のインデックスでリストの項目を取得できます。これは上記のprintステートメントの角かっこ(`[]`)が付いた部分です。`first_item = groceries[0]`では、最初の項目がリストに格納され、文字列`apples`が変数`first_item`に格納されます。

リストには任意の種類のデータを含めることができます。この例では、複数のデータ型が1つのリストに混在しています。

```python
stuff = ['apples', {'favoriteMovieName': 'Star Wars'}, 42, True]

print(f"My favorite movie is {stuff[1]['favoriteMovieName']}")
```

</details>
<details>
<summary>この試練を完了するには何をする必要がありますか?</summary>
次の場所にあるコードフォルダに、新しいファイル`lists.py`を作成します。

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

このファイルでは、5人の指導者の名前が含まれる、`order_of_succession`という名前の__リストを作成__します。これらを、最後に確認されたPython継承順位と同じ順に表示します。名前は`Isabelle`、`Grace`、`Charlotte`、`LeBron`、`Steve`という5人の指導者でした。

リストの作成方法については、この後のチュートリアルを参照してください。`order_of_succession`リストオブジェクトを作成してから[*HACK*]ボタンをクリックし、作業を送信してください。

</details>
