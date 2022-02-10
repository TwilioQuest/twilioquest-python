# 数値の試練

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/numbers.py</span></code>
</div>
__数値の試練__を完了するため、コードで__4つの変数__を宣言します。これらの変数は、コマンドライン引数としてスクリプトに渡される2つの数値に対して実行される、数学演算の結果です。次のコードを開始点として使用します。

```python
import sys

# This code reads in arguments and converts those inputs to decimal numbers
first_number = float(sys.argv[1])
second_number = float(sys.argv[2])

# Your code goes here!
result_sum = first_number + second_number

print(f"{first_number} plus {second_number} equals {result_sum}")
```

宣言する必要がある変数は次のとおりです。

| 変数名| 説明|
|----------|----------|
| `result_sum`| `first_number`と`second_number`を加算した結果。この変数は、上記のコード例ですでに宣言されています。|
| `result_difference`| `first_number`から`second_number`を減算した結果。|
| `result_product`| `first_number`と`second_number`を乗算した結果。|
| `result_quotient`| `first_number`を`second_number`で除算した結果。|

スクリプトの入力から、これら4つの変数を定義するコードを記述し、[*HACK*]ボタンをクリックして試練を完了します。