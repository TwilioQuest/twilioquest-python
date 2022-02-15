# Notes sur les défis de Toledo

Une autre entrée de journal s'affiche à côté de cette barrière.

<blockquote>
22 avril 2016
<hr/>
<p>
Le rendement des pixels des Pythonistes antiques était incroyablement avancé pour leur époque. Leurs usines pouvaient recevoir des paquets bruts, les traiter et produire des œuvres d'art très prisées dans le Cloud de l'époque.
</p>
<p>
Les fonctions opèrent comme une usine: elles prennent des matières premières (arguments), les traitent (code d'exécution) et peuvent <b>renvoyer</b> un résultat utilisable. C'est ce que je vais apprendre à faire pour accomplir ce défi.
</p>
<p>
--TVP
</p>
</blockquote>
## Conseils et astuces

En parcourant le reste du journal, vous découvrez de nouveaux points intéressants.

<details>
<summary>Comment puis-je renvoyer une valeur à partir d'une fonction?</summary>
Souvent, après l'exécution de votre fonction, vous voudrez renvoyer une sorte de résultat vers l'appelant de votre fonction. Pour ce faire, on utilise le mot-clé `return`. Utilisons la fonction `hail_friend` précédente comme point de départ.  Cette fois-ci, au lieu d'afficher immédiatement le message, nous allons utiliser `return` à partir de notre fonction. Cela permettra à l'appelant de notre fonction d'enregistrer cette valeur dans une variable et de faire ce qu'il veut avec le résultat.

```python
def hail_friend(name):
    message = f"Hail, {name}!"
    return message

greeting_one = hail_friend("Edward")
greeting_two = hail_friend("Alphonse")

print(greeting_one)
print(greeting_two)
```

Ce code est très similaire à celui d'une autre fonction que nous avons déjà vue, mais la dernière ligne de code de notre fonction utilise désormais le mot-clé `return` pour renvoyer le résultat de notre code de fonction à l'appelant.

</details>
<details>
<summary>Que dois-je faire pour terminer ce défi?</summary>
Ouvrez (ou recréez si nécessaire) un fichier appelé `functions.py` dans votre dossier de code situé ici&nbsp;:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Dans ce fichier, vous devrez __déclarer une fonction__ nommée `add_numbers` qui prend deux arguments&nbsp;: ces arguments seront des nombres entiers que votre fonction doit additionner. Si vous n'avez pas encore vu le code Python pour additionner des nombres, voici comment procéder&nbsp;:

```python
result_sum = first_number + second_number
```

Consultez le reste de cette procédure pour savoir comment déclarer une fonction qui prend des arguments et renvoie un résultat. Une fois que vous avez ajouté une fonction `functions.py` pour appeler `add_numbers` et qu'elle fonctionne comme prévu, cliquez sur le bouton *HACK* pour soumettre votre travail&nbsp;!

</details>
