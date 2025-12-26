# 🚴 Commandes Essentielles - Forum Bici Bogotá

## 🖥️ Lancer le site en local

```bash
# Aller dans le dossier frontend
cd /Users/sromero/Documents/Projects/forum-bici-bogota/frontend

# Lancer le serveur Python
python3 -m http.server 8001
```

**Puis ouvrir dans le navigateur :** http://localhost:8001/public/index.html

Pour arrêter le serveur : `Ctrl + C`

---

## 📊 Git - Sauvegarder tes changements

```bash
# Revenir à la racine du projet
cd /Users/sromero/Documents/Projects/forum-bici-bogota

# Voir ce qui a changé
git status

# Ajouter tous les changements
git add -A

# Sauvegarder avec un message
git commit -m "ton message ici"

# Voir l'historique
git log --oneline -5
```

---

## 🌐 Vérifier Supabase

**Dashboard :** https://supabase.com/dashboard/project/xdvrfrogmfkntuluypdx/editor

**Table ratings :** https://supabase.com/dashboard/project/xdvrfrogmfkntuluypdx/editor/28551

---

## 🔍 Commandes utiles

```bash
# Voir la structure du projet
ls -la

# Ouvrir VS Code dans le dossier actuel
code .

# Trouver un fichier
find . -name "*.js" | grep config
```

---

## 🎯 Workflow typique

1. **Démarrer une session :**
   ```bash
   cd /Users/sromero/Documents/Projects/forum-bici-bogota/frontend
   python3 -m http.server 8001
   ```

2. **Travailler sur le code** (dans VS Code)

3. **Tester dans le navigateur** (http://localhost:8001/public/index.html)

4. **Sauvegarder les changements :**
   ```bash
   # Dans un nouveau terminal (Ctrl+C pour arrêter le serveur si nécessaire)
   cd /Users/sromero/Documents/Projects/forum-bici-bogota
   git add -A
   git commit -m "description des changements"
   ```

---

## 📝 Raccourcis macOS

- **Nouveau terminal :** `Cmd + T` (dans Terminal/iTerm)
- **Copier :** `Cmd + C`
- **Coller :** `Cmd + V`
- **Effacer ligne :** `Cmd + Backspace`
- **Interrompre processus :** `Ctrl + C`

---

## 🆘 En cas de problème

**Le serveur ne démarre pas ?**
```bash
# Vérifier si le port 8001 est déjà utilisé
lsof -ti:8001

# Tuer le processus si besoin
kill -9 $(lsof -ti:8001)
```

**Fichiers non sauvegardés dans Git ?**
```bash
git status
# Puis suivre les instructions Git
```

---

💡 **Astuce :** Garde ce fichier ouvert dans un onglet de ton navigateur ou dans VS Code !
