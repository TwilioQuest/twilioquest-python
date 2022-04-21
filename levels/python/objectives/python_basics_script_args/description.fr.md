# Défi de l'Entrée Sollicitée 

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/collect_input.py</span></code>
</div>
Pour continuer, vous devez terminer le __Défi de l'Entrée Sollicitée__. Créez un script Python qui renvoie __les trois premiers arguments__ transmis à votre script sur la ligne de commande. Par exemple, si vous devez exécuter votre script comme suit&nbsp;:

```bash
python3 collect_input.py apples oranges pears
```

Votre script doit afficher un résultat semblable à celui-ci&nbsp;:

```bash
apples
oranges
pears
```

Écrivez votre code dans un fichier appelé `collect_input.py` dans le répertoire de code que vous avez créé précédemment (`<%= env.TQ_PYTHON_CODE_PATH.value %>`). __Lisez la section «&nbsp;Aide&nbsp;»__ pour savoir comment écrire un code à cet effet.

Une fois que vous avez écrit un code qui répond à ces exigences, cliquez sur le bouton *HACK* pour terminer le défi&nbsp;!