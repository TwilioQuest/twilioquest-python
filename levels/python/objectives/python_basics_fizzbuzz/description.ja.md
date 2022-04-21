# 策略の試練

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/fizzbuzz.py</span></code>
</div>
__任意の数のコマンドライン引数を受け入れる__プログラムを作成します。引数は自然数/整数になります。スクリプトでは、これらの数値をすべて確認し、次の条件ロジックを実行します。

* 数値が__3で割り切れる__場合は、テキスト: `fizz`を出力します。
* 数値が__5で割り切れる__場合は、テキスト: `buzz`を出力します。
* 数値が__3と5の両方で割り切れる__場合は、テキスト: `fizzbuzz`を出力します。
* 上記のいずれも当てはまらない場合は、__その数値を出力__します。

スクリプトの実行例:

```bash
python3 fizzbuzz.py 30 200 7 6
```

出力例:

```bash
fizzbuzz
buzz
7
fizz
```

この要件を満たすコードを`fizzbuzz.py`に記述した後、[*HACK*]ボタンをクリックし、試練を完了します。