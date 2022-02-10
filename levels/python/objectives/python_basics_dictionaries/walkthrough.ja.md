# Toledoの試練に関するメモ

このバリアの横に、日誌の書き込みがもう1つ見つかります。

<blockquote>
2016年3月15日
<hr/>
<p>
Pythonの都市では、リベラルアーツ教育が価値のあるものと考えられていました。学習方法を習得し、さまざまな学問分野に触れることにより、初期のPythonistaは多面的な視点を持つことができました。彼らが求めていたのは、明らかに、データを多面的に捉えることでした。
</p>
<p>
<b>ディクショナリ</b>は、プログラマーが数値、文字列、その他の基本的なデータタイプよりも複雑なデータを作成できるようにするデータタイプです。<b>キー/値のペア</b>を使用すると、<code>title</code>と<code>author</code>を記載したブログ投稿や、その他の複雑なアイデアなど、概念をモデル化できます。当然、<a href="https://docs.python.org/3/tutorial/classes.html">クラス</a>もこの目的に使用されますが、このトピックについては別の機会に取り上げます。辞書は、関連データのコンテナを作成するための簡単な方法です。
</p>
<p>
--TVP
</p>
</blockquote>
## ヒントとコツ

日誌に目を通すと、この試練に役に立つヒントがほかにも見つかります。

<details>
<summary>辞書を作成する方法を教えてください。</summary>
[ディクショナリ](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)は、Pythonの多くのツールの1つで、より複雑なデータを記述できます。次のコードでは、犬の特性を記述する辞書を作成しています。

```python
dog = {
    'name' : 'Koto',
    'age' : 4,
    'color' : 'white',
    'fluffy' : True }

print(f"My dog's name is {dog['name']}")
```

このコードを実行する場合は、新しいディクショナリを作成し、`dog`という名前の変数に割り当てます。ステートメントの出力では、辞書に格納されている__値__の1つに__キー__でアクセスします。`dog`ディクショナリのキー`name`の値は`Koto`です。

</details>
<details>
<summary>この試練を完了するには何をする必要がありますか?</summary>
次の場所にあるコードフォルダに、新しいファイル`dictionaries.py`を作成します。

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

このファイルでは、次のプロパティを指定したディクショナリが含まれる、`super_hero`という名前の__変数を宣言__します。

| キー| 値| 値のタイプ|
|----------|----------|----------|
| name| `Miles Morales`| string|
| hero_name| `Spider-Man`| string|
| power_level| `9999`| 整数|

`dictionaries.py`でコードが想定通りに動作するのを確認した後、[*HACK*]ボタンをクリックし、送信します。

</details>
