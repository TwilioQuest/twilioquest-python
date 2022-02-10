# Épreuve des nombres

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/numbers.py</span></code>
</div>
Pour accomplir l'__épreuve des nombres__, votre code doit __déclarer quatre variables__ qui sont le résultat des opérations mathématiques effectuées sur les deux nombres transmis à votre script en tant qu'arguments de ligne de commande. Utilisez le code suivant comme point de départ&nbsp;:

```python
import sys

# This code reads in arguments and converts those inputs to decimal numbers
first_number = float(sys.argv[1])
second_number = float(sys.argv[2])

# Your code goes here!
result_sum = first_number + second_number

print(f"{first_number} plus {second_number} equals {result_sum}")
```

Voici les variables que vous devez déclarer&nbsp;:

| Nom de la variable| Description|
|----------|----------|
| `result_sum`| Résultat de l'ajout de `first_number` et de `second_number`. Cette variable est déjà déclarée dans l'exemple de code ci-dessus.|
| `result_difference`| Résultat de la soustraction de `second_number` de `first_number`.|
| `result_product`| Le résultat de la multiplication de `first_number` par `second_number`.|
| `result_quotient`| Résultat de la division de `first_number` par `second_number`.|

Une fois que vous avez écrit un code qui définit ces quatre variables à partir de l'entrée de votre script, cliquez sur le bouton *HACK* pour accomplir l'épreuve.