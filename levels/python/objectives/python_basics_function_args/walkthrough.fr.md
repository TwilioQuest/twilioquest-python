# Notes d'épreuve de Toledo

Une autre entrée de journal s'affiche à côté de cette barrière.

<blockquote>
10 avril 2016
<hr/>
<p>
Le Temple Pythonique a été un foyer de débats politiques et le centre de la vie publique dans la Ville de Python. Un argument bien élaboré peut faire changer le cours de l'histoire. Les citoyens potentiels de la Ville de Python devaient apprendre à faire et à accepter des arguments convaincants.
</p>
<p>
Comme j'ai pu le constater, les fonctions me permettent de réutiliser des fragments de code. Mais souvent, je dois modifier un peu le comportement de ce code pour travailler avec différentes données. C'est pourquoi les fonctions doivent pouvoir accepter des <b>arguments</b>, c'est-à-dire des données d'entrée différentes à traiter. Je peux utiliser le même code de fonction que celui créé pour la dernière épreuve comme point de départ, mais je dois le modifier pour accepter un argument.
</p>
<p>
--TVP
</p>
</blockquote>
## Trucs et astuces

L'entrée du journal contient d'autres bribes d'informations qui peuvent vous être utiles.

<details>
<summary>Comment faire pour qu'une fonction accepte les arguments?</summary>
Les __arguments__ ne sont pas un concept entièrement nouveau pour vous. Vous avez déjà travaillé avec des __arguments__ qui ont été transmis à vos scripts Python à partir de la ligne de commande. Les [arguments transmis à des fonctions](https://docs.python.org/3.7/tutorial/controlflow.html#defining-functions) fonctionnent de manière très similaire. Les arguments sont des éléments de données que vos fonctions utilisent pour alimenter le code qu'elles contiennent.

Voici un exemple de définition d'une fonction avec deux arguments.

```python
def favorite_foods(firstFavorite, secondFavorite):
    print(f"My favorite foods are {firstFavorite} and {secondFavorite}.")

favorite_foods('tacos', 'pizza')
```

Lorsque vous exécutez ce code, vous définissez une fonction nommée `favorite_foods`. Spécifiez que votre fonction prend __deux arguments__ en définissant deux variables d'espace réservé entre les parenthèses ouvertes et fermées. Si votre fonction prend plusieurs arguments, les noms des variables de ces arguments sont séparés par une virgule `,`.

La fonction elle-même ne comporte qu'une seule ligne de code&nbsp;: elle imprime une [chaîne formatée](https://realpython.com/python-f-strings/) qui s'insère dans les variables d'argument `firstFavorite` et `secondFavorite`.

Sur la dernière ligne de code de l'exemple, appelez la fonction avec deux arguments, les chaînes `tacos` et `pizza`. Lors de la transmission des arguments, séparez-les également par une virgule `,`.

</details>
<details>
<summary>Que dois-je faire pour accomplir cette épreuve?</summary>
Ouvrez le fichier créé pour l'épreuve précédente (`functions.py`) ou créez-le à nouveau (si vous l'avez supprimé) dans le dossier de code situé ici&nbsp;:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Dans ce fichier, vous devrez __déclarer ou modifier une fonction__ nommée `hail_friend` qui prend un argument, le nom de la personne à accueillir. Cette fois-ci, au lieu d'imprimer le même message chaque fois que la fonction est appelée, la fonction doit imprimer un message différent à chaque appel, à l'aide de l'entrée de la fonction.

Par exemple, si votre fonction est appelée comme suit&nbsp;:

```python
hail_friend('Jonathan Joestar')
```

Le texte `Hail, Jonathan Joestar!` doit être imprimé sur la console. Consultez le reste de ce tutoriel pour découvrir comment déclarer une fonction qui prend des arguments. Une fois que votre code dans `functions.py` fonctionne comme prévu, cliquez sur le bouton *HACK* pour soumettre votre travail&nbsp;!

</details>
