# 📝 Git Workflow - Bonnes Pratiques

**Projet :** Rate Your Track Bogotá  
**Date :** 5 janvier 2026  
**Objectif :** Optimiser les builds Netlify et maintenir un workflow efficace

---

## 🎯 Objectifs

1. **Réduire le nombre de builds Netlify** (< 300 crédits/mois)
2. **Maintenir un historique Git propre et lisible**
3. **Workflow fluide** sans sacrifier la vitesse de développement

---

## ⚠️ Problème identifié

### **Phase MVP (26-31 décembre 2025)**

```
❌ 45 builds/jour
❌ 1350 builds/mois estimés
❌ 225/300 crédits utilisés en 10 jours
❌ Risque de dépassement
```

**Cause :** Commits/push très fréquents pendant développement intensif

---

## ✅ Solutions et bonnes pratiques

### **1. Grouper les commits**

#### ❌ **Mauvaise pratique (avant)**

```bash
# 9h00 - Fix typo
git add frontend/public/index.html
git commit -m "fix typo"
git push origin TEST-MVP
→ Build 1 (10 sec) 💸

# 9h15 - Autre typo
git add frontend/public/index.html
git commit -m "fix autre typo"
git push origin TEST-MVP
→ Build 2 (10 sec) 💸

# 9h30 - Change couleur
git add frontend/src/css/main.css
git commit -m "change color"
git push origin TEST-MVP
→ Build 3 (10 sec) 💸

# Résultat : 3 builds en 30 min = 6 builds/heure
```

#### ✅ **Bonne pratique (recommandée)**

```bash
# 9h00-11h00 - Travail en local (2h)
git add frontend/public/index.html
git commit -m "fix: correct typos in homepage"

git add frontend/src/css/main.css
git commit -m "style: improve button colors"

git add frontend/public/index.html
git commit -m "feat: add forum link in nav"

# 11h00 - 1 seul push groupé
git push origin TEST-MVP
→ Build 1 (10 sec) pour 3 commits 💰

# Résultat : 1 build en 2h = 0.5 builds/heure
# Économie : -83% de builds !
```

---

### **2. Rythme de push recommandé**

| Phase projet | Push/jour | Builds/mois | Crédits/mois |
|--------------|-----------|-------------|--------------|
| **Maintenance** | 1-3 | 30-90 | 5-15 min ✅ |
| **Développement normal** | 5-10 | 150-300 | 25-50 min ✅ |
| **Feature intensive** | 15-20 | 450-600 | 75-100 min ⚠️ |
| **MVP hardcore** (éviter) | 40-50 | 1200-1500 | 200-250 min ❌ |

**Objectif : 5-10 push/jour maximum** ✅

---

### **3. Workflow quotidien recommandé**

#### **Matin (2-3h de dev)**

```bash
# Travail local
git add .
git commit -m "feat: add modal popup"
# ... continue à coder ...

git add .
git commit -m "style: improve modal design"
# ... continue à coder ...

# Pause café - Push du matin
git push origin TEST-MVP
→ 1 build
```

#### **Après-midi (3-4h de dev)**

```bash
# Travail local
git add .
git commit -m "fix: modal button alignment"
# ... continue à coder ...

git add .
git commit -m "feat: add close button"
# ... continue à coder ...

# Fin de journée - Push de l'après-midi
git push origin TEST-MVP
→ 1 build
```

**Total : 2 builds/jour au lieu de 40-50** 💰

---

### **4. Stratégies de commits**

#### **Commits atomiques**

```bash
# 1 commit = 1 changement logique

✅ git commit -m "feat: add forum button"
✅ git commit -m "fix: prevent rating when panel closed"
✅ git commit -m "style: improve mobile responsive"

❌ git commit -m "various fixes" (trop vague)
❌ git commit -m "WIP" (work in progress - à éviter sur main)
```

#### **Messages de commit conventionnels**

```bash
feat: nouvelle fonctionnalité
fix: correction de bug
style: changement CSS/design
refactor: refactoring code
docs: documentation
test: ajout tests
chore: maintenance (build, config)

# Exemples :
git commit -m "feat: add forum modal with comment form"
git commit -m "fix: prevent route tracing when rating panel closed"
git commit -m "style: improve button hover states"
git commit -m "docs: update README with deployment instructions"
```

---

### **5. Utiliser les branches pour features**

#### **Développement de grosses features**

```bash
# Créer une branche de feature
git checkout -b feature/forum-system

# Travailler librement (commits fréquents OK)
git commit -m "wip: forum modal structure"
git commit -m "wip: add comment form"
git commit -m "wip: connect to Supabase"
# ... 20-30 commits ...

# Squash commits avant merge (optionnel)
git rebase -i main

# Merge dans TEST-MVP
git checkout TEST-MVP
git merge feature/forum-system
git push origin TEST-MVP
→ 1 seul build pour toute la feature !
```

**Avantage :** Travail isolé + 1 seul build au merge ✅

---

### **6. Git stash pour WIP**

```bash
# Tu codes, mais pas prêt à commit
# Besoin de changer de branche urgente

# Sauvegarder travail en cours
git stash

# Faire autre chose
git checkout autre-branche
# ...

# Retourner et récupérer
git checkout TEST-MVP
git stash pop

# Continue à coder
```

---

## 📊 Monitoring builds

### **Vérifier utilisation Netlify**

```bash
# Toutes les semaines :
1. https://app.netlify.com
2. Site → Usage
3. Vérifier : ___/300 crédits

Si > 150 → Réduire fréquence push
Si > 250 → Problème, investiguer
```

### **Compter tes builds/jour**

```bash
# Via Netlify Deploys
1. Aller sur Deploys
2. Compter lignes aujourd'hui
3. Objectif : < 10 builds/jour

# Via Git (tes push)
git log --oneline --since="yesterday" --author="ton-email"
```

---

## 🚨 Situations d'urgence

### **Approche limite (> 280 crédits)**

```bash
# Reste 5 jours avant reset (25 du mois)
# 20 crédits restants

Option 1 : Pause auto-deploy temporaire
- Netlify → Stop builds
- Travailler en local
- Déployer manuellement si urgent

Option 2 : Migration Cloudflare Pages
- 30 min de migration
- Bandwidth + builds illimités
```

---

## ✅ Checklist quotidienne

**Avant de pusher :**

- [ ] Plusieurs commits groupés ? (optimal)
- [ ] Messages de commit clairs ?
- [ ] Test local réussi ?
- [ ] Déjà push aujourd'hui ? (combien de fois ?)
- [ ] Si > 5 push/jour → Attendre 1-2h

**Fin de semaine :**

- [ ] Vérifier crédits Netlify : ___/300
- [ ] Builds/jour moyen : ___ (objectif < 10)
- [ ] Ajuster workflow si nécessaire

---

## 📈 Résultats attendus

### **Avant optimisation (Phase MVP)**

```
45 builds/jour
1350 builds/mois
225 crédits utilisés en 10 jours
→ Risque dépassement
```

### **Après optimisation (Maintenance)**

```
5-10 builds/jour
150-300 builds/mois
25-50 crédits/mois
→ Tranquillité totale ✅
```

---

## 🔗 Ressources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Best Practices](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project)
- [Netlify Build Minutes](https://docs.netlify.com/accounts-and-billing/billing-faq/#build-minutes)

---

**Dernière mise à jour :** 5 janvier 2026  
**Statut :** ✅ Guide actif - À suivre pour optimiser les builds
