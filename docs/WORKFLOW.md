# 🔄 Workflow de développement - Rate Your Track Bogotá

**Protocole testé et validé pendant le MVP**  
**Taux de succès** : 95%+ (très peu d'erreurs)  
**À suivre** : Pour toutes les phases POST-MVP

---

## 🎯 Principes fondamentaux

### 1️⃣ **Checkpoint avant chaque phase**
```bash
# Avant de commencer une nouvelle feature
git add -A
git commit -m "checkpoint: before [FEATURE_NAME]"
git tag -a checkpoint-[DATE]-[FEATURE] -m "Description"
git push origin TEST-MVP checkpoint-[DATE]-[FEATURE]
```

**Exemple** :
```bash
git tag -a checkpoint-2024-12-28-forum -m "Checkpoint avant implémentation forum"
```

### 2️⃣ **Une feature = une branche (si grosse)**
```bash
# Pour features importantes (> 2h)
git checkout -b feature/forum-fonctionnel
# ... développement ...
git push origin feature/forum-fonctionnel
# Merge après tests
```

**Quand créer une branche ?**
- ✅ Feature > 2h de dev
- ✅ Modifications structurelles (DB, architecture)
- ✅ Expérimentation (pas sûr du résultat)
- ❌ Petits fixes (< 30min) → Direct sur TEST-MVP

### 3️⃣ **Documentation systématique**
Après **chaque feature complétée** :
```bash
# 1. Mettre à jour PROGRESS.md
# 2. Commit descriptif
git commit -m "feat(forum): add topic creation form

- Created forum_topics table in Supabase
- Added modal for new topic
- Form validation
- Auto-save to database

Closes #issue-number (si applicable)"

# 3. Push immédiat
git push
```

---

## 🔧 Workflow détaillé par feature

### **ÉTAPE 1 : Planification** (5-10 min)

**Checklist** :
- [ ] Lire la roadmap (`docs/ROADMAP-POST-MVP.md`)
- [ ] Identifier la feature à implémenter
- [ ] Lister les fichiers à modifier
- [ ] Lister les dépendances (tables DB, libs, etc.)

**Template de planning** :
```markdown
## Feature: [NOM]

### Objectif
[Description en 1 phrase]

### Fichiers à modifier
- frontend/public/index.html (lignes X-Y)
- frontend/src/config/constants.js
- [etc.]

### Tables Supabase
- Nouvelle table: forum_topics
  - Colonnes: id, title, content, created_at, etc.

### Durée estimée
2-3 heures

### Tests à faire
- [ ] Test 1
- [ ] Test 2
```

---

### **ÉTAPE 2 : Checkpoint** (1 min)

```bash
# Créer le checkpoint
git add -A
git commit -m "checkpoint: before [FEATURE]"
git tag -a checkpoint-$(date +%Y-%m-%d)-[FEATURE] -m "Checkpoint avant [FEATURE]"
git push origin TEST-MVP --tags

# Optionnel : branche de sauvegarde
git branch backup-before-[FEATURE]
git push origin backup-before-[FEATURE]
```

---

### **ÉTAPE 3 : Développement incrémental** (temps variable)

#### 3.1 - Lire le code existant
```bash
# TOUJOURS lire avant de modifier
grep -n "mot-clé" frontend/public/index.html
# ou
# Utiliser read_file pour voir le contexte
```

#### 3.2 - Modifier par petits blocs
**RÈGLE D'OR** : 1 modification = 1 concept

**Mauvais exemple** (trop gros) :
```
❌ "Implémente tout le forum en 1 commit"
```

**Bon exemple** (incrémental) :
```
✅ Commit 1: "feat(forum): create Supabase table"
✅ Commit 2: "feat(forum): add modal UI for new topic"
✅ Commit 3: "feat(forum): connect form to Supabase"
✅ Commit 4: "feat(forum): display topics dynamically"
```

#### 3.3 - Tester immédiatement
```bash
# Après CHAQUE modification
cd frontend
python3 -m http.server 8001
# Tester dans le navigateur
# ✅ Ça marche ? → Commit
# ❌ Ça bug ? → Fix ou rollback
```

#### 3.4 - Commit + Push fréquents
```bash
# Dès qu'un bloc fonctionne
git add [fichier-modifié]
git commit -m "feat(forum): [description précise]"
git push origin TEST-MVP
```

**Pourquoi pusher souvent ?**
- ✅ Sauvegarde cloud (pas de perte de code)
- ✅ Netlify déploie automatiquement
- ✅ Historique clair (facile de rollback)

---

### **ÉTAPE 4 : Vérification** (5-10 min)

**Checklist finale** :
- [ ] Tests manuels (tous les cas d'usage)
- [ ] Console navigateur (pas d'erreurs JS)
- [ ] Responsive (mobile + desktop)
- [ ] Mode nuit/jour
- [ ] Test avec données vides (edge cases)

**Commandes de vérification** :
```bash
# Voir les erreurs potentielles
grep -n "console.error\|console.warn" frontend/public/index.html

# Vérifier les TODO
grep -n "TODO\|FIXME" frontend/public/index.html

# Voir la diff totale
git diff checkpoint-[DATE]-[FEATURE]..HEAD
```

---

### **ÉTAPE 5 : Documentation** (5 min)

#### 5.1 - Mettre à jour PROGRESS.md
```markdown
## [DATE] - Feature: [NOM]

### ✅ Réalisé
- Créé table Supabase `forum_topics`
- Formulaire de création de sujet
- Affichage dynamique des sujets
- Système de catégories

### 📊 Stats
- Commits: 4
- Lignes modifiées: +250 / -20
- Durée réelle: 3h15

### 🐛 Problèmes rencontrés
- [Description] → Résolu en [solution]

### 📝 Notes
- [Remarques importantes]
```

#### 5.2 - Mettre à jour ROADMAP-POST-MVP.md
```markdown
### PHASE 1 : Forum fonctionnel 💬 (priorité 1)
**Statut** : ✅ TERMINÉ (28 déc 2024)

**Tâches** :
- [x] Créer table Supabase `forum_topics`
- [x] Créer table Supabase `forum_replies`
- [x] Formulaire "Nouveau sujet"
- [x] Affichage dynamique des sujets
- [x] Système de réponses
```

---

### **ÉTAPE 6 : Commit final + Tag** (2 min)

```bash
# Commit de la doc
git add docs/PROGRESS.md docs/ROADMAP-POST-MVP.md
git commit -m "docs: complete Phase 1 - Forum fonctionnel"

# Tag de fin de phase
git tag -a phase1-complete -m "Phase 1: Forum fonctionnel - TERMINÉ

✅ Tables Supabase créées
✅ Création de sujets
✅ Affichage dynamique
✅ Système de réponses
✅ Tests validés"

git push origin TEST-MVP --tags
```

---

## 🚨 Gestion des erreurs

### Si quelque chose ne marche pas

**Option 1 : Fix rapide** (< 10 min)
```bash
# Corriger directement
# Commit du fix
git commit -m "fix(forum): correct modal validation bug"
```

**Option 2 : Rollback au checkpoint** (si bloqué > 30 min)
```bash
# Revenir au dernier checkpoint
git reset --hard checkpoint-[DATE]-[FEATURE]

# Recommencer avec une approche différente
```

**Option 3 : Créer une branche de test**
```bash
# Si pas sûr de la solution
git checkout -b test/fix-forum-modal
# ... essais ...
# Si ça marche : merge
# Sinon : supprimer la branche
```

---

## 📊 Métriques de qualité

### Indicateurs de bon workflow

✅ **Nombre de commits par jour** : 5-10 (petits commits)  
✅ **Fréquence de push** : Toutes les heures  
✅ **Temps entre checkpoint et merge** : < 1 journée  
✅ **Nombre de rollbacks** : < 1 par semaine  
✅ **Documentation à jour** : 100% (après chaque feature)

### Red flags 🚩

❌ **Commits énormes** (> 500 lignes)  
❌ **Pas de push depuis > 24h**  
❌ **PROGRESS.md pas à jour**  
❌ **Branches non mergées depuis > 3 jours**  
❌ **Tests manuels oubliés**

---

## 🎯 Templates de commits

### Convention de nommage

```
<type>(<scope>): <description courte>

<description longue optionnelle>

<footer optionnel: issues, breaking changes>
```

**Types** :
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation uniquement
- `refactor`: Refactoring (pas de nouvelle feature)
- `style`: Formatage, whitespace
- `test`: Ajout de tests
- `chore`: Maintenance (deps, config)

**Scopes** :
- `forum`, `map`, `auth`, `i18n`, `search`, `stats`

**Exemples** :
```bash
feat(forum): add topic creation modal
fix(map): correct polyline color calculation
docs: update roadmap with Phase 1 completion
refactor(auth): extract login logic to separate function
chore: update Supabase SDK to v2.39
```

---

## 🛠️ Outils recommandés

### Avant chaque modification
```bash
# 1. Lire le contexte
grep -n "mot-clé" fichier.html

# 2. Voir la structure
head -n 50 fichier.html  # 50 premières lignes

# 3. Chercher les dépendances
grep -r "fonction_utilisée" frontend/
```

### Après chaque modification
```bash
# 1. Vérifier la diff
git diff fichier.html

# 2. Tester en local
cd frontend && python3 -m http.server 8001

# 3. Vérifier la console navigateur (F12)
# Pas d'erreurs rouges

# 4. Commit si OK
git add fichier.html
git commit -m "feat: description"
git push
```

---

## 📋 Checklist quotidienne

### Début de session
- [ ] `git pull origin TEST-MVP` (récupérer les derniers changes)
- [ ] Lire `docs/ROADMAP-POST-MVP.md` (savoir où on en est)
- [ ] Choisir la feature du jour
- [ ] Créer checkpoint
- [ ] Estimer la durée

### Pendant le dev
- [ ] Commits toutes les 30-60 min
- [ ] Tests manuels après chaque bloc
- [ ] Pas de modifications > 200 lignes sans test

### Fin de session
- [ ] Mettre à jour `PROGRESS.md`
- [ ] Push final
- [ ] Tag si phase complète
- [ ] Netlify vérifié (https://bicibogota.netlify.app)

---

## 🎓 Apprentissages du MVP

### Ce qui a super bien marché ✅

1. **Checkpoints fréquents**
   - Tag `checkpoint-2024-12-27` sauvé le projet
   - Zéro stress de "casser le code"

2. **Commits atomiques**
   - Facile de comprendre l'historique
   - Rollback précis si besoin

3. **Documentation vivante**
   - PROGRESS.md = journal de bord
   - ROADMAP = vision claire

4. **Tests immédiats**
   - Bug détecté tout de suite
   - Pas d'accumulation de dette technique

5. **Communication claire**
   - Validation avant action
   - Explications des commandes

### Ce qui pourrait être amélioré 🔄

1. **Tests automatisés** (optionnel pour MVP, mais utile après)
   - Playwright pour tests E2E
   - Jest pour tests unitaires

2. **Code review** (si équipe)
   - Pull requests au lieu de push direct
   - Review croisée avant merge

3. **CI/CD plus robuste**
   - Tests automatiques avant deploy
   - Rollback automatique si erreur

---

## 🚀 Résumé : La recette du succès

```
1. 🔖 CHECKPOINT avant chaque feature
2. 📝 PLANIFIER (5-10 min de réflexion)
3. 🔧 DÉVELOPPER par petits blocs (commits fréquents)
4. ✅ TESTER immédiatement
5. 📚 DOCUMENTER après chaque feature
6. 🏷️ TAG à la fin de chaque phase

= Workflow efficace + peu d'erreurs + code maintenable
```

---

**Créé le** : 27 décembre 2024  
**Basé sur** : Retour d'expérience MVP (27 déc 2024)  
**Applicable à** : Phases POST-MVP (Forum, i18n, Carte, Auth, etc.)  
**Taux de réussite attendu** : 95%+

---

## 📌 Quick Reference

**Commandes essentielles** :
```bash
# Checkpoint
git tag -a checkpoint-$(date +%Y-%m-%d)-[FEATURE] -m "Description"

# Commit propre
git commit -m "feat(scope): description courte"

# Test local
cd frontend && python3 -m http.server 8001

# Voir la diff
git diff HEAD~1

# Rollback si besoin
git reset --hard checkpoint-[NAME]
```

**Règles d'or** :
- ✅ Commit toutes les heures
- ✅ Push tous les jours
- ✅ Test après chaque modification
- ✅ Documentation à jour
- ✅ Checkpoints avant grosse feature
