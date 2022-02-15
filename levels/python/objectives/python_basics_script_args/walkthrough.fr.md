# Notes d'épreuve de Toledo

Une autre des entrées du journal de Toledo Van Possum se trouve à côté de cette barrière&nbsp;!

<blockquote>
12 février 2016
<hr/>
<p>
Le Défi d'Entrée Sollicitée vise à montrer au futur développeur Python comment fournir à son code quelques données de base avec lesquelles travailler. En règle générale, lorsque vous écrivez un code pour effectuer une tâche, il y a trois étapes principales:
</p>
<ol>
<li>Vous saisissez une entrée dans votre code</li>
<li>Votre code s'exécute, effectuant des calculs ou d'autres opérations sur l'entrée</li>
<li>À la fin du traitement, votre code renvoie une sorte de résultat</li>
</ol>
<p>
Dans ce cas, mon entrée se présente sous la forme d'<b>arguments de ligne de commande</b>, c'est-à-dire les chaînes de caractères que vous saisissez après le nom de votre script. Le résultat correspond aux instructions print  qu'on m'a demandé de créer. Je vais également devoir utiliser de nouvelles astuces Python pour que tout cela marche:
</p>
<ul>
<li>Importer un module à partir de la librairie standard de Python</li>
<li>Accéder aux « arguments » (entrée) transmis à mon script</li>
<li>Insérer les données (arguments) transmises à mon script dans mes instructions print</li>
</ul>
<p>
Je vais enregistrer mes techniques ici pour les futurs explorateurs.
</p>
<p>
--TVP
</p>
</blockquote>
## Trucs et astuces

En examinant la fin de l'entrée du journal, vous découvrez des conseils utiles pour réussir ce défi. Plus particulièrement, un exemple montre comment écrire un script avec une entrée à partir d'arguments de ligne de commande.

```python
import sys

print(f"The name of this Python file is '{sys.argv[0]}'")
print(f"The first argument passed in to my script was: '{sys.argv[1]}'")
print(f"The second argument passed in to my script was: '{sys.argv[2]}'")
print(f"The third argument passed in to my script was: '{sys.argv[3]}'")
```

Après avoir copié ce code dans un fichier nommé `collect_input.py`, vous l'exécutez comme suit&nbsp;:

```bash
python3 collect_input.py snacky yogurt "a long thing in quotes"
```

Le script s'exécute et affiche tous les arguments dans l'ordre. Ouah&nbsp;! En fait, c'est la solution complète&nbsp;! Vous prenez le temps de comprendre les éléments clés de ce code.

## Importation d'un module

La première ligne de code de la solution est&nbsp;:

```python
import sys
```

Ici, votre code «&nbsp;[importe](https://docs.python.org/3/reference/import.html)&nbsp;» un module à partir de la bibliothèque librairie de Python. Penchons-nous sur le jargon employé ici&nbsp;:

* __Module__&nbsp;: un module est un code écrit ailleurs (peut-être par quelqu'un d'autre) que vous utilisez dans votre propre code pour une tâche spécifique. Vous pouvez écrire vos propres modules pour organiser votre code dans différents fichiers, ou vous pouvez utiliser des modules écrits par d'autres personnes. Le module [sys](https://docs.python.org/3/library/sys.html) est intégré à Python pour effectuer des tâches telles que la collecte d'entrées pour votre script.
* __Importer__&nbsp;: lorsque vous utilisez un code défini dans un autre module, vous devez l'importer dans votre code à l'aide du mot-clé `import` ([docs](https://docs.python.org/3/reference/import.html)). Pour les modules intégrés tels que `sys`, nous pouvons simplement transmettre le nom du module après le mot-clé `import`. Il existe d'autres façons d'inclure des modules, mais nous en parlerons une autre fois.
* __Librairie standard__&nbsp;: il s'agit de modules [intégrés à Python](https://docs.python.org/3/library/) pour effectuer des tâches courantes. La librairie standard contient des modules qui vous aident à travailler avec des nombres, des dates, des textes et d'autres types de données communs.

Dans le code de ce défi, nous utilisons le module `sys` pour accéder à l'entrée qui a été transmise à notre script lors de son exécution.

## Impression de texte sur la console

C'est en fait la deuxième fois que vous voyez une __fonction__ appelée `print` dans votre exemple de code. [Cette fonction](https://docs.python.org/3/tutorial/inputoutput.html) est automatiquement disponible dans tous les codes Python pour faciliter l'impression de texte sur la console.

Vous en apprendrez plus sur les __fonctions__ plus tard, mais en bref, les fonctions sont des blocs de code réutilisables auxquels vous pouvez faire appel, encore et encore, avec différentes entrées pour effectuer une tâche. La [fonction print](https://docs.python.org/3/library/functions.html#print) utilise des arguments qui représentent des informations que vous souhaitez imprimer sur la console.

Ces déclarations d'impression utilisent également une fonctionnalité Python qu'on appelle [chaînes de caractères «&nbsp;f&nbsp;»](https://docs.python.org/3/tutorial/inputoutput.html#tut-f-strings). Elles vous permettent d'insérer des données de votre programme dans une chaîne de texte. Nous en apprendrons plus sur les chaînes de caractères plus tard.

## Accéder aux arguments de script

Pour que les arguments soient bien transmis au programme, vous utilisez l'objet `sys.argv`. Cet objet est [une liste](https://www.w3schools.com/python/python_lists.asp) de chaînes de caractères contenant tous les arguments transmis à la commande `python3`, y compris le nom de votre script.

`sys.argv[0]` sera toujours le nom de votre script. Dans cet exemple, il s'agit de «&nbsp;collect_input.py&nbsp;».

`sys.argv[1]` correspond au premier argument de votre script après le nom.

`sys.argv[200]` est le 200e argument transmis à votre script. Attention&nbsp;: si votre script ne dispose pas de 200&nbsp;arguments, ce code [aboutit à une erreur](https://docs.python.org/3/tutorial/errors.html)&nbsp;!

## Terminer le défi

Pour terminer le défi, copiez le code de Toledo ci-dessus dans le fichier nommé `collect_input.py` du dossier `<%= env.TQ_PYTHON_CODE_PATH.value %>` de votre ordinateur. Dans le terminal, commencez par saisir la commande suivante&nbsp;:

```bash
cd <%= env.TQ_PYTHON_CODE_PATH.value %>
```

Votre [répertoire de travail actuel sera remplacé](https://en.wikipedia.org/wiki/Working_directory) par votre dossier de code Python. Ensuite, créez le fichier de code Python nommé `collect_input.py` dans ce dossier si vous ne l'avez pas déjà fait.

Sous Mac ou Linux, saisissez la commande suivante&nbsp;:

```bash
touch collect_input.py
```

Sous Windows (PowerShell), saisissez la commande suivante&nbsp;:

```bash
New-Item -ItemType file collect_input.py
```

Ensuite, ouvrez votre fichier de code dans Visual Studio Code ou dans l'éditeur de texte de votre choix. Enregistrez le code suivant dans `collect_input.py`&nbsp;:

```python
import sys

print(f"The name of this Python file is '{sys.argv[0]}'")
print(f"The first argument passed in to my script was: '{sys.argv[1]}'")
print(f"The second argument passed in to my script was: '{sys.argv[2]}'")
print(f"The third argument passed in to my script was: '{sys.argv[3]}'")
```

Testez votre script en l'exécutant avec trois arguments, comme celui-ci.

```bash
python3 collect_input.py snacky yogurt "a long thing in quotes"
```

Votre script doit imprimer tous les arguments sur la console. Une fois que votre code est en mesure de le faire, cliquez sur le bouton *HACK* à droite pour terminer le défi&nbsp;!