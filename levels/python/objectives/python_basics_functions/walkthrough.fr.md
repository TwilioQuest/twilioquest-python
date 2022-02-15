# Notes sur les défis de Toledo

Vous trouvez une autre entrée de journal à côté de cette barrière.

<blockquote>
4 avril 2016
<hr/>
<p>
Les sophistes du Temple de Python étaient réputés pour ne jamais se répéter, peu importe à quel point leurs étudiants les exaspéraient avec leurs questions. Dans ce défi, leur zèle en matière d'efficacité est indéniable.
</p>
<p>
Les <b>fonctions</b> sont des fragments de code Python réutilisables. Si vous devez toujours effectuer les mêmes étapes dans votre code, vous devriez probablement envisager de créer une fonction. Ensuite, au lieu de copier/coller le même code encore et encore, vous pouvez appeler une fonction qui renferme tout le code dont vous avez besoin.
</p>
<p>
--TVP
</p>
</blockquote>
## Trucs et astuces

Si vous parcourez l'entrée du journal, vous trouverez d'autres conseils utiles pour ce défi.

<details>
<summary>Comment définir une fonction?</summary>
Pour un développeur, les [fonctions](https://docs.python.org/3.7/tutorial/controlflow.html#defining-functions) sont des blocs de code réutilisables que vous pouvez utiliser pour éviter d'écrire le même code encore et encore. Tout comme les variables que nous avons déjà vues, __les fonctions ont, elles aussi, des noms__. Cela nous permet de les __appeler__ par leur nom pour utiliser leur fonctionnalité. `print()`, par exemple, est une fonction intégrée à Python qui nous permet d'envoyer une sortie sur la console.

Voici un exemple de programme Python qui contient une fonction utilisée pour afficher le nom du script en cours d'exécution sur la console.

```python
import sys

def print_name():
    print(f"Current script: {sys.argv[0]}")

print_name()
```

Lorsque vous exécutez ce code, vous définissez une fonction nommée `print_name` qui contient une ligne de code Python (celle qui affiche le nom du script actuel). Dans cet exemple, la dernière ligne de code __appelle__ la fonction (exécute le code de la fonction) en ajoutant des parenthèses ouvertes et fermées `()` à la fin du nom de la fonction.

</details>
<details>
<summary>Quel code est considéré comme faisant partie de la fonction? Pourquoi certaines lignes sont-elles désormais indentées?</summary>
Le code à l'intérieur de la fonction est indenté par une tabulation____ (généralement quatre espaces). L'indentation est la façon dont vous créez un __bloc__ de code dans Python. Tout code commençant au même niveau d'indentation est considéré comme faisant partie du même bloc. Vous pouvez ajouter une autre ligne de code à votre fonction en l'ajoutant au même niveau d'indentation comme suit&nbsp;:

```python
def print_lines():
    print("This will print first.")
    print("This will print second.")

print_lines()
```

Si la ligne de code suivante __n'est pas__ indentée au même niveau, elle sera exécutée juste après la déclaration de la fonction.

```python
def print_lines():
    print("This will print second, and now our function has only one line.")
print("This will print first, and is no longer part of the function.")

print_lines()
```

</details>
<details>
<summary>Que dois-je faire pour terminer ce défi?</summary>
Créez un fichier appelé `functions.py` dans votre dossier de code situé ici&nbsp;:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Dans ce fichier, vous devrez __déclarer une fonction__ nommée `hail_friend` qui affiche le message `Hail, friend!`.

Consultez le reste de cette procédure pour savoir comment déclarer une fonction. Une fois que votre code dans `functions.py` fonctionne comme prévu, cliquez sur le bouton *HACK* pour soumettre votre travail&nbsp;!

</details>
