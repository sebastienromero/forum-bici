# 🎵 Méthode Vibe Coding - Guide complet

**La méthode qui nous a permis de passer de 0 à un site en production en 8 heures** 🚀

---

## 📖 Table des matières

1. [Qu'est-ce que le Vibe Coding ?](#quest-ce-que-le-vibe-coding-)
2. [Principes fondamentaux](#principes-fondamentaux)
3. [Workflow en 12 étapes](#workflow-en-12-étapes)
4. [Outils et stack technique](#outils-et-stack-technique)
5. [Bonnes pratiques](#bonnes-pratiques)
6. [Pièges à éviter](#pièges-à-éviter)
7. [Template de projet](#template-de-projet)

---

## 🎯 Qu'est-ce que le Vibe Coding ?

**Définition :** Une méthode de développement **progressive, incrémentale et documentée** qui permet de construire un MVP fonctionnel rapidement sans sacrifier la qualité.

### Caractéristiques clés :

✅ **Progression par étapes atomiques** (1 fonctionnalité = 1 étape)  
✅ **Tests immédiat après chaque étape** (validation continue)  
✅ **Commits fréquents** (git commit après chaque étape validée)  
✅ **Documentation en temps réel** (PROGRESS.md mis à jour en permanence)  
✅ **Pas de refactoring avant le MVP** (quick & dirty acceptable temporairement)  
✅ **Focus sur le résultat** (site live > code parfait)  

### Différences avec d'autres méthodes :

| Méthode | Vibe Coding | Agile/Scrum | Waterfall |
|---------|-------------|-------------|-----------|
| **Durée sprint** | 1-8h (session continue) | 2 semaines | Tout le projet |
| **Planification** | Minimale (liste étapes) | Détaillée (user stories) | Très détaillée |
| **Documentation** | En temps réel | Après sprint | En fin de projet |
| **Tests** | Après chaque étape | En fin de sprint | En fin de cycle |
| **Refactoring** | Phase 2 | Continu | Jamais |
| **Objectif** | MVP fonctionnel rapide | Livraisons régulières | Produit complet |

---

## 🧩 Principes fondamentaux

### 1. **Progression incrémentale** 📈

**Règle d'or :** Chaque étape doit ajouter UNE fonctionnalité visible/testable.

```
❌ MAUVAIS : "ÉTAPE 5 : Faire le backend"
✅ BON : "ÉTAPE 5 : Importer module API Supabase dans index.html et tester avec console.log"
```

**Pourquoi ça marche :**
- On voit le progrès immédiatement
- On détecte les bugs tôt
- Sentiment d'accomplissement constant (motivation ++)

---

### 2. **Tests immédiats** 🧪

**Règle :** Après CHAQUE étape, on teste et on valide.

**Workflow test :**
```bash
1. Coder la fonctionnalité
2. Tester manuellement (console.log, UI, etc.)
3. Vérifier que ça marche ✅
4. Commit
5. Étape suivante
```

**Exemple concret (notre projet) :**
```javascript
// ÉTAPE 5 : Test de l'API
console.log('✅ Module API Supabase chargé');
const { data, error } = await window.supabase.from('ratings').select('*');
console.log('📊', data.length, 'avis récupérés'); // ✅ Validation immédiate
```

---

### 3. **Commits atomiques fréquents** 📦

**Règle :** 1 étape validée = 1 commit immédiat.

**Format de commit message :**
```
<type>: <description courte>

<détails optionnels>
<statistiques/résultats>
```

**Types de commits :**
- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Documentation
- `test:` Ajout de tests
- `refactor:` Refactorisation (Phase 2 uniquement)

**Exemples de bons commits (notre projet) :**
```bash
✅ feat: enrich ratings table with 7 columns
✅ feat: import Supabase API module in index.html
✅ feat: load ratings on page startup
✅ feat: save ratings to Supabase from UI
✅ feat: display map colors from Supabase ratings
```

---

### 4. **Documentation en temps réel** 📝

**Outil clé :** `docs/PROGRESS.md`

**Structure :**
```markdown
## 📊 Progression Globale
[Barre de progression visuelle]

## 🎯 Phase Actuelle
[Étape en cours]

## ✅ Étapes Complétées
### ÉTAPE X : Titre (durée estimée)
- [ ] X.1 - Sous-tâche
- [ ] X.2 - Sous-tâche
**Durée réelle :** X min
**Status :** ✅ COMPLÉTÉE
```

**Pourquoi c'est crucial :**
- Vision claire de l'avancement
- Motivation (voir la barre de progression grimper)
- Historique pour futures sessions
- Base pour documentation finale

---

### 5. **Quick & Dirty autorisé (Phase 1)** 💨

**Permission donnée :**
- ✅ Code inline (pas de modules séparés)
- ✅ Variables globales (window.*)
- ✅ Pas de tests unitaires
- ✅ Pas d'optimisation
- ✅ Hardcoded values acceptables

**Mais INTERDICTION de :**
- ❌ Sacrifier la sécurité (SQL injection, XSS)
- ❌ Ignorer les erreurs (try/catch manquant)
- ❌ Données non persistées (localStorage seul sans backend)

**Philosophie :**
> "Le code parfait qui n'existe pas vaut 0. Le code imparfait qui fonctionne vaut 1."

**Note :** Le refactoring viendra en Phase 2 (voir `docs/PHASE2-IDEAS.md`)

---

### 6. **Focus sur le résultat** 🎯

**Question à se poser constamment :**
> "Est-ce que cette tâche me rapproche du MVP fonctionnel ?"

**Si NON → Reporter en Phase 2**

**Exemples concrets :**

| Tâche | MVP ? | Décision |
|-------|-------|----------|
| Afficher la carte | ✅ Oui | FAIRE maintenant |
| Sauvegarder avis | ✅ Oui | FAIRE maintenant |
| Animation smooth sur zoom | ❌ Non | Phase 2 |
| Thème dark mode | ❌ Non | Phase 2 |
| Export PDF des avis | ❌ Non | Phase 2 |
| Tests unitaires Jest | ❌ Non | Phase 2 |

---

## 🗺️ Workflow en 12 étapes

### Structure type d'un projet Vibe Coding

```
ÉTAPE 0 : Préparation (10-15 min)
├── Définir l'objectif MVP
├── Lister les fonctionnalités essentielles
├── Choisir la stack technique
└── Créer le repo Git

ÉTAPE 1-2 : Setup infrastructure (20-30 min)
├── Backend/Database (Supabase, Firebase, etc.)
├── Frontend initial (HTML/React/Vue)
└── Vérifier connexion Backend ↔ Frontend

ÉTAPE 3 : Première fonctionnalité visible (30 min)
├── Afficher des données
├── Ou créer une donnée simple
└── TEST : Voir le résultat dans l'UI

ÉTAPE 4-7 : Fonctionnalités core (2-4h)
├── CRUD complet (Create, Read, Update, Delete)
├── Logique métier principale
└── Synchronisation données

ÉTAPE 8 : UI/UX basique (30 min)
├── Couleurs/styles minimalistes
├── Feedback utilisateur (messages succès/erreur)
└── Responsive de base

ÉTAPE 9 : Tests locaux (30 min)
├── Tester tous les scénarios
├── Corriger bugs critiques
└── Vérifier que tout fonctionne

ÉTAPE 10 : Déploiement (15-30 min)
├── Netlify / Vercel / GitHub Pages
├── Configuration DNS (optionnel)
└── Site LIVE !

ÉTAPE 11 : Tests production (20 min)
├── Tester depuis plusieurs appareils
├── Partager avec 2-3 personnes
└── Vérifier la synchronisation

ÉTAPE 12 : Finalisation (30 min)
├── Documentation (README.md)
├── Roadmap Phase 2
└── 🎉 CÉLÉBRATION !
```

---

## 🛠️ Outils et stack technique

### Stack recommandée pour un MVP rapide

#### **Backend as a Service (BaaS)**
- **Supabase** ⭐ (PostgreSQL + API REST + Auth)
- Firebase (NoSQL + temps réel)
- Appwrite (open source)

**Pourquoi BaaS ?**
- Pas de serveur à gérer
- API REST auto-générée
- Gratuit jusqu'à volumes élevés
- Authentification clé en main

#### **Frontend**
- **Vanilla JS** ⭐ (pour petits projets)
- React (si app complexe)
- Vue.js (compromis simplicité/puissance)

**Pourquoi Vanilla JS pour MVP ?**
- Pas de build process
- Pas de dépendances
- Chargement ultra-rapide
- Debug facile (console.log everywhere)

#### **Hébergement**
- **Netlify** ⭐ (drag & drop, CDN, HTTPS auto)
- Vercel (similaire, excellent pour Next.js)
- GitHub Pages (gratuit, simple)

#### **Carte interactive (si besoin)**
- **Leaflet.js** ⭐ (léger, simple)
- Mapbox (plus moderne, mais payant au-delà de seuil)
- Google Maps (bien mais coûteux)

#### **Outils de développement**
- **VS Code** (IDE)
- **Chrome DevTools** (debug)
- **Git** (version control)
- **Python `http.server`** (serveur local simple)

---

## ✅ Bonnes pratiques

### 1. **Démarrer chaque session avec PROGRESS.md** 📋

```bash
# Ouvrir PROGRESS.md
# Lire "Phase Actuelle"
# Identifier la prochaine tâche
# Coder
# Cocher la tâche
# Commit
```

**Avantage :** Jamais perdu, toujours savoir quoi faire.

---

### 2. **Tester après CHAQUE modification** 🧪

```javascript
// Après CHAQUE changement :
1. Recharger la page (Cmd+R)
2. Ouvrir la console (F12)
3. Vérifier les logs
4. Tester la fonctionnalité manuellement
```

**Astuce :** Ajouter des `console.log` partout avec emojis :
```javascript
console.log('🔄 Chargement des avis...');
console.log('✅ 66 avis chargés');
console.log('❌ Erreur:', error);
```

---

### 3. **Créer un fichier COMMANDES.md** 📝

Documenter TOUTES les commandes qu'on utilise :
```markdown
# Lancer le serveur
cd frontend && python3 -m http.server 8001

# Commit Git
git add -A && git commit -m "message"

# Vérifier Supabase
Dashboard → https://supabase.com/dashboard/...
```

**Pourquoi :** Ne jamais perdre de temps à chercher une commande.

---

### 4. **Commits fréquents (toutes les 15-30 min)** 📦

```bash
# Règle : Dès qu'une étape fonctionne
git add -A
git commit -m "feat: description de ce qui marche"
git push
```

**Avantage :** 
- Sauvegarde continue
- Retour en arrière facile si bug
- Historique clair du projet

---

### 5. **Séparer les fichiers de config sensibles** 🔐

```bash
# Créer docs/CREDENTIALS-SUPABASE.txt
# Ajouter au .gitignore
echo "docs/CREDENTIALS-*.txt" >> .gitignore
```

**Contenu :**
```
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Utiliser dans le code :**
```javascript
// Copier depuis CREDENTIALS-SUPABASE.txt (jamais commit)
const SUPABASE_URL = 'https://xxx.supabase.co';
const SUPABASE_KEY = 'eyJhbGci...';
```

---

### 6. **Déployer TÔT (après étape 7-8)** 🚀

**Ne PAS attendre la perfection !**

```
Étape 7 : Fonctionnalité core fonctionne
    ↓
Étape 8 : UI basique
    ↓
DÉPLOYER en production (même si incomplet)
    ↓
Partager avec 2-3 testeurs
    ↓
Collecter feedback
    ↓
Étapes 9-12 : Finitions
```

**Avantage :** Feedback réel AVANT de finir → évite de coder des trucs inutiles.

---

## ⚠️ Pièges à éviter

### 1. **Sur-planification** 📋❌

```
❌ MAUVAIS : Passer 2h à faire un Figma parfait
✅ BON : Dessiner 3 wireframes au crayon (5 min)

❌ MAUVAIS : Écrire 50 user stories
✅ BON : Lister 5-7 fonctionnalités essentielles
```

**Règle :** Max 15 min de planning au début, puis CODER.

---

### 2. **Perfectionnisme prématuré** 💎❌

```
❌ MAUVAIS : "Je vais d'abord créer une architecture modulaire propre"
✅ BON : "Je vais faire marcher la base, je refactoriserai en Phase 2"

❌ MAUVAIS : "Il faut des tests unitaires dès le début"
✅ BON : "Je teste manuellement, les tests auto viendront après MVP"
```

**Citation clé :**
> "Premature optimization is the root of all evil" - Donald Knuth

---

### 3. **Feature creep** 🌊❌

```
❌ MAUVAIS : "Ah tiens, je pourrais aussi ajouter un dark mode..."
✅ BON : "Cette feature n'est pas dans le MVP → PHASE2-IDEAS.md"

❌ MAUVAIS : "Et si on faisait aussi une app mobile ?"
✅ BON : "MVP = site web responsive. App native = Phase 3."
```

**Astuce :** Créer `docs/PHASE2-IDEAS.md` dès le début et y DUMPER toutes les idées non-MVP.

---

### 4. **Paralysie par choix technique** 🤔❌

```
❌ MAUVAIS : "React ou Vue ? Webpack ou Vite ? Jest ou Vitest ?"
✅ BON : "Vanilla JS + aucun build. On optimisera plus tard."

❌ MAUVAIS : "Quelle architecture ? MVC ? MVVM ?"
✅ BON : "Tout dans un fichier. Architecture = Phase 2."
```

**Règle :** Choisir la stack la plus SIMPLE, pas la plus tendance.

---

### 5. **Ignorer les tests manuels** 🧪❌

```
❌ MAUVAIS : Coder 10 étapes sans tester
✅ BON : Tester après CHAQUE étape

❌ MAUVAIS : "Ça devrait marcher" → Push sans vérifier
✅ BON : "Je teste dans 3 navigateurs avant de commit"
```

**Conseil :** Ouvrir Chrome DevTools en permanence (F12).

---

### 6. **Déploiement en dernière minute** 🚀❌

```
❌ MAUVAIS : Coder tout en local, déployer à la fin → Bugs en prod
✅ BON : Déployer après étape 8 → Tester en prod progressivement
```

**Problèmes fréquents détectés en prod :**
- Chemins relatifs cassés (`../src/` qui marche en local, pas en prod)
- CORS issues
- HTTPS manquant
- Taille de fichier trop grande

---

## 📋 Template de projet

### Structure de dossiers recommandée

```
mon-projet-vibe/
├── .git/
├── .gitignore
├── README.md                    # Documentation utilisateur
├── netlify.toml                 # Config déploiement
├── package.json                 # (optionnel si npm)
│
├── frontend/
│   ├── public/
│   │   └── index.html          # Page principale
│   ├── src/
│   │   ├── css/
│   │   │   └── main.css
│   │   ├── js/
│   │   │   └── app.js          # (si séparé du HTML)
│   │   ├── config/
│   │   │   └── constants.js
│   │   └── data/
│   │       └── sample-data.js
│   └── build.sh                # Script de build (si nécessaire)
│
├── backend/
│   └── database/
│       └── schema.sql          # Schéma Supabase/PostgreSQL
│
└── docs/
    ├── PROGRESS.md             # ⭐ FICHIER CLÉ - Suivi étapes
    ├── COMMANDES.md            # Commandes fréquentes
    ├── DEPLOIEMENT.md          # Guide déploiement
    ├── PHASE2-IDEAS.md         # Roadmap futures features
    ├── CREDENTIALS-*.txt       # Secrets (gitignored)
    └── VIBE-CODING-METHOD.md   # Cette méthode !
```

---

### Template PROGRESS.md

```markdown
# 📊 Suivi d'Avancement - [Nom du projet] MVP

**Date de démarrage :** [Date]
**Branche :** [Nom branche]
**Objectif :** [Décrire le MVP en 1 phrase]

---

## 🎯 Phase Actuelle

**ÉTAPE X : [Titre]** [Status]

**Prochaine étape :** ÉTAPE Y - [Titre]

---

## 📊 Progression Globale

\```
████████░░░░░░░░░░░░░░░░ 33% (Étapes 0-3 complétées / 12 totales)

✅ ÉTAPE 0 : Préparation
✅ ÉTAPE 1 : Setup backend
✅ ÉTAPE 2 : Setup frontend
✅ ÉTAPE 3 : Première fonctionnalité
🔄 ÉTAPE 4 : CRUD complet
⏳ ÉTAPE 5 : ...
...
⏳ ÉTAPE 12 : MVP finalisé
\```

---

## ✅ Étapes Complétées

### ✅ ÉTAPE 0 : Préparation (15 min) ✅ COMPLÉTÉE

**Objectif :** Définir le scope du MVP

- [x] 0.1 - Définir objectif MVP
- [x] 0.2 - Lister fonctionnalités essentielles
- [x] 0.3 - Choisir stack technique
- [x] 0.4 - Créer repo Git

**Durée réelle :** 12 min
**Status :** ✅ COMPLÉTÉE

---

### 🔄 ÉTAPE 1 : Setup backend (30 min)

**Objectif :** Configurer Supabase

- [x] 1.1 - Créer projet Supabase
- [x] 1.2 - Créer table principale
- [ ] 1.3 - Tester API avec Postman
- [ ] 1.4 - Noter credentials dans CREDENTIALS.txt

**Durée estimée :** 30 min

---

[... répéter pour toutes les étapes]
```

---

### Template .gitignore

```gitignore
# Dependencies
node_modules/
package-lock.json

# Credentials
docs/CREDENTIALS-*.txt
.env
.env.local

# Build
dist/
build/
.cache/

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo

# Logs
*.log
npm-debug.log*

# Temporary
tmp/
temp/
```

---

### Template netlify.toml

```toml
[build]
  base = "frontend"
  publish = "public"
  command = "bash build.sh"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
```

---

## 🎯 Checklist de démarrage d'un nouveau projet Vibe

### Avant de coder (10 min)

- [ ] Définir l'objectif MVP en 1 phrase
- [ ] Lister 5-7 fonctionnalités essentielles
- [ ] Choisir la stack (Backend, Frontend, Hosting)
- [ ] Créer le repo Git
- [ ] Copier la structure de dossiers template
- [ ] Créer `docs/PROGRESS.md` avec les 12 étapes
- [ ] Créer `docs/COMMANDES.md`
- [ ] Créer `docs/PHASE2-IDEAS.md`

### Pendant le dev (6-8h)

- [ ] Suivre PROGRESS.md étape par étape
- [ ] Tester après CHAQUE étape
- [ ] Commit après chaque validation
- [ ] Mettre à jour PROGRESS.md en temps réel
- [ ] Ajouter les nouvelles idées dans PHASE2-IDEAS.md
- [ ] Déployer dès l'étape 8

### Après le MVP (30 min)

- [ ] Mettre à jour README.md
- [ ] Compléter PROGRESS.md (100%)
- [ ] Partager avec testeurs
- [ ] Commit final : "MVP completed"
- [ ] 🎉 Célébrer !

---

## 📊 Métriques de succès

### Un projet Vibe Coding réussi :

✅ **Temps :** MVP fonctionnel en 6-10 heures (1-2 sessions)  
✅ **Commits :** 15-25 commits bien documentés  
✅ **Tests :** Toutes les fonctionnalités testées manuellement  
✅ **Déploiement :** Site LIVE et accessible publiquement  
✅ **Documentation :** README + PROGRESS complets  
✅ **Coût :** 0€ (services gratuits)  

### Indicateurs de qualité :

- ⭐ 0 bugs critiques en production
- ⭐ Temps de chargement < 3 secondes
- ⭐ Site responsive (mobile + desktop)
- ⭐ HTTPS activé
- ⭐ Prêt à être partagé avec des utilisateurs réels

---

## 🚀 Exemples de projets adaptés au Vibe Coding

### ✅ Projets PARFAITS pour Vibe Coding :

1. **Landing page interactive** (formulaire + backend)
2. **Todo app collaborative** (CRUD + temps réel)
3. **Carte collaborative** (Leaflet + annotations)
4. **Blog personnel** (CMS headless + frontend)
5. **Dashboard analytics** (API + graphiques)
6. **Annuaire/répertoire** (liste + filtres + recherche)
7. **Outil de notation/review** (comme notre projet !)
8. **Quiz/sondage** (questions + résultats)

### ❌ Projets PAS adaptés au Vibe Coding :

1. **Application bancaire** (sécurité critique)
2. **Réseau social complet** (trop complexe pour MVP)
3. **Jeu vidéo multiplayer** (architecture complexe)
4. **ERP d'entreprise** (trop de features)
5. **App nécessitant ML/IA** (infrastructure lourde)

---

## 💡 Conseils finaux

### 1. **Commencer petit**

> "Un petit projet terminé vaut mieux qu'un grand projet abandonné."

**Première fois :** Choisir un projet simple (3-4 fonctionnalités max)  
**Deuxième fois :** Augmenter la complexité  
**Troisième fois :** Tu maîtrises la méthode !

---

### 2. **Accepter l'imperfection**

```
Version 1.0 : Moche mais fonctionnel ✅
Version 2.0 : Beau et optimisé ⏳
```

**Le MVP n'a PAS besoin d'être parfait.** Il doit juste MARCHER.

---

### 3. **Partager tôt**

**Dès l'étape 10 (site déployé) :**
- Partager avec 2-3 personnes de confiance
- Collecter leurs retours
- Corriger les bugs critiques
- Ignorer les suggestions "nice to have"

---

### 4. **Célébrer les victoires**

**Après chaque étape complétée :**
- Prendre 30 secondes pour apprécier le progrès
- Mettre à jour la barre de progression
- Voir le % augmenter

**Après le MVP :**
- 🎉 Célébrer dignement (bière, pause, partage social)
- Noter ce qui a bien marché
- Noter ce qui peut être amélioré

---

### 5. **Documenter pour ton futur toi**

> "Dans 6 mois, tu ne te souviendras plus comment ça marche."

**Documentation minimale requise :**
- README.md : Comment utiliser le site
- COMMANDES.md : Comment lancer en local
- PROGRESS.md : Historique du projet
- PHASE2-IDEAS.md : Où tu veux aller

---

## 🔗 Ressources utiles

### Services recommandés (tous gratuits pour MVP)

- **Backend :** [Supabase](https://supabase.com) | [Firebase](https://firebase.google.com)
- **Hosting :** [Netlify](https://netlify.com) | [Vercel](https://vercel.com)
- **Cartes :** [Leaflet.js](https://leafletjs.com) | [OpenStreetMap](https://openstreetmap.org)
- **Icons :** [Font Awesome](https://fontawesome.com) | [Heroicons](https://heroicons.com)
- **Fonts :** [Google Fonts](https://fonts.google.com)

### Templates & Starters

- **HTML/CSS :** [HTML5 Boilerplate](https://html5boilerplate.com)
- **React :** [Create React App](https://create-react-app.dev)
- **Vue :** [Vue CLI](https://cli.vuejs.org)

### Apprentissage

- **Git :** [Learn Git Branching](https://learngitbranching.js.org)
- **Markdown :** [Markdown Guide](https://markdownguide.org)
- **DevTools :** [Chrome DevTools Docs](https://developer.chrome.com/docs/devtools)

---

## 📝 Résumé en 10 points

1. ✅ **Lister 12 étapes** dans PROGRESS.md
2. ✅ **Coder par petits incréments** (1 étape = 1 feature)
3. ✅ **Tester après chaque étape** (console.log + UI)
4. ✅ **Commit immédiatement** après validation
5. ✅ **Documenter en temps réel** (PROGRESS.md)
6. ✅ **Accepter le code imparfait** (refactoring = Phase 2)
7. ✅ **Déployer tôt** (après étape 8)
8. ✅ **Partager avec testeurs** dès que possible
9. ✅ **Noter les idées Phase 2** (éviter feature creep)
10. ✅ **Célébrer le MVP** 🎉

---

## 🎊 Conclusion

La méthode Vibe Coding nous a permis de créer **Rate Your Track Bogotá** :
- ⏱️ En **8 heures** (une session)
- 🚀 Site **LIVE** et **fonctionnel**
- 📊 **120+ avis** en base de données
- 💰 **0€** de coût
- 📝 **Documentation complète**

**Cette méthode fonctionne.** Applique-la à ton prochain projet ! 🔥

---

**Questions ? Suggestions d'amélioration de cette méthode ?**

📧 [Créer une issue GitHub](https://github.com/sebastienromero/forum-bici/issues)

---

**Happy Vibe Coding! 🎵🚀**

*Document créé le 25 décembre 2025*  
*Basé sur le projet Rate Your Track Bogotá*  
*Version 1.0*
