# Notes d'épreuve de Toledo

Une autre entrée de journal s'affiche à côté de cette barrière.

<blockquote>
4 avril 2016
<hr/>
<p>
Après une série de conflits civils qui ont éclaté suite à la succession de dirigeants dans la Ville de Python, les premiers Pythoneux ont développé un système de succession strict parmi ses dirigeants clés. Les listes ordonnées restent très importantes dans la plupart des sociétés. Les citoyens potentiels ont dû accomplir cette épreuve pour s'assurer de comprendre le concept.
</p>
<p>
Les <b>listes</b> sont une liste ordonnée d'objets dans le code Python. Les listes peuvent contenir tout type de données: chaînes, nombres et mêmes des types de données plus complexes. Je vais devoir apprendre à créer et à utiliser des données dans une liste pour accomplir cette épreuve.
</p>
<p>
--TVP
</p>
</blockquote>
## Trucs et astuces

L'entrée du journal contenait quelques autres idées utiles.

<details>
<summary>Comment créer une liste?</summary>
Vous devez maintenant apprendre à créer et à utiliser les [listes](https://docs.python.org/3/tutorial/datastructures.html) dans votre code Python. Créez une liste de produits qui peuvent figurer sur une liste de courses.

```python
groceries = ['apples', 'coffee', 'pizza rolls', 'olives']

print(f"The first item on my grocery list is {groceries[0]}")
print(f"The last item on my grocery list is {groceries[3]}")
```

Lorsque vous exécutez ce code, vous créez une liste ordonnée de quatre chaînes. Chaque élément de la liste possède un __index__. Il s'agit d'un nombre qui représente sa place dans la liste. Lors de la programmation, le premier élément d'une liste se trouve au niveau de l'index `0`, puis les index augmentent. Dans une liste de quatre éléments, le dernier index est `3`.

Pour obtenir un élément dans une liste au niveau d'un index spécifique, utilisez la __notation en indice__- cette partie avec les crochets `[]` dans l'instruction print ci-dessus. `first_item = groceries[0]` stocke le premier élément de la liste, la chaîne `apples`, dans la variable `first_item`.

Les listes peuvent contenir n'importe quel type de données. Cet exemple mélange plusieurs types de données dans une seule liste.

```python
stuff = ['apples', {'favoriteMovieName': 'Star Wars'}, 42, True]

print(f"My favorite movie is {stuff[1]['favoriteMovieName']}")
```

</details>
<details>
<summary>Que dois-je faire pour accomplir cette épreuve?</summary>
Créez un fichier appelé `lists.py` dans votre dossier de code situé ici&nbsp;:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Dans ce fichier, vous devez __créer une liste__ appelée `order_of_succession` qui contient les noms de cinq dirigeants. Ils doivent apparaître dans le même ordre que dans la dernière liste Ordre de Succession Pythonique connue. Les noms sont les suivants&nbsp;: `Isabelle`, `Grace`, `Charlotte`, `LeBron` et `Steve`.

Reportez-vous au reste de cette procédure pour obtenir de l'aide sur la création d'une liste. Une fois que vous avez créé l'objet de la liste `order_of_succession`, cliquez sur le bouton *HACK* pour soumettre votre travail&nbsp;!

</details>
