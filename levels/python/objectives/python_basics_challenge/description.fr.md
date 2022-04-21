# Un défi inattendu

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
  Pour accomplir cette épreuve, utilisez le code Python dans le dossier créé précédemment <b>à l'aide de ce nom de fichier</b>:
  <br/>
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/citizen.py</span></code>
</div>
Créez une [classe Python](https://docs.python.org/3/tutorial/classes.html) pour décrire un citoyen de la Cité de Python. La classe doit être nommée `Citizen` et doit posséder les données et fonctionnalités suivantes.

* Une __docstring__ qui décrit la classe
* Une __méthode init__ qui prend les arguments `first_name` et `last_name` (chaînes de caractères) et les attribue en tant que __variables d'instance__
* Une __méthode d'instance__ appelée `full_name` qui renvoie une chaîne de caractères qui combine les variables d'instance de nom et de prénom, avec un espace unique entre elles
* Une __variable de classe__ appelée `greeting` qui est une chaîne de caractères définie sur `For the glory of Python!`

Lorsque vous avez créé une classe qui répond à ces critères dans le fichier Python `citizen.py`, cliquez sur le bouton *HACK*.