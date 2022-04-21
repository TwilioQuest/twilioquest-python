# Notes d'épreuve de Toledo

À côté de la barrière se trouve une autre entrée du journal de Toledo.

<blockquote>
3 mars 2016
<hr/>
<p>
La Ville de Python est réputée pour ses penseurs et philosophes, dont les mots n'ont cessé de résonner au fil du temps. Cette épreuve a été conçue pour enseigner aux futurs programmeurs Python à utiliser leurs mots d'une manière tout aussi puissante.
</p>
<p>
Pour accomplir cette épreuve, je vais devoir écrire un code qui prend une chaîne d'entrée et la rend <b>SUPER DÉMENTE!!!</b> J'ai déjà utilisé des chaînes dans certains de ces défis, mais les chaînes sont des objets intégrés dans Python qui représentent des chaînes de caractères (texte et autres données). Une grande partie du code Python que j'écris devra manipuler le texte à travers ces objets. Il est donc évident qu'il était suffisamment important pour l'inclure dans les épreuves de citoyenneté.
</p>
<p>
--TVP
</p>
</blockquote>
## Trucs et astuces

En survolant le reste de l'entrée du journal, vous trouvez plusieurs passages plus intéressants.

<details>
<summary>Comment puis-je obtenir la chaîne d'entrée dans mon programme?</summary>
Voici un code que vous pouvez utiliser comme point de départ pour cet exercice. Comme précédemment, il utilise le module `sys` pour lire une chaîne d'entrée comme argument de ligne de commande&nbsp;:

```python
import sys

# Read in an input string passed in to our script as an argument
input_string = sys.argv[1]
output_string = input_string

# Now, print your transformed string:
print(output_string)
```

Vous devez exécuter ce programme comme suit&nbsp;:

```bash
python3 strings.py "am I stoked enough yet"
```

Comme il est écrit, le code de démarrage ci-dessus ne manipule ni ne modifie la chaîne de quelque manière que ce soit, c'est votre mission.

</details>
<details>
<summary>Comment modifier une chaîne dans le code Python?</summary>
Techniquement, les chaînes Python sont __immuables__, ce qui signifie qu'une fois créées, vous ne pouvez plus les modifier. À la place, vous devez utiliser des chaînes existantes pour transformer leur valeur et créer de nouvelles chaînes.

L'[objet chaîne](https://docs.python.org/3/library/stdtypes.html#string-methods) de Python comporte de nombreuses __méthodes__ qui vous permettent de renvoyer une nouvelle chaîne quelque peu transformée. Vous en saurez davantage plus tard, mais les __méthodes__ sont des __fonctions__ (comme `print`) qui fonctionnent sur une __instance__ spécifique (copie) d'un objet. Vous trouverez peut-être la méthode [upper](https://docs.python.org/3/library/stdtypes.html#str.upper) utile.

```python
new_string = "get stoked".upper()
print(new_string)
```

Il existe plusieurs méthodes pour combiner des chaînes ensemble (les __concaténer__). L'une de ces méthodes consiste à utiliser l'opérateur `+`. Oui, il s'agit du même opérateur que celui que vous utilisez pour __ajouter des nombres__, mais lorsque vous l'utilisez avec deux chaînes ou plus, il relie ces chaînes.

Voici un exemple d'association de deux chaînes pour former une chaîne complète avec la valeur `The NY Mets are my favorite squadron.`&nbsp;:

```python
part_one = "The NY Mets "
part_two = "are my favorite squadron."

full_message = part_one + part_two
print(full_message)
```

</details>
<details>
<summary>Que dois-je faire pour accomplir cette épreuve?</summary>
Créez un fichier appelé `strings.py` dans votre dossier de code situé ici&nbsp;:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Dans ce fichier, vous devrez prendre un __argument de ligne de commande__, une chaîne et les transformer de deux manières. Utilisez le code suivant comme point de départ&nbsp;:

```python
import sys

# Read in an input string passed in to our script as an argument
input_string = sys.argv[1]
output_string = input_string

# Now, print your transformed string:
print(output_string)
```

S'il n'est pas modifié, le code ci-dessus ne satisfait pas aux exigences de l'épreuve. Il imprime simplement la chaîne d'entrée. Vous devrez utiliser les techniques décrites dans cette procédure pour créer une chaîne qui a été __convertie en majuscules__ et à laquelle __trois points d'exclamation__ ont été ajoutés, puis __imprimer cette chaîne sur la console__.

Pour tester votre code, exécutez-le comme suit&nbsp;:

```bash
python3 strings.py "am I stoked enough yet"
```

Si votre code fonctionnait, il imprimerait la chaîne `AM I STOKED ENOUGH YET!!!`.

Une fois que votre code dans `strings.py` fonctionne comme prévu, cliquez sur le bouton *HACK* pour soumettre votre travail&nbsp;!

</details>
