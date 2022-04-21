# 真実の試練

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/booleans.py</span></code>
</div>
複数の[ブール](https://docs.python.org/3/library/stdtypes.html#truth-value-testing)変数を宣言するプログラムを作成します。変数には、次の名前と値が必要です。

* 変数`python_is_glorious`を`True`に設定します。
* 変数`failure_is_option`を`False`に設定します。
* 変数`proper_greeting`は、初期設定を`False`にします。

スクリプトの第1引数が文字列: `For the glory of Python!`と一致する場合は、3番目の変数`proper_greeting`を`True`に設定します。

このように動作するコードを記述し、[*HACK*]ボタンをクリックし、試練を完了します。