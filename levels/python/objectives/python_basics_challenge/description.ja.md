# 予期しない課題

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/citizen.py</span></code>
</div>
Python市の市民を記述する[Pythonクラス](https://docs.python.org/3/tutorial/classes.html)を作成します。このクラスに`Citizen`という名前を付け、次のデータと機能が含まれるようにしてください。

* クラスを記述する__docstring__
* `first_name`引数と`last_name`引数（文字列）を取り、それらを__インスタンス変数__として割り当てる__initメソッド__
* 姓と名のインスタンス変数を、間に1文字のスペースを挟んで組み合わせた文字列を返す、`full_name`という名前の__インスタンスメソッド__
* `For the glory of Python!`に設定された文字列で、`greeting`という名前の__クラス変数__

`citizen.py` Pythonファイルで、これらの条件を満たすクラスを作成し、[*HACK*]ボタンをクリックします。