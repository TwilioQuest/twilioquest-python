# Notes sur les défis de Toledo

Une fouille rapide de la zone entourant cette barrière révèle une autre des entrées du journal de Toledo Van Possum.

<blockquote>
10 juillet 2016
<hr/>
<p>
Les premiers Pythonistes croyaient au pouvoir de la science et pour eux, les révisions de leurs pairs étaient essentielles pour établir une vérité objective. Ils ont intégré le Défi de la Vérité dans leurs défis de citoyenneté pour s'assurer que cette valeur était transmise à leurs nouveaux membres.
</p>
<p>
Pour réussir ce défi, je vais devoir créer des variables qui contiennent un nouveau type de valeur: <a href="https://docs.python.org/3/library/stdtypes.html#truth-value-testing">un booléen</a>. Ah. « Booléen ». C'est un drôle de mot à prononcer.
</p>
<p>
<b>Les booléens</b> représentent le concept de vrai et de faux. En programmation, il est souvent nécessaire d'exécuter un chemin de code dans un ensemble de circonstances, et un code différent dans un autre ensemble. Si un utilisateur est connecté, montrez-lui le solde de son compte. S'il n'est pas connecté, redirigez-le vers la page de connexion. Je vais devoir prouver que je maîtrise les bases de ce concept pour terminer ce défi.
</p>
<p>
--TVP
</p>
</blockquote>
## Conseils et astuces

A travers l'entrée du journal, vous trouvez quelques passages utiles.

<details>
<summary>Comment créer des variables booléennes?</summary>
Vous pouvez affecter une valeur `True` ou `False` directement à une variable à l'aide des mots en majuscules du même nom.

```python
tacos_rule = True
root_canal_fun = False
```

</details>
<details>
<summary>Comment exécuter le code si une condition donnée est vraie?</summary>
Vous pouvez définir un bloc de code qui ne sera exécuté que sous certaines conditions à l'aide d'une __instruction IF__&nbsp;:

```python
tacos_rule = True

if tacos_rule:
    print("Well, of course tacos rule!")
```

Le plus souvent, vous utiliserez une [logique de comparaison](https://docs.python.org/3/library/stdtypes.html#comparisons) pour déterminer si un bloc de code doit être exécuté ou non. Il s'agit d'instructions qui évaluent `True` ou `False` selon les données comparées. Le code ci-dessous utilise la comparaison non égale (`!=`) pour déterminer s'il faut ou non exécuter l'instruction d'affichage.

```python
dinner_name = "kale"

if dinner_name != "tacos":
    print("Why aren't we eating tacos?")
```

</details>
<details>
<summary>Que dois-je faire pour terminer ce défi?</summary>
Créez un fichier appelé `booleans.py` dans votre dossier de code situé ici&nbsp;:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Créez un programme qui déclare plusieurs variables [booléennes](https://docs.python.org/3/library/stdtypes.html#truth-value-testing). Les variables doivent avoir les noms et les valeurs suivants&nbsp;:

* La variable `python_is_glorious` doit être définie sur `True`.
* La variable `failure_is_option` doit être définie sur `False`.
* La variable `proper_greeting` doit être INITIALEMENT définie sur `False`.

Lorsque votre script s'exécute, vous devez vérifier la valeur du premier argument transmis à votre script&nbsp;: `sys.argv[1]`. Si cet argument est `For the glory of Python!`, définissez la variable `proper_greeting` sur `True`. Voici un exemple d'appel de script qui donnerait à la variable `proper_greeting` la valeur `True`&nbsp;:

```bash
python3 booleans.py 'For the glory of Python!'
```

Toute autre entrée laisserait la valeur `proper_greeting` définie sur `False`.

Une fois que votre script a correctement déclaré les variables, cliquez sur le bouton *HACK*&nbsp;!

</details>
