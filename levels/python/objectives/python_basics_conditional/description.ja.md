# 分岐パスの試練

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/branching.py</span></code>
</div>
__2つのコマンドライン引数を受け付けるプログラム__を作成します。これらの引数は、合計する必要がある2つの数値（自然数/整数）になります。これらの数値の合計に応じて、異なるメッセージがコードで出力されます。

* 数値の合計が__0以下__の場合は、次のテキストを出力します。<br/>`You have chosen the path of destitution.`
* 数値の合計が__1以上100以下__の場合は、次のテキストを出力します。<br/>`You have chosen the path of plenty.`
* 数値の合計が__100より大きい__場合は、次のテキストを出力します。<br/>`You have chosen the path of excess.`

スクリプトの実行例:

```bash
python3 branching.py 30 200
```

出力例:

```bash
You have chosen the path of excess.
```

この要件を満たすコードを記述した後、[*HACK*]ボタンをクリックし、試練を完了します。