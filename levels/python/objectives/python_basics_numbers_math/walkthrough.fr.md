# Notes d'épreuve de Toledo

Une autre entrée de journal de Toledo Van&nbsp;Possum déposée à point nommé est clairement visible à côté de cette barrière.

<blockquote>
1er mars 2016
<hr/>
<p>
Les résultats des premiers Pythoneux ont été obtenus grâce à leur capacité à programmer des calculs par ordinateur, afin de pouvoir se concentrer sur les grandes idées. Je dois suivre leurs traces et apprendre à utiliser la puissance des mathématiques dans Python.
</p>
<p>
Comme indiqué, je dois déclarer quatre variables pour accomplir cette épreuve. À l'aide des nombres transmis à mon script comme arguments de ligne de commande, je vais devoir utiliser les opérateurs arithmétiques intégrés de Python pour effectuer des additions, des soustractions, des multiplications et des divisions.
</p>
<p>
--TVP
</p>
</blockquote>
## Trucs et astuces

Consultez le reste de l'entrée du journal pour trouver quelques bribes d'informations intéressantes qui peuvent vous aider à accomplir cette épreuve.

<details>
<summary>Comment identifier les symboles à utiliser pour les différentes opérations mathématiques?</summary>
Vous trouverez une liste exhaustive [ici](https://docs.python.org/3/library/operator.html#mapping-operators-to-functions), mais ceux dont vous avez besoin pour cette épreuve sont présentés ci-dessous.

```python
print(f"2 plus 2 equals { 2 + 2 }");
print(f"8 minus 4 equals { 8 + 4 }");
print(f"12 divided by 4 equals { 12 / 4 }");
print(f"11 times by 3 equals { 11 * 3 }");
```

</details>
<details>
<summary>Que dois-je faire pour accomplir cette épreuve?</summary>
Créez un fichier appelé `numbers.py` dans votre dossier de code&nbsp;:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Dans ce fichier, vous devrez __déclarer quatre variables__. Reportez-vous au tableau de l'onglet «&nbsp;Objectif&nbsp;» pour savoir ce dont vous avez besoin pour les nommer. Les variables doivent stocker les résultats de quatre opérations mathématiques sur les nombres transmis à votre script sous forme d'__arguments de ligne de commande__. Ce code vous a été remis comme point de départ&nbsp;:

```python
import sys

# This code reads in arguments and converts those inputs to decimal numbers
first_number = float(sys.argv[1])
second_number = float(sys.argv[2])

# Your code goes here!
result_sum = first_number + second_number

print(f"{first_number} plus {second_number} equals {result_sum}")
```

Comme dans les exemples précédents, il utilise le module `sys` pour lire les entrées de votre script et attribue cette entrée aux variables nommées `first_number` et `second_number`. Pour exécuter votre script avec des arguments, vous devez utiliser cette commande dans le terminal&nbsp;:

```bash
python3 numbers.py 12 4
```

Lorsque vous écrivez votre code, vous pouvez l'exécuter de cette manière pour le tester et vous assurer qu'il fonctionne. Lorsque votre code est prêt, cliquez sur le bouton *HACK* pour accomplir l'épreuve. [Mathématiques&nbsp;!](https://www.youtube.com/watch?v=FfPFtbJAEm8)

</details>
