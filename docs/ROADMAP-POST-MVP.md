# 🚀 Roadmap POST-MVP - Rate Your Track Bogotá

**Date de création** : 27 décembre 2024  
**Checkpoint de départ** : `checkpoint-2024-12-27`  
**Objectif** : Terminer le site et le rendre 100% fonctionnel

---

## 🎯 Ordre de priorités

### **PHASE 1 : Forum fonctionnel** 💬 (priorité 1)
**Durée estimée** : 3-4h  
**Pourquoi en premier ?**
- ✅ Engagement communautaire immédiat
- ✅ Feedback précieux des cyclistes
- ✅ Viralité (partage des discussions)
- ✅ Complémentaire à la notation des pistes

**Tâches** :
- [ ] Créer table Supabase `forum_topics`
  - Colonnes : id, title, content, category, author, created_at, views, replies_count
- [ ] Créer table Supabase `forum_replies`
  - Colonnes : id, topic_id, content, author, created_at
- [ ] Formulaire "Nouveau sujet" (modal ou page dédiée)
- [ ] Affichage dynamique des sujets (remplacer le mock data)
- [ ] Page détail d'un sujet avec réponses
- [ ] Système de réponses (formulaire + affichage)
- [ ] Compteur de vues automatique
- [ ] Filtrage par catégorie (Sécurité, Infrastructures, Événements, Général)

**Fichiers à modifier** :
- `frontend/public/index.html` (ligne ~123-242)
- Nouvelle table Supabase (via Dashboard)

---

### **PHASE 2 : Traduction en espagnol** 🇨🇴 (priorité 2)
**Durée estimée** : 2-3h  
**Pourquoi en 2e ?**
- ✅ **CRITIQUE** : Le site est pour Bogotá (99% des users parlent espagnol)
- ✅ Accessibilité maximale
- ✅ Crédibilité auprès des institutions colombiennes
- ✅ Facile à implémenter (substitution de textes)

**Approche recommandée** :
- **Option A (Simple - Recommandée pour MVP)** : Créer un fichier `i18n.js` avec les traductions
- **Option B (Pro)** : Utiliser une lib comme i18next
- **Option C (Quick)** : Bouton toggle FR/ES qui remplace les textes

**Structure i18n.js** :
```javascript
const translations = {
  fr: {
    nav: {
      home: "Accueil",
      existing: "Pistes existantes",
      wished: "Pistes souhaitées",
      forum: "Forum",
      about: "À propos"
    },
    // ...
  },
  es: {
    nav: {
      home: "Inicio",
      existing: "Ciclorrutas existentes",
      wished: "Ciclorrutas deseadas",
      forum: "Foro",
      about: "Acerca de"
    },
    // ...
  }
};
```

**Tâches** :
- [ ] Créer fichier `frontend/src/config/i18n.js`
- [ ] Extraire tous les textes du HTML
- [ ] Traduire FR → ES (utiliser DeepL ou ChatGPT)
- [ ] Ajouter bouton toggle langue (header)
- [ ] Sauvegarder préférence utilisateur (localStorage)
- [ ] Mettre ES par défaut (détecter navigateur ou géolocalisation)

**Fichiers à modifier** :
- `frontend/public/index.html` (tous les textes)
- `frontend/src/config/i18n.js` (nouveau)

---

### **PHASE 3 : Carte pistes souhaitées** 🗺️ (priorité 3)
**Durée estimée** : 2-3h  
**Pourquoi en 3e ?**
- ✅ Complète la promesse du MVP
- ✅ Fonctionnalité différenciante
- ✅ Utilise déjà Leaflet (code à réutiliser)

**Tâches** :
- [ ] Créer table Supabase `wished_tracks`
  - Colonnes : id, geometry (JSON), author, description, votes, created_at
- [ ] Activer le mode dessin sur la carte (Leaflet.draw ou polylines cliquables)
- [ ] Modal pour décrire la piste proposée
- [ ] Sauvegarder les tracés dans Supabase
- [ ] Système de votes (+1/-1) par piste
- [ ] Afficher les pistes les plus votées (top 10)
- [ ] Afficher toutes les pistes proposées avec couleur selon votes

**Fichiers à modifier** :
- `frontend/public/index.html` (ligne ~335-470)
- Nouvelle table Supabase

---

### **PHASE 4 : Authentification** 👤 (priorité 4)
**Durée estimée** : 2-3h  
**Pourquoi en 4e ?**
- ✅ Anti-spam pour le forum et votes
- ✅ Profil utilisateur (historique)
- ✅ Modération possible
- ✅ Supabase Auth = simple à implémenter

**Tâches** :
- [ ] Activer Supabase Auth (Email/Password + Google OAuth)
- [ ] Bouton "Se connecter" dans le header
- [ ] Modal de connexion/inscription
- [ ] Associer avis/posts/votes à l'utilisateur
- [ ] Page profil (historique des contributions)
- [ ] Modifier schéma DB pour ajouter `user_id` partout
- [ ] Afficher nom d'utilisateur dans forum/avis

**Fichiers à modifier** :
- `frontend/public/index.html` (header + modals)
- Toutes les tables Supabase (ajouter `user_id`)

---

### **PHASE 5 : Recherche + Filtres** 🔍 (priorité 5)
**Durée estimée** : 1-2h  
**Pourquoi en 5e ?**
- ✅ Améliore l'UX une fois qu'il y a beaucoup de données
- ✅ Aide à trouver les pistes pertinentes
- ✅ Moins critique que les fonctionnalités précédentes

**Tâches** :
- [ ] Barre de recherche dans header
- [ ] Recherche de pistes par nom/adresse (géocodage)
- [ ] Filtres sur la carte :
  - Note minimale (ex: > 3.5/5)
  - Critère spécifique (ex: seulement sécurité > 4)
  - Quartier/zone géographique
- [ ] Tri des résultats (meilleures notes, plus récentes, etc.)

**Fichiers à modifier** :
- `frontend/public/index.html` (header + carte existantes)

---

### **PHASE 6 : Dashboard statistiques** 📊 (priorité 6)
**Durée estimée** : 3-4h  
**Pourquoi en dernier ?**
- ✅ Nice to have mais pas critique
- ✅ Nécessite beaucoup de données (attendre engagement)
- ✅ Utile pour rapports institutionnels

**Tâches** :
- [ ] Créer onglet "Statistiques" (ou section dans "À propos")
- [ ] Graphiques avec Chart.js ou Recharts :
  - Top 10 pistes mieux notées
  - Top 10 pistes dangereuses
  - Évolution des notes dans le temps
  - Heatmap des zones bien/mal notées
- [ ] Nombre total d'avis par jour/semaine
- [ ] Export PDF pour rapports officiels

**Fichiers à modifier** :
- `frontend/public/index.html` (nouvelle section)
- Ajouter Chart.js via CDN

---

## 📦 Phases bonus (optionnelles)

### **PHASE 7 : PWA (Progressive Web App)** 📱
**Durée estimée** : 2h  
**Tâches** :
- [ ] Créer `manifest.json`
- [ ] Service Worker pour cache offline
- [ ] Icônes app (192x192, 512x512)
- [ ] Notification push (nouveaux posts forum)

### **PHASE 8 : Modération** 🛡️
**Durée estimée** : 2h  
**Tâches** :
- [ ] Système de signalement (spam, abus)
- [ ] Interface admin (liste des signalements)
- [ ] Blocage d'utilisateurs

### **PHASE 9 : Gamification** 🎮
**Durée estimée** : 3h  
**Tâches** :
- [ ] Badges (1er avis, 10 avis, 50 avis, etc.)
- [ ] Leaderboard des contributeurs
- [ ] Points pour chaque action

---

## 📅 Planning prévisionnel

```
┌─────────────────────────────────────────────────┐
│ SEMAINE 1 (27 déc - 2 jan)                     │
│ - PHASE 1: Forum (4h)                           │
│ - PHASE 2: Traduction ES (3h)                   │
│ - PHASE 3: Carte pistes souhaitées (3h)        │
│ TOTAL: 10h                                      │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ SEMAINE 2 (3-9 jan)                             │
│ - PHASE 4: Auth (3h)                            │
│ - PHASE 5: Recherche (2h)                       │
│ - PHASE 6: Stats (4h)                           │
│ TOTAL: 9h                                       │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ SEMAINE 3 (10-16 jan)                           │
│ - Tests utilisateurs                            │
│ - Corrections bugs                              │
│ - Optimisations performances                    │
│ - Phase bonus si temps (PWA, modération, etc.)  │
└─────────────────────────────────────────────────┘
```

---

## ✅ Checklist globale

### Phase 1 - Forum
- [ ] Tables Supabase créées
- [ ] Formulaire nouveau sujet
- [ ] Affichage dynamique
- [ ] Système réponses
- [ ] Filtrage catégories

### Phase 2 - Traduction
- [ ] Fichier i18n.js
- [ ] Tous textes traduits
- [ ] Bouton toggle langue
- [ ] ES par défaut

### Phase 3 - Pistes souhaitées
- [ ] Table Supabase
- [ ] Mode dessin activé
- [ ] Sauvegarde tracés
- [ ] Système votes
- [ ] Affichage top pistes

### Phase 4 - Auth
- [ ] Supabase Auth activé
- [ ] Login/signup modal
- [ ] user_id dans toutes tables
- [ ] Page profil

### Phase 5 - Recherche
- [ ] Barre recherche
- [ ] Filtres carte
- [ ] Tri résultats

### Phase 6 - Stats
- [ ] Graphiques Chart.js
- [ ] Dashboard
- [ ] Export PDF

---

## 🎯 Objectif final

**Site 100% fonctionnel avec :**
- ✅ Notation pistes existantes (FAIT - MVP)
- ✅ Forum communautaire (PHASE 1)
- ✅ Site bilingue FR/ES (PHASE 2)
- ✅ Pistes souhaitées + votes (PHASE 3)
- ✅ Authentification (PHASE 4)
- ✅ Recherche avancée (PHASE 5)
- ✅ Statistiques visuelles (PHASE 6)

**Déploiement :**
- Netlify (auto-deploy depuis GitHub)
- URL finale : https://bicibogota.netlify.app

**Lancement public prévu :** Mi-janvier 2025

---

## 📝 Notes

- **Checkpoint sauvegarde** : `checkpoint-2024-12-27` (tag Git)
- **Branche de travail** : `TEST-MVP`
- **Documentation** : Mettre à jour `PROGRESS.md` après chaque phase
- **Tests** : Vérifier sur mobile après chaque phase

---

**Créé le** : 27 décembre 2024  
**Dernière mise à jour** : 27 décembre 2024  
**Statut** : 📋 Planification validée - Prêt à démarrer Phase 1
