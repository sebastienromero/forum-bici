# 🚀 Déploiement sur Netlify - Rate Your Track Bogotá

## 📦 Méthode 1 : Drag & Drop (La plus simple - 2 minutes)

### Étapes :

1. **Va sur Netlify :** https://app.netlify.com/drop
2. **Ouvre le Finder** et navigue vers :
   ```
   /Users/sromero/Documents/Projects/forum-bici-bogota/frontend/public
   ```
3. **Glisse-dépose** tout le dossier `public` sur la zone Netlify
4. **Attends 30 secondes** → Ton site est en ligne ! ✅

### Résultat :
- URL temporaire : `random-name-123456.netlify.app`
- Tu pourras changer le nom ensuite

---

## 🔗 Méthode 2 : Via GitHub (Automatique)

### Étapes :

1. **Push ton code sur GitHub :**
   ```bash
   cd /Users/sromero/Documents/Projects/forum-bici-bogota
   git push origin TEST-MVP
   ```

2. **Sur Netlify :**
   - Clique "New site from Git"
   - Sélectionne "GitHub"
   - Choisis le repo `forum-bici`
   - Branche : `TEST-MVP`
   - Build settings : Déjà configurés dans `netlify.toml` ✅
   - Clique "Deploy site"

3. **Résultat :**
   - Site déployé automatiquement
   - Chaque push = nouveau déploiement automatique

---

## 🎨 Personnaliser le nom du site

Après déploiement :

1. Va sur ton site Netlify
2. Clique "Site settings"
3. Clique "Change site name"
4. Entre ton nom : `bici-bogota` (ou autre disponible)
5. **Nouvelle URL :** `bici-bogota.netlify.app` ✅

---

## ✅ Vérifications post-déploiement

- [ ] Site accessible sur `ton-nom.netlify.app`
- [ ] Carte s'affiche correctement
- [ ] Avis chargés depuis Supabase (console → 93 avis)
- [ ] Segments colorés sur la carte
- [ ] Formulaire de notation fonctionne
- [ ] Nouveaux avis se sauvegardent dans Supabase

---

## 🐛 Problèmes courants

### La carte ne s'affiche pas
- Vérifier que les fichiers JS sont bien chargés (F12 → Network)
- Vérifier les chemins relatifs dans `index.html`

### Erreur CORS avec Supabase
- Ajouter `ton-nom.netlify.app` dans Supabase → Settings → API → Allowed origins
- URL actuelle : `https://xdvrfrogmfkntuluypdx.supabase.co`

### Les avis ne se chargent pas
- Vérifier la clé API Supabase dans `index.html` (ligne 29)
- Vérifier la console pour erreurs 401/403

---

## 📊 Statistiques de déploiement

- **Build time :** ~10 secondes (site statique)
- **Deploy time :** ~30 secondes
- **Total :** ~1 minute de la commande au site en ligne ! 🚀

---

## 🔄 Mises à jour futures

**Méthode automatique (si connecté à GitHub) :**
```bash
git add -A
git commit -m "feat: nouvelle fonctionnalité"
git push origin TEST-MVP
```
→ Netlify redéploie automatiquement en 1 minute ✅

**Méthode manuelle (drag & drop) :**
- Re-glisser le dossier `public` sur Netlify
- Nouveau déploiement en 30 secondes

---

## 🎯 Résultat final

✅ Site accessible : `https://bici-bogota.netlify.app`  
✅ HTTPS automatique (cadenas vert)  
✅ CDN mondial (rapide partout)  
✅ Synchronisation Supabase fonctionnelle  
✅ Partageable avec tout le monde ! 🌍
