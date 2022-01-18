# Teste de entrada solicitada

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/collect_input.py</span></code>
</div>
Para avançar ainda mais, você deve concluir o __Teste de entrada solicitada__. Crie um script Python que __imprima os três primeiros argumentos__ passados para o script na linha de comando. Por exemplo, se você executasse seu script assim:

```bash
python3 collect_input.py apples oranges pears
```

Seu script deveria imprimir uma saída semelhante a esta:

```bash
apples
oranges
pears
```

Crie seu código em um arquivo chamado `collect_input.py` no diretório de códigos que você criou anteriormente (`<%= env.TQ_PYTHON_CODE_PATH.value %>`). __Read the "Help" section__ (Leia a seção "Ajuda") para saber como criar um código que faça isso.

Depois de criar um código que atenda a esses requisitos, clique no botão *HACK* para concluir o teste!