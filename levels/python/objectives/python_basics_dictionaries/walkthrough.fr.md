# Notes sur les défis de Toledo

Une autre entrée de journal s'affiche à côté de cette barrière.

<blockquote>
15 mars 2016
<hr/>
<p>
Dans la Cité de Python, l'éducation aux arts libéraux tenait une place primordiale. Apprendre comment apprendre et s'exposer à une grande variété de disciplines académiques ont fait des Pythonistes un peuple aux multiples facettes. De toute évidence, ils voulaient parfois que leurs données possèdent elles aussi plusieurs facettes.
</p>
<p>
Les <b>dictionnaires</b> sont un type de données qui permet aux programmeurs de créer des données plus complexes que des nombres, des chaînes de caractères et d'autres types de données de base. À l'aide de paires <b>clé/valeur</b>, il est possible de modéliser des concepts tels qu'un billet de blog avec un <code>title</code> et un <code>author</code>, et d'autres idées plus complexes. Bien sûr, les <a href="https://docs.python.org/3/tutorial/classes.html">classes</a> sont également utilisées à cet effet, mais nous aborderons ce sujet une autre fois. Les dictionnaires sont un moyen facile de créer un conteneur pour les données associées.
</p>
<p>
--TVP
</p>
</blockquote>
## Trucs et astuces

Si vous parcourez l'entrée du journal, vous trouverez d'autres conseils utiles pour ce défi.

<details>
<summary>Comment créer un dictionnaire?</summary>
Les [dictionnaires](https://docs.python.org/3/tutorial/datastructures.html#dictionaries) sont l'un des nombreux outils de Python qui nous permettent de décrire des données plus complexes. Le code ci-dessous crée un dictionnaire qui décrit les propriétés d'un chien&nbsp;:

```python
dog = {
    'name' : 'Koto',
    'age' : 4,
    'color' : 'white',
    'fluffy' : True }

print(f"My dog's name is {dog['name']}")
```

Lorsque vous exécutez ce code, vous créez un nouveau dictionnaire et l'attribuez à une variable appelée `dog`. Dans la déclaration de la fonction print, vous accédez à l'une des __valeurs__ enregistrées dans le dictionnaire à l'aide de sa __clé__. La clé `name` du dictionnaire `dog` a la valeur `Koto`.

</details>
<details>
<summary>Que dois-je faire pour terminer ce défi?</summary>
Créez un fichier appelé `dictionaries.py` dans votre dossier de code situé ici&nbsp;:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Dans ce fichier, vous devrez __déclarer une variable__ nommée `super_hero` qui contient un dictionnaire avec les propriétés suivantes&nbsp;:

| Clé| Valeur| Type de valeur|
|----------|----------|----------|
| name| `Miles Morales`| string|
| hero_name| `Spider-Man`| string|
| power_level| `9999`| integer|

Une fois que votre code dans `dictionaries.py` fonctionne comme prévu, cliquez sur le bouton *HACK* pour soumettre votre travail&nbsp;!

</details>
