# 要請された入力の試練

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
  <b>こちらのファイル名</b>を使用して先ほど作成したフォルダにあるPythonコードを使用し、この試練を完了してください。
  <br/>
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/collect_input.py</span></code>
</div>
さらに進めるには、__要請された入力の試練__を完了させます。コマンドラインでスクリプトに渡される__引数の最初の3つを出力する__Pythonスクリプトを作成します。例えば、次のようなスクリプトを実行する場合:

```bash
python3 collect_input.py apples oranges pears
```

次のように出力されます。

```bash
apples
oranges
pears
```

前に作成したコードディレクトリ(`<%= env.TQ_PYTHON_CODE_PATH.value %>`)にある、`collect_input.py`という名前のファイルにコードを記述します。この処理を実行するコードを記述する方法について学習するには、__[Help]セクションを参照してください__。

これらの要件を満たすコードを作成し、[*HACK*]ボタンをクリックし、試練を完了してください。