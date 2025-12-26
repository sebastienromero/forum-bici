# 🔮 Phase 2 - Idées de fonctionnalités

**Document de brainstorming pour l'évolution de Rate Your Track Bogotá**

---

## 🎯 Priorités validées

### 1️⃣ **Authentification utilisateurs** (Priorité HAUTE)
**Durée estimée :** 1h30  
**Complexité :** Moyenne

**Fonctionnalités :**
- ✅ Connexion avec email/password (Supabase Auth)
- ✅ OAuth (Google, Facebook optionnel)
- ✅ Profil utilisateur (pseudo, photo, bio)
- ✅ Historique des avis créés
- ✅ Modifier/Supprimer ses propres avis

**Pourquoi c'est important :**
- Éviter le spam et les avis malveillants
- Permettre la modération communautaire
- Créer un sentiment d'appartenance
- Préparer les fonctionnalités sociales

---

### 2️⃣ **Forum communautaire** (Priorité HAUTE)
**Durée estimée :** 3-4h  
**Complexité :** Moyenne

**Fonctionnalités :**
- 💬 Discussions par piste (thread par segment)
- 📸 Upload de photos (état de la piste)
- 🚨 Signalement de problèmes (nids-de-poule, travaux, etc.)
- 👍 Système de votes (utile/pas utile)
- 🔔 Notifications (réponses, nouveaux problèmes sur ses pistes favorites)

**Tables Supabase nécessaires :**
```sql
CREATE TABLE forum_posts (
  id UUID PRIMARY KEY,
  segment_id INT REFERENCES ratings(segment_id),
  user_id UUID REFERENCES auth.users(id),
  title VARCHAR(200),
  content TEXT,
  image_url VARCHAR(500),
  is_issue BOOLEAN DEFAULT false,
  votes INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE forum_replies (
  id UUID PRIMARY KEY,
  post_id UUID REFERENCES forum_posts(id),
  user_id UUID REFERENCES auth.users(id),
  content TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

### 3️⃣ **Pistes souhaitées** (Priorité MOYENNE)
**Durée estimée :** 4-5h  
**Complexité :** Élevée

**Fonctionnalités :**
- 🗺️ Dessiner de nouvelles pistes sur la carte (outils de tracé)
- 📝 Justification (pourquoi cette piste est nécessaire)
- 🗳️ Vote communautaire (upvote/downvote)
- 📊 Classement des pistes les plus demandées
- 📧 Export PDF pour soumettre aux autorités

**Tables Supabase :**
```sql
CREATE TABLE wished_tracks (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  geometry JSONB, -- GeoJSON du tracé
  title VARCHAR(200),
  description TEXT,
  votes INT DEFAULT 0,
  status VARCHAR(50) DEFAULT 'proposed', -- proposed, in_review, approved, rejected
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE wished_tracks_votes (
  user_id UUID REFERENCES auth.users(id),
  track_id UUID REFERENCES wished_tracks(id),
  vote INT CHECK (vote IN (-1, 1)),
  PRIMARY KEY (user_id, track_id)
);
```

---

## 💡 Autres idées (Priorité BASSE)

### 🌟 Gamification
- Badges (Explorateur : 50 km notés, Expert : 100 avis, etc.)
- Leaderboard (top contributeurs)
- Niveaux d'utilisateur (Débutant → Expert)

### 📊 Analytics avancés
- Évolution de la qualité dans le temps
- Comparaison de quartiers
- Heatmap des zones problématiques
- Export CSV pour chercheurs

### 🌐 Internationalisation
- Interface en espagnol (priorité)
- Support anglais/français
- Adaptation à d'autres villes (Medellín, Cali, etc.)

### 📱 App mobile native
- React Native ou Flutter
- Mode hors ligne (caching)
- GPS tracking automatique
- Notifications push

### 🤖 Intelligence artificielle
- Détection automatique d'anomalies (photos)
- Prédiction de qualité (ML sur historique)
- Suggestions d'itinéraires personnalisés

---

## 🚧 Limitations actuelles à résoudre

### Technique
- ❌ Pas de pagination (problématique si 10 000+ avis)
- ❌ Pas de cache (rechargement complet à chaque visite)
- ❌ Pas de search/filtres avancés
- ❌ Pas de modération (spam possible)

### UX
- ❌ Interface uniquement en français (barrière pour cyclistes colombiens)
- ❌ Pas de tutoriel (les nouveaux utilisateurs peuvent être perdus)
- ❌ Formulaire de notation long (5 critères + commentaire)
- ❌ Pas de feedback visuel lors de la sauvegarde

### Données
- ❌ Segments parfois trop petits (100m)
- ❌ Pas de groupement automatique (piste complète)
- ❌ Données OSM parfois obsolètes

---

## 📅 Planning proposé (post-MVP)

### **Semaine 1-2 : Authentification**
- Setup Supabase Auth
- Pages login/signup
- Gestion de session
- Migration données existantes (anonymes → authentifiés)

### **Semaine 3-5 : Forum**
- Tables + API
- Interface discussions
- Upload d'images
- Système de votes

### **Semaine 6-8 : Pistes souhaitées**
- Outils de dessin
- Vote system
- Dashboard admin
- Export PDF

### **Semaine 9-10 : Polissage**
- Internationalisation (ES)
- Performance optimization
- Tests utilisateurs
- Documentation

---

## 🎯 Métriques de succès (Phase 2)

**Objectifs quantitatifs :**
- 500+ utilisateurs enregistrés (vs anonymes actuellement)
- 1000+ avis (vs 120 actuellement)
- 50+ discussions actives sur le forum
- 20+ pistes souhaitées proposées
- 5+ pistes souhaitées soumises aux autorités

**Objectifs qualitatifs :**
- Réduction du spam/abus
- Meilleure qualité des avis (modération)
- Sentiment communautaire fort
- Impact réel sur les décisions publiques

---

## 🛠️ Stack technique (évolution)

### Frontend
- **Actuel :** Vanilla JS
- **Futur :** Considérer React/Vue pour complexité croissante

### Backend
- **Actuel :** Supabase (PostgreSQL + API REST)
- **Futur :** Ajouter Cloud Functions pour logique métier complexe

### Mobile
- **Futur :** Progressive Web App (PWA) d'abord, puis app native si succès

---

## 💰 Monétisation (optionnel, long terme)

**Modèle freemium :**
- ✅ Gratuit pour utilisateurs individuels
- 💵 Premium pour organisations (mairie, associations cyclistes)
  - Accès aux analytics avancés
  - Export de données
  - API pour intégration

**Partenariats :**
- Sponsors (marques de vélos, équipements)
- Subventions publiques (mobilité durable)
- Recherche universitaire (accès aux données)

---

## 🤔 Questions ouvertes

1. **Faut-il limiter les avis anonymes après l'authentification ?**
   - Pro : Meilleure qualité
   - Con : Barrière à l'entrée

2. **Quelle langue prioriser : français ou espagnol ?**
   - Le site vise Bogotá → ES prioritaire
   - Mais développeur francophone → FR plus facile

3. **Faut-il modérer AVANT publication ou APRÈS signalement ?**
   - Avant = plus de contrôle, moins de spam
   - Après = plus de liberté, moins de charge

4. **Comment gérer les pistes qui n'existent pas encore dans OSM ?**
   - Permettre l'ajout manuel ?
   - Obliger à contribuer à OSM d'abord ?

---

**📝 Ce document évoluera avec les retours de la communauté !**
