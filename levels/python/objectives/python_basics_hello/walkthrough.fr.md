# Notes sur les défis de Toledo

Une autre des entrées du journal de Toledo Van Possum se trouve à côté de cette barrière&nbsp;!

<blockquote>
1 février 2016
<hr/>
<p>
C'est pour cette raison que le Défi de Salutation était l'une des premières épreuves pour obtenir la citoyenneté. «Hello World» représente une entrée en matière universelle en programmation, puisqu'il s'agit d'écrire un code qui produit un message simple. Les premiers Pythonistes sont eux aussi passés par là, en utilisant leur salut traditionnel: «<b>Pour la gloire de Python!</b>».
</p>
<p>
Ce qui compte ici, c'est de créer un dossier sur mon ordinateur où il y aura tout mon code Python pour les défis. Je vais revenir à ce dossier encore et encore lorsque j'écrirai le code pour compléter les défis. Ce code de salutation est assez simple, mais je sens que des défis plus difficiles se profilent.
</p>
<p>
--TVP
</p>
</blockquote>
## Trucs et astuces

En examinant la fin de l'entrée du journal, vous découvrez des conseils utiles pour réussir ce défi.

<details>
<summary>Comment créer un dossier à l'aide de PowerShell sous Windows?</summary>
Étant donné que vous exécuterez votre code Python à partir du terminal, vous aurez peut-être envie de créer le dossier pour votre code en utilisant aussi le terminal. Vous pouvez tout aussi bien créer un dossier à l'aide de  Windows, les commandes à suivre se comporteront de façon identique.

Lancez l'application PowerShell sur votre ordinateur. Ensuite, saisissez la commande suivante&nbsp;:

```bash
cd ~
```

La commande `cd` __modifie le répertoire de travail actuel__ de votre session de terminal. C'est comme ouvrir un dossier dans l'Explorateur Windows. Utilisez la commande avec un `~` (tilde) après avoir été redirigé vers votre répertoire personnel.

Ensuite, saisissez cette commande dans l'interface PowerShell&nbsp;:

```bash
mkdir quest
```

Cette commande permet de __créer un nouveau répertoire__ (un dossier) appelé `quest` dans votre dossier de base. Vous pouvez placer tout le code Python de vos défis dans ce dossier. Enfin, vous pouvez remplacer votre répertoire de travail actuel par ce nouveau dossier, afin de pouvoir créer et exécuter votre code Python à partir de cet emplacement.

```bash
cd quest
```

Maintenant, vous êtes fin prêt pour créer et exécuter du code Python&nbsp;!

</details>
<details>
<summary>Comment créer un dossier avec Terminal sur Mac?</summary>
Étant donné que vous exécuterez votre code Python à partir du terminal, vous aurez peut-être envie de créer le dossier pour votre code en utilisant aussi le terminal. Vous pouvez tout aussi bien créer un dossier à l'aide de l'application Finder, mais les commandes à suivre se comporteront de façon identique.

Lancez l'application Terminal (sous Applications&nbsp;> Utilitaires) sur votre ordinateur. Ensuite, saisissez la commande suivante&nbsp;:

```bash
cd ~
```

La commande `cd` __modifie le répertoire de travail actuel__ de votre session de terminal. C'est comme ouvrir un dossier avec Finder. Utilisez la commande avec un `~` (tilde) après avoir été redirigé vers votre __répertoire personnel__.

Ensuite, saisissez cette commande dans le terminal&nbsp;:

```bash
mkdir quest
```

Cette commande permet de __créer un nouveau répertoire__ (un dossier) appelé `quest` dans votre dossier de base. Vous pouvez placer tout le code Python de vos défis dans ce dossier. Enfin, vous pouvez remplacer votre répertoire de travail actuel par ce nouveau dossier, afin de pouvoir créer et exécuter votre code Python à partir de cet emplacement.

```bash
cd quest
```

Maintenant, vous êtes fin prêt pour créer et exécuter du code Python&nbsp;!

</details>
<details>
<summary>Comment créer un fichier Python pour mon code?</summary>
Avant de créer votre fichier de code Python, __assurez-vous d'avoir changé de répertoire pour votre code__ à l'aide de la commande `cd`, comme décrit dans les étapes ci-dessus&nbsp;! Dans le cas contraire, votre code risque de se retrouver dans le mauvais dossier.

Si vous avez suivi les exemples ci-dessus, vous pouvez accéder à votre répertoire de code à l'aide de la commande suivante&nbsp;:

```bash
cd ~/quest
```

Vous pouvez vérifier que vous êtes dans le bon dossier à l'aide de la commande `pwd` (present working directory)&nbsp;:

```bash
pwd
```

Une fois cette opération effectuée, vous pouvez créer un nouveau fichier de code Python dans ce dossier en utilisant le nom qu'on vous a donné pour terminer le défi&nbsp;: `salutation.py`. Sous Windows/PowerShell, saisissez la commande suivante&nbsp;:

```bash
New-Item -ItemType file salutation.py
```

Sous Mac ou Linux, saisissez la commande suivante&nbsp;:

```bash
touch salutation.py
```

Notez l'extension `.py` à la fin du nom de fichier. Tous les fichiers de code source Python doivent avoir cette extension, tout comme un document Microsoft Word doit avoir une extension `.docx`, ou un fichier musical une extension `.mp3`.

Maintenant que vous avez créé un fichier de code, vous pouvez l'ouvrir et écrire du code dedans&nbsp;!

</details>
<details>
<summary>Comment modifier mon fichier de code Python?</summary>
Si vous avez déjà un éditeur de texte favori, utilisez-le&nbsp;! Si vous n'êtes pas sûr de ce qu'est un éditeur de texte ou si vous avez besoin de conseils, lisez la suite.

Lorsque vous écrivez du code, vous devez utiliser un __éditeur de texte__ quelconque. En règle générale, vous n'avez pas à modifier le code directement dans le terminal. Le terminal est l'endroit où nous émettons des commandes à l'ordinateur. Vous n'aurez pas non plus à ouvrir un fichier de code dans un traitement de texte complet comme Microsoft Word.

Il existe de nombreux éditeurs de texte parmi lesquels choisir. Nous recommandons [Visual Studio Code](https://code.visualstudio.com/) qui est un éditeur de texte puissant, raisonnablement simple, et gratuit, disponible sur toutes les plateformes. Nous le désignons parfois sous le nom de «&nbsp;VS Code&nbsp;».

Notez que ce n'est pas la même chose que [Visual Studio](https://visualstudio.microsoft.com/), qui est un [environnement de développement intégré (IDE) complet](https://en.wikipedia.org/wiki/Integrated_development_environment). Ce n'est pas __ce dont vous avez besoin maintenant__, sauf si vous l'avez déjà utilisé et que vous savez ce que vous faîtes. Un IDE complet peut être puissant, mais tous les boutons et options peuvent être très déroutants.

VS Code, en revanche, n'a pas autant de boutons et d'options que vous devez maîtriser immédiatement. Il offre encore de nombreuses fonctionnalités, mais nous allons nous concentrer sur la simple modification de texte.

### Ouvrir votre dossier de code avec VS Code

Une fois que vous avez installé VS Code, lancez l'application. Un écran vierge s'affiche pour commencer. Ensuite, choisissez __«&nbsp;Fichier&nbsp;», puis «&nbsp;Ouvrir…&nbsp;»__ dans la barre du menu. Dans la boîte de dialogue qui s'affiche, __accédez au dossier que vous avez créé précédemment__. Choisissez __le dossier que vous avez créé, et non le fichier source Python__. Cela vous permettra de modifier facilement tous les fichiers du dossier.

L'écran initial que vous verrez dans VS Code ressemblera à ceci. Cliquez sur votre fichier `salutation.py` pour commencer à le modifier&nbsp;!

![vs code](images/python/vscode.png)

Dans ce fichier, vous pouvez coller le code Python suivant pour terminer le défi&nbsp;:

```python
# Your first line of Python code is below!
print("For the glory of Python!")
```

Cela devrait ressembler un peu à ça&nbsp;:

![hello dans vs code](images/python/hello.png)

Assurez-vous d'__enregistrer ce fichier__ (Fichier&nbsp;> Enregistrer) après avoir modifié le code&nbsp;!

</details>
<details>
<summary>Certaines lignes de code commencent par un symbole «#». Qu'est-ce que c'est?</summary>
Ces lignes de code sont appelées __commentaires__. Elles ne sont pas réellement exécutées lorsque l'interpréteur Python lance votre code. Les commentaires sont utilisés pour fournir des notes et un contexte aux autres développeurs (ou à vous-même&nbsp;!) afin d'expliquer comment le code fonctionne.

</details>
<details>
<summary>Comment exécuter mon code Python?</summary>
Dans votre application de terminal, assurez-vous que votre répertoire de code est votre __répertoire de travail habituel__. Si vous avez suivi ce tutoriel, vous pouvez accéder à votre répertoire de code à l'aide de la commande suivante&nbsp;:

```bash
cd ~/quest
```

Si vous avez atteint ce stade, vous devriez avoir la commande `python3` disponible dans votre fenêtre de terminal. Si vous voulez vous servir de cette commande pour exécuter votre code Python, utilisez cette commande dans votre terminal&nbsp;:

```bash
python3 salutation.py
```

Si votre code fonctionne comme prévu, vous devriez voir le texte __Pour la gloire de Python&nbsp;!__ imprimé dans votre terminal&nbsp;! La plupart des défis de cette zone vous demanderont d'imprimer du texte de cette manière.

</details>
<details>
<summary>Comment puis-je terminer le défi une fois que mon code fonctionne?</summary>
Une fois que votre code fonctionne comme prévu, vous devez saisir le chemin d'accès complet à votre fichier dans le champ de texte à droite. En suivant ces instructions, ce chemin peut ressembler à cela sur un PC…

```bash
C:\Users\susan\quest\salutation.py
```

…ou à ceci sur un Mac…

```bash
/Users/susan/quest/salutation.py
```

Collez ce chemin d'accès au fichier dans le champ de texte à droite et cliquez sur *HACK*. Nous validerons le bon fonctionnement de votre code et enregistrerons le __dossier__ pour l'utiliser plus tard. Il vous sera demandé de placer la totalité de votre code Python dans ce dossier.

</details>
