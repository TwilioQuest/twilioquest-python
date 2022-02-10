# Notes d'épreuve de Toledo

Alors que vous vous préparez à vous attaquer à l'Épreuve de l'Installation, vous remarquez une autre page du journal de Toledo à proximité. Elle ne contient aucune information concernant le personnel ou l'énigme, mais on dirait qu'elle renferme des informations pertinentes sur le défi en cours.

<blockquote>
24 janvier 2016
<hr/>
<p>
J'ai l'impression que mon instinct était bon. Pour traverser la Salle du Rituel, je vais devoir réussir les mêmes Défis de Citoyenneté que ceux imposés aux premiers Pythonistes pour devenir citoyens de la Cité de Python.
</p>
<p>
Le premier défi me demande d'installer Python sur mon ordinateur… C'est facile! Un téléchargement et quelques clics, et tout devrait être configuré. Une fois l'application installée, il me suffit de coller le chemin d'accès complet au fichier exécutable <code>python3</code> sur mon ordinateur. Je vais utiliser la commande <code>python3</code> dans une fenêtre de terminal pour exécuter le code Python que j'ai écrit pour les défis.
</p>
<p>
--TVP
</p>
</blockquote>
## Trucs et astuces

En examinant la fin de l'entrée du journal, vous découvrez des conseils utiles pour réussir ce défi.

<details>
<summary>Comment télécharger et installer Python 3?</summary>
Sous Windows, nous vous recommandons __vivement__ d'installer Python&nbsp;3 via [Windows Store](https://www.microsoft.com/en-us/p/python-37/9nj46sx7x90p). Cela permet de configurer la commande `python3` sur votre chemin système ainsi que d'autres éléments utiles.

Pour les autres systèmes, [les téléchargements sont disponibles sur le site Web python.org](https://www.python.org/downloads/). À l'heure où j'écris, la version la plus récente de Python est `3.7.4`. Pour Mac, vous pouvez télécharger des programmes d'installation graphiques qui devraient vous guider tout au long du processus d'installation.

</details>
<details>
<summary>Comment exécuter des commandes dans un «terminal»?</summary>
Nous utilisons parfois «&nbsp;terminal&nbsp;» et «&nbsp;interface de ligne de commande&nbsp;» pour désigner la même chose. Un terminal est une application sur votre ordinateur qui vous permet de demander à votre ordinateur d'exécuter certaines actions en saisissant des commandes.

Sous Windows, nous vous recommandons d'utiliser [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-6). Sur Mac, nous vous recommandons d'utiliser l'application [Terminal](https://support.apple.com/guide/terminal/welcome/mac). Si vous utilisez Linux, votre application de terminal varie en fonction de la version de Linux que vous utilisez.

Lorsque vous écrivez du code Python pour TwilioQuest, vous exécutez ce code à l'aide de cette application de terminal. Les défis doivent contenir des remarques sur l'emplacement et la manière d'exécuter des commandes dans le terminal.

</details>
<details>
<summary>Comment puis-je trouver le chemin d'installation de «python3»?</summary>
Pour confirmer que la commande `python3` est disponible sur votre terminal, commencez par saisir la commande suivante&nbsp;:

```bash
python3 --version
```

Cela permet d'imprimer la version actuelle de Python&nbsp;3 que vous avez installée. Si vous pouvez faire ce qui précède, vous êtes prêt à exécuter du code Python&nbsp;! Pour vérifier où la commande a été installée (et __réaliser cet objectif__), vous pouvez utiliser cette commande sous Mac et Linux&nbsp;:

```bash
which python3
```

Cela imprime un chemin d'accès sur votre ordinateur (une série de dossiers) où le programme d'installation a placé la commande `python3`. Copiez cette chaîne de caractères entière dans le champ de texte sur la droite et cliquez sur *HACK*. Sur un Mac, le chemin d'accès peut ressembler à ceci&nbsp;:

`/Library/Frameworks/Python.framework/Versions/3.7/bin/python3`

Sur un PC, le processus est légèrement différent. Dans PowerShell, exécutez la commande suivante&nbsp;:

```bash
 Get-Command python3.exe | Select-Object -ExpandProperty Definition
```

Le chemin d'accès complet à votre fichier exécutable `python3` doit figurer dans le résultat de cette commande. Sur un PC, le chemin d'accès se présente comme suit&nbsp;:

`C:\Users\susan\AppData\Local\Microsoft\WindowsApps\python3.exe`

</details>
<details>
<summary>J'ai déjà Python 2, est-ce que c'est suffisant? SPOILER ALERT: Non, pas vraiment :(</summary>
Les exercices de TwilioQuest partent du principe que vous utilisez Python&nbsp;3. Vous devez donc installer Python&nbsp;3 pour effectuer les exercices correspondants. Il existe de [nombreuses différences entre Python&nbsp;2 et 3](https://www.fullstackpython.com/python-2-or-3.html), et TwilioQuest propose des fonctionnalités de langage qui ne fonctionneront pas dans Python&nbsp;2. Si vous apprenez Python pour la première fois, préoccupez-vous de l'apprentissage de Python&nbsp;3 uniquement.

</details>
