# Teste de trapaça

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/fizzbuzz.py</span></code>
</div>
Crie um programa que __aceite qualquer número de argumentos de linha de comando__. Os argumentos serão números inteiros. Seu script precisará examinar todos esses números e executar a seguinte lógica condicional:

* Se o número for __divisível por 3__, imprima o texto: `fizz`
* Se o número for __divisível por 5__, imprima o texto: `buzz`
* Se o número for __divisível por 3 e 5__, imprima o texto: `fizzbuzz`
* Se nenhuma das opções acima for verdadeira, __imprima o número__

Exemplo de execução de script:

```bash
python3 fizzbuzz.py 30 200 7 6
```

Exemplo de saída:

```bash
fizzbuzz
buzz
7
fizz
```

Quando tiver criado o código em `fizzbuzz.py` que cumpra este requisito, clique no botão *HACK* para concluir o teste.