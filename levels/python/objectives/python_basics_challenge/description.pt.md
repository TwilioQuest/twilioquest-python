# Um desafio inesperado

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/citizen.py</span></code>
</div>
Crie uma [classe Python](https://docs.python.org/3/tutorial/classes.html) para descrever um cidadão da cidade de Python. A classe deve ser nomeada `Citizen` e ter os seguintes dados e funcionalidades.

* Um __docstring__ que descreve a classe
* Um __método init__ que usa os argumentos (strings) `first_name` e `last_name` e os atribui como __variáveis de instância__
* Um __método de instância__ chamado `full_name` que retorna uma string que combina as variáveis de instância de nome e sobrenome, com um único espaço entre elas
* Uma __variável de classe__ chamada `greeting` que é uma string definida como `For the glory of Python!`

Depois de criar uma classe que atenda a esses critérios no arquivo Python `citizen.py`, clique no botão *HACK*.