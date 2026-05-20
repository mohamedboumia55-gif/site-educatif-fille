# /commit

> Sauvegarder l'état actuel du workspace avec Git.

---

## Mission

Quand je lance `/commit`, exécute la séquence suivante :

### Étape 1 : Initialiser git si nécessaire

Vérifie si le workspace `C:\Users\mohamed\Desktop` est un dépôt git.
- Si non : lance `git init` et crée un premier commit initial.
- Si oui : passe à l'étape suivante.

### Étape 2 : Vérifier l'état

Lance `git status` pour voir ce qui a changé depuis le dernier commit.

Si rien n'a changé, dis-le simplement et arrête là.

### Étape 3 : Construire le message de commit

Analyse les fichiers modifiés et génère automatiquement un message de commit clair et court en français, du style :
- "Ajout du site éducatif - structure de base"
- "Mise à jour du contexte personnel"
- "Nouveau projet : application sportive"

### Étape 4 : Confirmer avant de committer

Affiche le résumé des changements et le message de commit prévu, puis demande confirmation :

> "Je vais committer ces changements avec le message : [message]. On y va ?"

### Étape 5 : Committer

Une fois confirmé :
1. `git add .` (en excluant .secrets grâce au .gitignore)
2. `git commit -m "[message]"`
3. Confirmer que tout s'est bien passé

---

## Règles importantes

- Ne jamais committer le dossier `.secrets/`
- Toujours demander confirmation avant de committer
- Message de commit en français, court et descriptif
- Si c'est le premier commit, utiliser le message : "Initialisation du workspace Jarvis"
