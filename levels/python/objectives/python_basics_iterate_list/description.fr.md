# Épreuve de l'itération

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/list_iteration.py</span></code>
</div>
Pour réussir l'__épreuve de l'itération__, vous devez écrire un script qui peut accepter __un nombre illimité d'arguments de ligne de commande__. Les arguments de votre script seront une liste de noms, dans l'ordre, pour une série de dirigeants de l'ordre de succession de la Ville de Python.

Pour tous les arguments transmis à votre script, affichez le nom du dirigeant, __précédé de son ordre__ dans la ligne de succession. Par exemple, si votre script a été exécuté comme suit&nbsp;:

```bash
python3 list_iteration.py Deak Windy Luke Biggs
```

Le résultat de votre programme doit être&nbsp;:

```bash
1. Deak
2. Windy
3. Luke
4. Biggs
```

Lorsque votre programme peut générer une liste correctement formatée de cette manière, cliquez sur le bouton *HACK*.