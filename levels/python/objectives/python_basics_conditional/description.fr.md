# Défis des chemins ramifiés

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/branching.py</span></code>
</div>
Créez un programme qui __accepte deux arguments de ligne de commande__&nbsp;: deux nombres (nombres entiers) que vous devez additionner. En fonction de la somme de ces chiffres, votre code devrait afficher différents messages.

* Si la somme des nombres est __inférieure ou égale à zéro__, affichez le texte&nbsp;:<br/> `You have chosen the path of destitution.`
* Si la somme des nombres est __comprise entre 1 et 100 (y compris 100)__, affichez le texte&nbsp;:<br/> `You have chosen the path of plenty.`
* Si la somme des nombres __est supérieure à 100__, affichez le texte&nbsp;:<br/> `You have chosen the path of excess.`

Exemple d'exécution de script&nbsp;:

```bash
python3 branching.py 30 200
```

Exemple de sortie&nbsp;:

```bash
You have chosen the path of excess.
```

Une fois que vous avez écrit le code qui remplit cette exigence, cliquez sur le bouton *HACK* pour terminer le défi.