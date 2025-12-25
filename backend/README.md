# 🔧 Backend - Rate Your Track Bogotá

## ⚡ Pas de serveur custom !

**Ce projet utilise Supabase comme Backend-as-a-Service.**

Cela signifie qu'il n'y a **PAS de code serveur Node.js/Express** à maintenir.

---

## 🗄️ Base de données

**Type:** PostgreSQL (via Supabase)  
**Hébergement:** Cloud Supabase  
**Accès:** API REST automatique

---

## 📁 Structure

```
backend/
├── README.md           # Ce fichier
└── database/
    └── schema.sql      # Schéma de la base de données
```

---

## 🚀 Supabase fournit automatiquement

- ✅ Base de données PostgreSQL
- ✅ API REST pour CRUD (Create, Read, Update, Delete)
- ✅ Authentification utilisateurs
- ✅ Stockage de fichiers
- ✅ Interface admin web
- ✅ Backups automatiques
- ✅ Hébergement inclus

---

## 📋 Comment recréer la base de données ?

Si vous devez recréer la base depuis zéro :

1. Connectez-vous à votre projet Supabase
2. Allez dans **SQL Editor**
3. Copiez-collez le contenu de `database/schema.sql`
4. Cliquez sur **Run**

✅ La base de données est créée !

---

## 🔗 Connexion depuis le frontend

Le code de connexion se trouve dans :
```
frontend/src/services/api.js
```

Il utilise la bibliothèque `@supabase/supabase-js` pour communiquer avec Supabase.

---

## 📚 Documentation Supabase

- Site officiel: https://supabase.com
- Documentation: https://supabase.com/docs
- API Reference: https://supabase.com/docs/reference/javascript

---

## 🔐 Credentials

Les identifiants Supabase (URL + clé API) sont stockés dans :
```
docs/CREDENTIALS-SUPABASE.txt
```

⚠️ **Ce fichier est dans `.gitignore` et ne doit JAMAIS être commité !**
