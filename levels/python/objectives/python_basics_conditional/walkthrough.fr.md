# Notes sur les défis de Toledo

Une fouille rapide de la zone entourant cette barrière révèle une autre des entrées du journal de Toledo Van Possum.

<blockquote>
21 août 2016
<hr/>
<p>
Nos recherches se poursuivent dans la Salle du Rituel d'Initiation, mais je commence à douter qu'un indice ultime existe véritablement. Heureusement, nous sommes enfin tombés sur un autre défi: le Défi des chemins ramifiés. Avec ce que j'ai appris sur les Booléens et la logique de comparaison, je dois maintenant comprendre comment ramifier mon code dans plusieurs directions pour prendre en charge de nombreux scénarios différents.
</p>
<p>
Si un jour je sors de cette salle, je compte bien demander au programme TwilioQuest de doubler mes récompenses habituelles.
</p>
<p>
--TVP
</p>
</blockquote>
## Conseils et astuces

Au fil de l'entrée du journal, vous trouvez quelques passages utiles.

<details>
<summary>Comment écrire un code qui se ramifie dans différentes directions?</summary>
Nous avons déjà pu voir l'instruction `if`, elle nous permet d'exécuter un bloc de code lorsqu'une condition donnée est vraie. Pour prendre en charge plusieurs conditions, nous devons également apprendre à maîtriser les instructions `elif` et `else`.

```python
dinner_name = "kale"

if dinner_name == "tacos":
    print("Tacos for dinner - right on!")
elif dinner_name == "pizza":
    print("Pizza - can't go wrong there!")
else:
    print("Okay - better than being hungry amirite?")
```

Vous pouvez utiliser la [logique de comparaison](https://docs.python.org/3/library/stdtypes.html#comparisons) pour déterminer si un bloc de code doit être exécuté ou non. Les instructions conditionnelles telles que celle-ci ne peuvent avoir qu'un seul bloc `if` et `else`, mais votre code peut inclure autant de blocs `elif` que nécessaire.

Un bloc `elif` fonctionne comme une instruction IF. Ces comparaisons sont toutes exécutées dans l'ordre et dès que l'une d'entre elles est évaluée sur `True`, le reste est ignoré. L'ordre est donc primordial&nbsp;!

Une instruction `else` décide d'un bloc de code qui sera exécuté si aucune des autres conditions n'est vraie.

</details>
<details>
<summary>Comment convertir les entrées de mon script (chaînes de caractères) en nombres?</summary>
Pour relever ce défi, vous devrez comparer les valeurs des nombres transmis à votre script en tant qu'arguments. Cependant, lorsque vous les lisez initialement à partir de `sys.argv`, ces valeurs sont des __chaînes de caractères__ et non des __chiffres__. Pour effectuer des comparaisons numériques, nous devons convertir les arguments en __nombres entiers (integers)__ ou en __nombres décimaux (floats)__. Le code ci-dessous indique comment convertir des entrées en nombres entiers.

```python
first_num = int(sys.argv[1])
second_num = int(sys.argv[2])
sum_to_use = first_num + second_num
```

</details>
<details>
<summary>Que dois-je faire pour terminer ce défi?</summary>
Créez un fichier appelé `branching.py` dans votre dossier de code situé ici&nbsp;:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Créez un programme qui __accepte deux arguments de ligne de commande__&nbsp;: deux nombres (nombres entiers) que vous devez additionner. En fonction de la __somme de ces chiffres__, votre code devrait imprimer différents messages.

* Si la somme des nombres est __inférieure ou égale à zéro__, imprimez le texte&nbsp;: <div>`You have chosen the path of destitution.`</div>
* Si la somme des nombres est __comprise entre 1 et 100 (100 inclus)__, imprimez le texte&nbsp;: <div> `You have chosen the path of plenty.`</div>
* Si la somme des nombres est __supérieure à 100__, imprimez le texte&nbsp;: <div> `You have chosen the path of excess.`</div>

Exemple d'exécution de script&nbsp;:

```bash
python3 branching.py 30 200
```

Exemple de sortie&nbsp;:

```bash
You have chosen the path of excess.
```

Une fois que votre script peut traiter les trois conditions correctement, cliquez sur le bouton ***HACK*&nbsp;!

</details>
