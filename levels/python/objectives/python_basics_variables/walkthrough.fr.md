# Notes sur les défis de Toledo

Une fouille rapide de la zone entourant cette barrière révèle une autre des entrées du journal de Toledo Van Possum.

<blockquote>
21 février 2016
<hr/>
<p>
Les noms avaient une grande importance dans la Cité de Python, et ils étaient choisis avec soin pour décrire la personne ou l'objet auquel ils étaient attribués. Et il devait en être de même pour le code Python de leurs citoyens.
</p>
<p>
Pour terminer ce défi, je dois déclarer deux variables comme indiqué. En programmation, les « variables » sont utilisées comme des espaces réservés pour les données sur lesquelles mon code va opérer. Les variables reçoivent généralement des noms descriptifs, ce qui permet à quiconque lit le code d'avoir une idée du type de données qu'elles contiennent.
</p>
<p>
--TVP
</p>
</blockquote>
## Trucs et astuces

En lisant le reste de l'entrée du journal de Toledo, vous trouverez des conseils utiles.

<details>
<summary>J'ai oublié comment créer des fichiers de code et les exécuter…</summary>
Ne vous inquiétez pas&nbsp;! Vous pouvez revenir aux défis précédents en vous déplaçant vers les barrières des défis terminés et en appuyant sur la *BARRE D'ESPACE*. Vous pouvez revoir les techniques que vous avez apprises dans ces défis aussi souvent que nécessaire. Les premiers défis de cette zone devraient vous permettre de vous familiariser avec l'écriture et l'exécution du code Python.

</details>
<details>
<summary>Qu'est-ce qu'une variable et comment en créer une?</summary>
Une [variable](https://www.w3schools.com/python/python_variables.asp) est un conteneur pour les données sur lesquelles votre programme va opérer. Les variables doivent avoir des noms continus sans espace. Dans Python, si vous pensez qu'un nom de variable doit être composé de plusieurs mots, vous devez utiliser le caractère `_` dans le nom au lieu d'un espace. Donc, si vous vouliez nommer une variable «&nbsp;my awesome thing&nbsp;», il faudrait le nommer `my_awesome_thing` dans Python.

Vous créez les noms des variables&nbsp;: il peut s'agir de (presque) tout ce que vous voulez.

Vous __attribuez__ une valeur à une variable dans le code en utilisant `=` (signe égal). Le code ci-dessous attribue le numéro `777` à une variable appelée `lucky_number`, et attribue la chaîne de caractères `"Star Wars"` à une variable appelée `favorite_movie`.

```python
lucky_number = 777
favorite_movie = "Star Wars"

print(f"My luck number is {lucky_number}")
print(f"My favorite movie is {favorite_movie}")
```

</details>
<details>
<summary>Que dois-je faire pour terminer ce défi?</summary>
Créez un fichier appelé `variables.py` dans votre dossier de code&nbsp;:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Dans ce fichier, créez une variable `favorite_robot` définie sur la chaîne de caractères `"Cedric"`. Créez une autre variable appelée `meaning_of_life` qui est définie sur le nombre `42`. Si vous ne savez pas comment déclarer des variables, lisez l'astuce au-dessus de celle-ci.

Lorsque votre code est prêt, cliquez sur le bouton *HACK* pour accomplir l'épreuve.

</details>
