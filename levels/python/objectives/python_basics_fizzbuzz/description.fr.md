# Défi de la Ruse

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/fizzbuzz.py</span></code>
</div>
Créez un programme qui __accepte n'importe quel nombre d'arguments de ligne de commande__. Les arguments seront des nombres entiers. Votre script devra examiner tous ces chiffres et exécuter la logique conditionnelle suivante&nbsp;:

* Si le nombre est __divisible par&nbsp;3__, affichez le texte&nbsp;: `fizz`
* Si le nombre est __divisible par&nbsp;5__, affichez le texte&nbsp;: `buzz`
* Si le nombre __est divisible par 3 et 5__, affichez le texte&nbsp;: `fizzbuzz`
* Si aucune des affirmations ci-dessus n'est vraie, affichez __le nombre__

Exemple d'exécution de script&nbsp;:

```bash
python3 fizzbuzz.py 30 200 7 6
```

Exemple de sortie&nbsp;:

```bash
fizzbuzz
buzz
7
fizz
```

Une fois que vous avez écrit un code qui répond à cette exigence dans `fizzbuzz.py`, cliquez sur le bouton *HACK* pour terminer le défi.