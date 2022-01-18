# Teste de caminhos ramificados

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/branching.py</span></code>
</div>
Crie um programa que __aceita dois argumentos de linha de comando__, dois números (números inteiros) que você deve somar. Dependendo da soma desses números, seu código deve imprimir mensagens diferentes.

* Se a soma dos números for __menor ou igual a zero__, imprima o texto:<br/> `You have chosen the path of destitution.`
* Se a soma dos números for de __1 a 100 (incluindo 100)__, imprima o texto:<br/> `You have chosen the path of plenty.`
* Se a soma dos números for __maior que 100__, imprima o texto:<br/> `You have chosen the path of excess.`

Exemplo de execução de script:

```bash
python3 branching.py 30 200
```

Exemplo de saída:

```bash
You have chosen the path of excess.
```

Quando tiver criado um código que cumpra este requisito, clique no botão *HACK* para concluir o teste.