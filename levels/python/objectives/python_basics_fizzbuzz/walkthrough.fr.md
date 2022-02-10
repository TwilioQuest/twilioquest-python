# Notes d'épreuve de Toledo

Une entrée de journal particulièrement abimée de Toledo Van Possum s'affiche à côté de cette barrière. Il semble que c'était l'une des dernières barrières qu'il a rencontrées dans la Chambre de Rituel d'Initiation.

<blockquote>
3 octobre 2016
<hr/>
<p>
Nous sommes le 3 octobre.
</p>
<p>
Enfin, nous y sommes, la tristement célèbre <b>Épreuve de la Tromperie</b>. Dans l'ancienne Ville de Python, certains pensaient que cette épreuve était un test des compétences de base en programmation. D'autres ont déclaré que c'était un stratagème déloyal et se sont appuyés sur le fait que le programmeur avait connaissance d'un opérateur mathématique rarement utilisé (l'<a href="https://stackoverflow.com/questions/4432208/what-is-the-result-of-in-python">opérateur modulo</a>).
</p>
<p>
Que cette épreuve soit ou non une évaluation équitable des compétences, implémenter le défi «FizzBuzz» est un exercice utile pour combiner l'itération de liste et la logique conditionnelle. Je collecterai ici mes techniques pour les futurs explorateurs, pour que cet exercice serve d'apprentissage plutôt que de test.
</p>
<p>
--TVP
</p>
</blockquote>
## Trucs et astuces

Parcourez l'entrée du journal pour trouver des conseils pouvant vous aider à terminer cette épreuve.

<details>
<summary>De manière générale, que doit faire mon code?</summary>
Il est souvent utile de trouver une solution à un problème à l'aide du __pseudo-code__. Le pseudo-code est un code qui n'est pas censé être réellement exécuté, mais qui vous aide à définir le fonctionnement de votre solution. Une fois que vous avez une idée de la façon de procéder, mettez en œuvre votre pseudo-code dans le code réel.

Voici un pseudo-code qui décrit ce que vous devez faire pour relever le défi FizzBuzz.

<pre>
inputs = list of all arguments to my script

for each input in the list, do the following:
    convert the input to a number
    set my print string equal to a blank/empty string
    if the number is divisible by 3, append "fizz" to the output string
    if the number is divisible by 5, append "buzz" to the output string
    if by now the output string is still blank, set it to the input number
    print the output string
</pre>
Ce pseudo-code décrit une technique permettant de relever le défi. Il en existe d'autres, mais cette approche devrait fonctionner. Maintenant, vous devez trouver comment y parvenir avec un vrai code Python.

</details>
<details>
<summary>Comment obtenir une liste de tous les arguments transmis à mon script?</summary>
Dans un précédent défi, vous avez appris à utiliser le module `sys` pour obtenir la liste de tous les arguments de votre script, puis à supprimer le premier élément (car il contient le nom du programme, dont vous n'avez pas besoin).

```python
import sys

# Set up a list for our code to work with that omits the first CLI argument, 
# which is the name of our script (fizzbuzz.py)
inputs = sys.argv
inputs.pop(0)

# Now, inputs is ready for us to work with
```

</details>
<details>
<summary>Comment convertir une chaîne en entier?</summary>
Lorsque des entrées sont transmises à votre programme, elles sont initialement disponibles sous forme de chaînes de texte. Pour effectuer des calculs avec les entrées, vous devez convertir l'entrée en nombre. Cette technique est appelée [cast/contrainte/conversion de type](https://en.wikipedia.org/wiki/Type_conversion), le deuxième mot étant principalement utilisé de manière interchangeable.

Python dispose de quelques fonctions de cast de type [intégrées](https://www.w3schools.com/python/python_casting.asp). Pour ce défi, vous devrez convertir une chaîne en nombre entier à l'aide de la fonction `int`.

```python
number_string = "100"
number_converted = int(number_string)
print(f"100 minus 60 is {number_converted - 60}")
```

</details>
<details>
<summary>Comment savoir si un nombre est divisible par un autre?</summary>
Si vous avez un nombre&nbsp;A et un nombre&nbsp;B, le nombre&nbsp;A est divisible par le nombre&nbsp;B si après avoir divisé&nbsp;A par&nbsp;B, il n'y a pas de reste.

Si vous divisez `6` par `3`, le résultat est `2`, sans reste. `6` EST divisible par `3`.

Si vous divisez `7` par `3`, le résultat est `2` avec le reste de `1`. `7` N'EST PAS divisible par `3`.

Comment trouver une solution dans le code Python&nbsp;? Avec un opérateur rarement utilisé appelé `modulus` ou `modulo`&nbsp;: le caractère `%` (pourcentage) dans votre code. Cet opérateur vous permet d'enregistrer le reste après avoir divisé deux nombres dans une variable.

```python
rem1 = 6 % 3
rem2 = 7 % 3

print(f"The remainder after dividing 6 by 3 is {rem1}.")
print(f"The remainder after dividing 7 by 3 is {rem2}.")
```

Dans le code ci-dessus, `rem1` serait `0`, et `rem2` serait `1`.

En résumé, l'opérateur `%` vous permet de déterminer si un nombre est divisible par un autre. Si le résultat est égal à zéro, le premier nombre est divisible par le second.

</details>
<details>
<summary>Comment faire une boucle dans une liste et exécuter une logique conditionnelle?</summary>
Si vous avez atteint ce point, vous avez déjà écrit du code qui permet d'y parvenir. Reportez-vous au code que vous avez déjà écrit dans votre dossier de code&nbsp;:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Les fichiers `list_iteration.py`, `booleans.py` et `branching.py` doivent contenir quelques exemples utiles. Vous devrez __combiner ces techniques__ pour accomplir cette épreuve.

</details>
<details>
<summary>Que dois-je faire pour accomplir cette épreuve?</summary>
Créez un fichier appelé `fizzbuzz.py` dans votre dossier de code situé ici&nbsp;:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Dans ce fichier, vous devrez traiter les arguments de ligne de commande pour votre script et imprimer la sortie appropriée pour chaque entrée. Exemple d'exécution de script&nbsp;:

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

Une fois de plus, les règles relatives aux instructions print sont les suivantes&nbsp;:

* Si le nombre est __divisible par&nbsp;3__, imprimez le texte&nbsp;: `fizz`
* Si le nombre est __divisible par&nbsp;5__, imprimez le texte&nbsp;: `buzz`
* Si le nombre est __divisible par&nbsp;3 et&nbsp;5__, imprimez le texte&nbsp;: `fizzbuzz`
* Si aucune des affirmations ci-dessus n'est vraie, __imprimez le nombre__

Vous pouvez utiliser le code ci-dessous comme point de départ. Il préparera une liste contenant tous les arguments de ligne de commande transmis à votre script.

```python
import sys

# Set up a list for our code to work with that omits the first CLI argument, 
# which is the name of our script (fizzbuzz.py)
inputs = sys.argv
inputs.pop(0)

# Process the "inputs" list as directed in your code
```

Une fois que votre code dans `fizzbuzz.py` peut traiter les arguments de ligne de commande de façon à satisfaire ces exigences, cliquez sur le bouton *HACK* pour accomplir l'épreuve. Vous pouvez y arriver&nbsp;!

</details>
