# Défi de la Vérité

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/booleans.py</span></code>
</div>
Créez un programme qui déclare plusieurs variables [booléennes](https://docs.python.org/3/library/stdtypes.html#truth-value-testing). Les variables doivent avoir les noms et les valeurs suivants&nbsp;:

* La variable `python_is_glorious` doit être définie sur `True`
* La variable `failure_is_option` doit être définie sur `False`
* La variable `proper_greeting` doit être INITIALEMENT définie sur `False`

La troisième variable `proper_greeting` doit être définie sur `True` si le premier argument de votre script correspond exactement à la chaîne de caractère&nbsp;: `For the glory of Python!`

Une fois que vous avez écrit un code qui se comporte de cette manière, cliquez sur le bouton *HACK* pour terminer le défi.