# 🚴‍♀️ Rate ---

## 💡 Philosophie du projet

> Ce projet est conçu pour être développé **en vibe coding**, avec l'aide de GitHub Copilot.  
> L'objectif est que le développeur (moi) soit **guidé pas à pas**, car je suis encore **novice**.  
> Je souhaite que Copilot m'indique :
> - quand sauvegarder mes progrès (`git add .`, `git commit -m "message"`, `git push`),  
> - quand tester localement le code,  
> - quand passer à l'étape suivante,  
> - et qu'il garde toujours en tête que je préfère **les interfaces simples et propres**, sans complexité inutile.

🧑‍💻 Note à GitHub Copilot :
Ce projet doit être développé de manière progressive, avec des explications claires à chaque étape.
L'utilisateur est débutant.
Tu dois expliquer chaque commande, signaler quand sauvegarder, tester, et passer à l'étape suivante.
Ne jamais supposer que tout est évident.

---

## ⏱️ Méthodologie de développement

### 🎯 **UNE AMÉLIORATION PAR JOUR**

En tant que développeur débutant avec peu de temps libre, j'ai adopté une méthodologie de **progression quotidienne régulière** :

**📋 OBJECTIF QUOTIDIEN :**
- ✅ **Une amélioration concrète par jour** → Ajouter/corriger UNE fonctionnalité précise
- ✅ **Résultat visible** → Changement immédiatement perceptible sur le site
- ✅ **Fonctionnalité complète** → Ce qui est fait marche parfaitement
- ✅ **Progression claire** → Sentiment d'avancement quotidien vers l'objectif final

**🔄 WORKFLOW TYPE D'UNE SESSION QUOTIDIENNE :**

**⏱️ PHASE 1 : DÉVELOPPEMENT**
- Ouvrir NOTES.md et choisir 1 point précis de la TODO liste
- Implémenter la fonctionnalité de A à Z
- Tester que ça marche correctement

**⏱️ PHASE 2 : VALIDATION & NETTOYAGE**
- Vérifier que le site fonctionne globalement
- Supprimer code/fichiers devenus inutiles
- S'assurer qu'aucune régression

**⏱️ PHASE 3 : PROCÉDURE DE FIN DE SESSION**

Quand je dis **"fin"**, suivre cette procédure en 7 étapes :

1. **🔍 J'identifie les prochaines corrections** → Je teste le site et je dis les petits soucis à corriger pour la prochaine session (l'assistant peut m'aider à repérer)
2. **📋 Je sauvegarde le code actuel** → Cliquer sur le bouton "Keep" pour sauvegarder l'état
3. **🧹 Tu nettoies tout** → L'assistant supprime le code inutile, fichiers obsolètes, commentaires debug, logs console, etc.
4. **🧪 Je teste après nettoyage** → Vérifier que tout fonctionne encore
5. **📋 Je resauvegarde** → Recliquer sur "Keep" après nettoyage
6. **📝 Tu mets à jour NOTES.md** → Documenter l'état actuel + prochaine amélioration identifiée pour demain
7. **💾 Git workflow final** →
   ```bash
   git add .
   git commit -m "✨ [Date]: [résumé de l'amélioration du jour]"
   git push
   ```

**💫 PRINCIPE FONDAMENTAL :**
> "Un petit progrès chaque jour vaut mieux qu'une grosse session épisodique. Je ne quitte jamais une session avec quelque chose d'inachevé."

**🎯 EXEMPLE DE RÉSULTAT ATTENDU :**
> "✅ Amélioration du 16 nov 2025 terminée ! Le panneau de notation est maintenant compact et tous les boutons sont visibles. Le site est plus user-friendly. Demain : améliorer le zoom initial de la carte."

**📝 AVANTAGES DE CETTE APPROCHE :**
- ✅ **Motivation maintenue** : Routine quotidienne, habitude positive
- ✅ **Progrès constant** : 365 améliorations par an !
- ✅ **Pas de frustration** : Objectif raisonnable et atteignable chaque jour
- ✅ **Continuité assurée** : NOTES.md permet de reprendre facilement le lendemain
- ✅ **Code propre** : Nettoyage systématique
- ✅ **Historique clair** : Chaque commit = une amélioration datée

---

## 🤝 Instructions pour l'assistant IA

Si tu m'aides sur ce projet, garde en tête :

1. **Je suis débutant** → Explique chaque étape clairement
2. **Une amélioration par jour** → Propose une tâche réalisable en une session quotidienne
3. **Résultat concret obligatoire** → Chaque jour doit apporter une amélioration visible
4. **Guide-moi étape par étape** → Dis-moi quand tester, sauvegarder, passer à l'étape suivante
5. **Procédure "fin" structurée** → Suivre les 7 étapes : Analyse → Keep → Nettoyage → Test → Keep → Notes → Git
6. **Interface simple** → Pas de complexité inutile, design minimaliste
7. **Une tâche à la fois** → Ne jamais laisser quelque chose d'inachevé
8. **Routine quotidienne** → M'encourager à maintenir le rythme d'une amélioration par jour

### 🎯 **DÉCLENCHEUR DE FIN DE SESSION**
**Quand je dis : "fin" ou "protocole de fin de session"**
→ Tu commences immédiatement la procédure 7 étapes sans attendre confirmation
→ Référence : PHASE 3 ci-dessus

## 🌍 Objectif général

Créer un **site collaboratif** pour les cyclistes de Bogotá, combinant :
- 🗣️ un **forum de discussion** (inspiré des forums classiques comme Jeuxvideo.com),
- 🗺️ deux **cartes interactives** où les utilisateurs peuvent :
  - évaluer les pistes cyclables existantes,
  - proposer de nouveaux tracés ou améliorations,
- 🎯 le tout dans une **interface claire, minimaliste et facile d’accès**, pour encourager la participation citoyenne.

Le but est de **fédérer la communauté cycliste**, **améliorer la sécurité** et **rendre le vélo plus attractif** que la voiture individuelle à Bogotá.

---

## 💡 Philosophie du projet

> Ce projet est conçu pour être développé **en vibe coding**, avec l’aide de GitHub Copilot.  
> L’objectif est que le développeur (moi) soit **guidé pas à pas**, car je suis encore **novice**.  
> Je souhaite que Copilot m’indique :
> - quand sauvegarder mes progrès (`git add .`, `git commit -m "message"`, `git push`),  
> - quand tester localement le code,  
> - quand passer à l’étape suivante,  
> - et qu’il garde toujours en tête que je préfère **les interfaces simples et propres**, sans complexité inutile.

🧑‍💻 Note à GitHub Copilot :
Ce projet doit être développé de manière progressive, avec des explications claires à chaque étape.
L’utilisateur est débutant.
Tu dois expliquer chaque commande, signaler quand sauvegarder, tester, et passer à l’étape suivante.
Ne jamais supposer que tout est évident.

---

## 🧱 Structure du site

Le site comporte **4 grandes sections** accessibles depuis la barre de navigation :

1. **Forum**  
   - Discussions entre utilisateurs.  
   - Possibilité de créer, répondre et **épingler** des sujets.  
   - Le modérateur (moi) peut mettre en avant certaines conversations importantes.  
   - Interface inspirée des forums de **Jeuxvideo.com** ou **Discourse**.  

2. **Carte collaborative – Pistes existantes**  
   - Les utilisateurs notent les tronçons selon **5 critères** (notation de 1 à 5) :
     - 🛡️ Sécurité  
     - 🔊 Bruit ambiant  
     - 🌬️ Qualité de l’air  
     - ⚡ Fluidité de circulation  
     - 👥 Adapté à tous (enfants / seniors)  
   - Les notes sont sauvegardées par segment et visualisées via un **code couleur clair** :
     - 🔴 1–2 = Mauvais  
     - 🟡 3 = Moyen  
     - 🟢 4–5 = Bon  
   - ✅ **Les pistes doivent pouvoir être importées automatiquement depuis Internet** :
     - soit à partir du site **CyclOSM** (OpenStreetMap spécialisé vélo),
     - soit à partir du **site officiel des pistes cyclables de Bogotá** (format GeoJSON, KML ou GPX si disponible).

3. **Carte collaborative – Pistes souhaitées**  
   - Les utilisateurs peuvent tracer sur la carte les pistes qu’ils aimeraient voir créées.  
   - Chaque proposition peut être **commentée et notée** par d’autres utilisateurs.  

4. **À propos / Contact**  
   - Présentation du projet, des objectifs citoyens, et contact par e-mail.  

---

## 🎨 Design

- **Style minimaliste** : fond clair, contraste élevé, typographie sobre.  
- **Police :** DM Sans.  
- **Interface fluide et lisible**, inspirée des forums classiques.  
- **Navigation intuitive**, sans superflu.  
- **Responsive design** (mobile / tablette / desktop).  

---

## 🏗️ Architecture technique

### **Frontend**
- React + Vite  
- TypeScript  
- Tailwind CSS (pour un design rapide et cohérent)  
- Leaflet.js (pour les cartes interactives)  

### **Backend**
- Flask (Python)  
- SQLite pour stocker :
  - les notes et commentaires des utilisateurs,
  - les messages et topics du forum.  
- Fichiers GeoJSON pour les données géographiques (`pistes.geojson`, `notes.json`).  

### **Importation de données externes**
- Intégration d’une **fonction d’import automatique** depuis :
  - **CyclOSM / OpenStreetMap**, via leur API ou des exports GeoJSON,
  - **Site officiel de la Mairie de Bogotá** (si jeux de données disponibles).  
- Les pistes importées seront stockées localement dans un dossier `/data/pistes_importées`.

### **Déploiement**
- Le site doit être **déployable facilement** :
  - **Frontend** via GitHub Pages ou Vercel,  
  - **Backend Flask** via Render ou Railway.  
- Le guide de déploiement sera rédigé à la fin du développement (`DEPLOY.md`).

---

## 🗃️ Structure des données

### Exemple : notes sur les pistes existantes

```json
{
  "segment_id": [
    {
      "security": 4,
      "noise": 3,
      "air": 5,
      "flow": 4,
      "inclusion": 5,
      "comment": "Bonne piste mais un peu bruyante",
      "timestamp": "2025-10-25T15:00:00Z",
      "user": "Anonyme"
    }
  ]
}
