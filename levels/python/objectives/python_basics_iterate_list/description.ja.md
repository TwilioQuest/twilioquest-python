# 反復処理の試練

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/list_iteration.py</span></code>
</div>
__反復処理の試練__を完了するため、__コマンドライン引数をいくつでも__受け入れるスクリプトを記述します。スクリプトの引数は、Python市の継承順位に含まれる指導者たちについて、名前を順番に記載したリストです。

スクリプトに渡されるすべての引数について、指導者名の先頭に、継承順序における__順番を追加__して出力します。例えば、スクリプトが次のように実行されたとします。

```bash
python3 list_iteration.py Deak Windy Luke Biggs
```

プログラムの出力は次のようになります。

```bash
1. Deak
2. Windy
3. Luke
4. Biggs
```

このように、適切に書式設定されたリストをプログラムで出力できる場合は、[*HACK*]ボタンをクリックします。