# 説得力のある引数の試練

<style>
.py-script-info {
  font-size: 16px;
  text-align: center;
  background-color: #FFFFE0;
  border: 2px solid #F0E68C;
  padding: 5px;
  line-height: 1.5em;
  margin: 5px 0;
  font-style: italic;
}

.py-script-info span {
  font-style: normal;
  color: #000;
}
</style>
<div class="py-script-info">
  試練を完了するため、先ほど作成したフォルダに<b>こちらのファイル名</b>を使用したファイルを作成し、Pythonコードを記述してください。
  <br/>
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/functions.py</span></code>
</div>
前の作業に基づいて、`hail_friend`という名前の[関数](https://docs.python.org/3.7/tutorial/controlflow.html#defining-functions)を定義します。今回は、挨拶する友人の名前を表す__引数__（入力）を関数で1つ指定します。関数が次のように呼び出される場合:

```python
hail_friend('Jonathan Joestar')
```

テキスト`Hail, Jonathan Joestar!`が出力されます。このように動作するように関数を変更し、[*HACK*]ボタンをクリックします。