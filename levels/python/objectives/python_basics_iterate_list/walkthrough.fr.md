# Notes d'épreuve de Toledo

Une autre entrée de journal s'affiche à côté de cette barrière.

<blockquote>
1er juin 2016
<hr/>
<p>
La productivité était la marque de fabrique des premiers Pythoneux, célèbres pour terminer leurs listes de tâches avec une efficacité impitoyable. Dans ce défi, mon code doit également démontrer sa capacité à parcourir les listes.
</p>
<p>
Lors de cette épreuve, je vais utiliser une <a href="https://realpython.com/python-for-loop">boucle for/in</a> pour exécuter du code pour chaque élément de la liste des arguments de ligne de commande transmis à mon script. 
</p>
<p>
--TVP
</p>
</blockquote>
## Trucs et astuces

Quelques passages de l'entrée du journal sont particulièrement intéressants pour cette épreuve.

<details>
<summary>Comment exécuter le code pour chaque élément d'une liste?</summary>
L'exécution du code pour chaque élément d'une liste (ou l'__itération__ d'une liste) est l'une des tâches les plus courantes de la programmation. Pour accomplir cette épreuve, utilisez une [boucle for/in](https://realpython.com/python-for-loop/) pour exécuter un bloc de code pour chaque élément d'une liste. Examinons un exemple à l'aide de notre liste d'alimentation précédente.

```python
groceries = ['apples', 'coffee', 'pizza rolls', 'olives']

print("These are the items on my grocery list:")
for item in groceries:
    string_to_print = f"- {item}"
    print(string_to_print)
```

Lorsque vous exécutez ce code, vous créez une liste ordonnée de quatre chaînes, comme précédemment. Cette fois-ci, vous utilisez une nouvelle instruction&nbsp;: `for item in groceries:`

Votre code indique quelques éléments dans cette instruction unique&nbsp;:

* Je souhaite exécuter le code en commençant par la ligne suivante pour chaque élément de la liste stockée dans la variable nommée `groceries`
* Chaque fois que ce code s'exécute, créez une variable appelée `item` qui fait référence à l'élément suivant de la liste

Le code qui s'exécute pendant la boucle __est en retrait d'une tabulation (environ quatre espaces)__ par rapport au début de la boucle for. [Cette indentation](https://docs.python.org/3/reference/lexical_analysis.html#indentation) indique à Python le code à exécuter pendant la boucle. Sans l'indentation, le code serait exécuté dans l'ordre et la logique ne fonctionnerait pas.

Une amélioration peut être apportée à cette logique qui utilise l'[énumération](https://docs.python.org/3/library/functions.html#enumerate) de fonctions intégrées. Vous obtenez ainsi l'__index__ de chaque élément au fur et à mesure que parcourez la liste&nbsp;:

```python
groceries = ['apples', 'coffee', 'pizza rolls', 'olives']

print("These are the items on my grocery list:")
for index, item in enumerate(groceries, start=1):
    string_to_print = f"{index}. {item}"
    print(string_to_print)
```

La technique ci-dessus peut être utile lors de cette épreuve.

</details>
<details>
<summary>Que dois-je faire pour accomplir cette épreuve?</summary>
Créez un fichier appelé `list_iteration.py` dans votre dossier de code situé ici&nbsp;:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Utilisez le code suivant comme point de départ&nbsp;: il crée une nouvelle liste appelée `order_of_succession`, qui contient tous les arguments transmis à votre script.

```python
import sys

# Set up a list for our code to work with that omits the first CLI argument, 
# which is the name of our script (list_iteration.py)
order_of_succession = sys.argv
order_of_succession.pop(0)

# Now, order_of_succession is ready for us to work with
```

Votre code doit imprimer le nom de chaque personne de cette liste, précédé de son ordre dans l'ordre de succession Pythonique. Reportez-vous à l'onglet «&nbsp;Objectif&nbsp;» pour découvrir un exemple d'entrée et de sortie.

Le reste de cette présentation contient de l'aide sur l'exécution du code pour chaque élément d'une liste. Une fois que vous avez écrit un code qui peut traiter tous les arguments de ligne de commande dans votre script, cliquez sur le bouton *HACK* pour vérifier votre travail&nbsp;!

</details>
