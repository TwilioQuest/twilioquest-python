# Teste de iteração

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
  Conclua este teste usando o código Python na pasta que você criou anteriormente <b>usando este nome de arquivo</b>:
  <br/>
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/list_iteration.py</span></code>
</div>
Para concluir o __Teste de iteração__, você deve criar um script que possa aceitar __qualquer número de argumentos de linha de comando__. Os argumentos para seu script serão uma lista de nomes, em ordem, de uma série de líderes na ordem de sucessão na cidade de Python.

Para todos os argumentos que são passados para o seu script, imprima o nome do líder, __prefixado pela ordem dele__ na linha de sucessão. Por exemplo, se seu script foi executado da seguinte forma:

```bash
python3 list_iteration.py Deak Windy Luke Biggs
```

A saída do seu programa deve ser:

```bash
1. Deak
2. Windy
3. Luke
4. Biggs
```

Quando o programa gerar uma lista bem formatada dessa maneira, clique no botão *HACK*.