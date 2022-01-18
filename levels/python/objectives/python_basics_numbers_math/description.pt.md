# Teste de números

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
  Conclua este teste usando o código Python na pasta que você criou anteriormente <b>using this file name</b> (usando este nome de arquivo):
  <br/>
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/numbers.py</span></code>
</div>
Para concluir o __Teste de números__, seu código deve __declarar quatro variáveis__ que são o resultado das operações matemáticas realizadas nos dois números passados para o script como argumentos de linha de comando. Use o seguinte código como ponto de partida:

```python
import sys

# This code reads in arguments and converts those inputs to decimal numbers
first_number = float(sys.argv[1])
second_number = float(sys.argv[2])

# Your code goes here!
result_sum = first_number + second_number

print(f"{first_number} plus {second_number} equals {result_sum}")
```

Aqui estão as variáveis que você precisa declarar:

| Nome da variável| Descrição|
|----------|----------|
| `result_sum`| O resultado da adição de `first_number` e `second_number`. Esta variável já está declarada no código de exemplo acima.|
| `result_difference`| O resultado da subtração do `second_number` do `first_number`.|
| `result_product`| O resultado da multiplicação do `first_number` e do `second_number`.|
| `result_quotient`| O resultado da divisão do `first_number` por `second_number`.|

Depois de criar um código que defina essas quatro variáveis de entrada para o script, clique no botão *HACK* para concluir o teste.