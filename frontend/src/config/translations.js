// Système de traduction FR/ES pour Rate Your Track Bogotá

const translations = {
    fr: {
        // Header / Navigation
        siteTitle: "Rate Your Track Bogotá",
        darkMode: "Basculer mode nuit",
        navHome: "Accueil",
        navExisting: "Pistes existantes",
        navWished: "Pistes souhaitées",
        navForum: "Forum",
        navAbout: "À propos",
        
        // Page Accueil
        welcomeTitle: "🌍 Bienvenue sur Rate Your Track Bogotá",
        welcomeSubtitle: "Un site collaboratif pour améliorer les pistes cyclables de Bogotá !",
        
        // Section Hero - Boutons
        heroTitle: "🗺️ Évaluez les pistes",
        heroSubtitle: "Notez la sécurité, le calme, la qualité de l'air des pistes existantes",
        seeMapButton: "Voir la carte →",
        
        heroTitle2: "✨ Proposez des améliorations",
        heroSubtitle2: "Tracez de nouvelles pistes et votez pour celles des autres",
        proposeButton: "Proposer une piste →",
        
        heroTitle3: "💬 Participez au forum",
        heroSubtitle3: "Échangez avec la communauté sur la sécurité et les aménagements",
        joinForumButton: "Rejoindre le forum →",
        
        // Carte - Sélecteur de fond
        basemapLabel: "Fond de carte",
        basemapVoyager: "🗺️ Voyager",
        basemapNeutral: "🎨 Carte neutre",
        basemapStreet: "📍 Carte standard",
        
        // Critères de notation
        filterLabel: "Voir par critère",
        neutralView: "Vue neutre",
        basemapControl: "Fond de carte",
        hidePanel: "Cacher",
        criteria: {
            security: "Sécurité",
            noise: "Calme",
            air: "Qualité de l'air",
            flow: "Fluidité",
            inclusion: "Accessibilité",
            global: "Note moyenne"
        },
        
        // Panel de notation
        rateLabel: "Noter",
        ratingPanelTitle: "Noter 🚴",
        commentLabel: "💬 Commentaire",
        commentPlaceholder: "Partagez votre expérience sur cette piste...",
        submitButton: "Sauvegarder",
        resetButton: "Réinitialiser",
        
        // Pistes souhaitées
        wishedTitle: "✨ Pistes cyclables souhaitées",
        wishedSubtitle: "Proposez et votez pour de nouvelles pistes",
        wishedMapComingSoon: "Carte interactive à venir",
        wishedMapDescription: "Vous pourrez tracer vos pistes idéales directement sur la carte",
        wishedHowTitle: "📝 Comment ça marche ?",
        wishedStep1: "Cliquez sur la carte pour tracer votre piste idéale",
        wishedStep2: "Ajoutez une description et une justification",
        wishedStep3: "Votez pour les propositions des autres cyclistes",
        wishedStep4: "Les pistes les plus votées seront transmises à la municipalité",
        wishedPopularTitle: "🎯 Propositions populaires",
        wishedProposedBy: "Proposé par",
        wishedAgo: "Il y a",
        wishedDays: "jours",
        wishedVotes: "votes",
        wishedVoteButton: "👍 Voter pour cette piste",
        wishedComments: "commentaires",
        
        // Forum
        forumTitle: "💬 Forum communautaire",
        forumSubtitle: "Discussions sur la sécurité et les aménagements cyclables",
        newTopicButton: "➕ Nouveau sujet",
        forumSecurity: "Sécurité",
        forumSecurityDesc: "Discussions sur la sécurité des pistes cyclables",
        forumBy: "Par",
        forumReplies: "réponses",
        forumActive: "Actif",
        
        // Tooltips carte
        tooltipAverageRating: "Note moyenne",
        tooltipBasedOn: "Sur la base de",
        tooltipReviews: "avis",
        tooltipSecurity: "Sécurité",
        tooltipNoise: "Bruit",
        tooltipAir: "Qualité de l'air",
        tooltipFlow: "Fluidité",
        tooltipInclusion: "Inclusion",
        tooltipNoReviews: "Aucun avis pour cette portion",
        
        // À propos
        aboutTitle: "📋 À propos du projet",
        aboutObjective: "Objectif :",
        aboutObjectiveText: "Fédérer la communauté cycliste de Bogotá pour améliorer la sécurité et rendre le vélo encore plus attractif.",
        aboutMission: "🎯 Mission",
        aboutMissionItem1: "Améliorer la sécurité des cyclistes",
        aboutMissionItem2: "Encourager la participation citoyenne",
        aboutMissionItem3: "Promouvoir le vélo comme alternative à la voiture",
        aboutContact: "📧 Contact",
        aboutContactText: "Pour toute question :",
        
        // Console logs
        console: {
            ratingCreated: "✅ Avis créé",
            ratingsLoaded: "📊 {count} avis récupérés",
            errorCreating: "❌ Erreur création avis"
        }
    },
    
    es: {
        // Header / Navigation
        siteTitle: "Califica Tu Ciclovía Bogotá",
        darkMode: "Cambiar modo noche",
        navHome: "Inicio",
        navExisting: "Ciclovías existentes",
        navWished: "Ciclovías deseadas",
        navForum: "Foro",
        navAbout: "Acerca de",
        
        // Page Accueil
        welcomeTitle: "🌍 Bienvenido a Califica Tu Ciclovía Bogotá",
        welcomeSubtitle: "¡Un sitio colaborativo para mejorar las ciclovías de Bogotá!",
        
        // Section Hero - Boutons
        heroTitle: "🗺️ Evalúa las ciclovías",
        heroSubtitle: "Califica la seguridad, la tranquilidad, la calidad del aire de las ciclovías existentes",
        seeMapButton: "Ver el mapa →",
        
        heroTitle2: "✨ Propone mejoras",
        heroSubtitle2: "Traza nuevas ciclovías y vota por las de otros",
        proposeButton: "Proponer una ciclovía →",
        
        heroTitle3: "💬 Participa en el foro",
        heroSubtitle3: "Intercambia con la comunidad sobre seguridad y acondicionamientos",
        joinForumButton: "Unirse al foro →",
        
        // Carte - Sélecteur de fond
        basemapLabel: "Mapa base",
        basemapVoyager: "🗺️ Voyager",
        basemapNeutral: "🎨 Mapa neutral",
        basemapStreet: "📍 Mapa estándar",
        
        // Critères de notation
        filterLabel: "Filtrar por criterio",
        neutralView: "Vista neutra",
        basemapControl: "Mapa base",
        hidePanel: "Ocultar",
        criteria: {
            security: "Seguridad",
            noise: "Tranquilidad",
            air: "Calidad del aire",
            flow: "Fluidez",
            inclusion: "Accesibilidad",
            global: "Calificación promedio"
        },
        
        // Panel de notation
        rateLabel: "Calificar",
        ratingPanelTitle: "Calificar 🚴",
        commentLabel: "💬 Comentario",
        commentPlaceholder: "Comparte tu experiencia en esta ciclovía...",
        submitButton: "Guardar",
        resetButton: "Reiniciar",
        
        // Pistes souhaitées
        wishedTitle: "✨ Ciclovías deseadas",
        wishedSubtitle: "Propone y vota por nuevas ciclovías",
        wishedMapComingSoon: "Mapa interactivo próximamente",
        wishedMapDescription: "Podrás trazar tus ciclovías ideales directamente en el mapa",
        wishedHowTitle: "📝 ¿Cómo funciona?",
        wishedStep1: "Haz clic en el mapa para trazar tu ciclovía ideal",
        wishedStep2: "Agrega una descripción y justificación",
        wishedStep3: "Vota por las propuestas de otros ciclistas",
        wishedStep4: "Las ciclovías más votadas se enviarán al municipio",
        wishedPopularTitle: "🎯 Propuestas populares",
        wishedProposedBy: "Propuesto por",
        wishedAgo: "Hace",
        wishedDays: "días",
        wishedVotes: "votos",
        wishedVoteButton: "👍 Votar por esta ciclovía",
        wishedComments: "comentarios",
        
        // Forum
        forumTitle: "💬 Foro comunitario",
        forumSubtitle: "Discusiones sobre seguridad y acondicionamientos ciclistas",
        newTopicButton: "➕ Nuevo tema",
        forumSecurity: "Seguridad",
        forumSecurityDesc: "Discusiones sobre la seguridad de las ciclovías",
        forumBy: "Por",
        forumReplies: "respuestas",
        forumActive: "Activo",
        
        // Tooltips carte
        tooltipAverageRating: "Calificación promedio",
        tooltipBasedOn: "Basado en",
        tooltipReviews: "calificaciones",
        tooltipSecurity: "Seguridad",
        tooltipNoise: "Ruido",
        tooltipAir: "Calidad del aire",
        tooltipFlow: "Fluidez",
        tooltipInclusion: "Inclusión",
        tooltipNoReviews: "Sin calificaciones para esta porción",
        
        // À propos
        forumTitle: "💬 Foro comunitario",
        forumSubtitle: "Discusiones sobre seguridad y acondicionamientos ciclistas",
        newTopicButton: "➕ Nuevo tema",
        
        // À propos
        aboutTitle: "📋 Acerca del proyecto",
        aboutObjective: "Objetivo:",
        aboutObjectiveText: "Unir la comunidad ciclista de Bogotá para mejorar la seguridad y hacer el ciclismo aún más atractivo.",
        aboutMission: "🎯 Misión",
        aboutMissionItem1: "Mejorar la seguridad de los ciclistas",
        aboutMissionItem2: "Fomentar la participación ciudadana",
        aboutMissionItem3: "Promover la bicicleta como alternativa al automóvil",
        aboutContact: "📧 Contacto",
        aboutContactText: "Para cualquier pregunta:",
        
        // Console logs
        console: {
            ratingCreated: "✅ Calificación creada",
            ratingsLoaded: "📊 {count} calificaciones recuperadas",
            errorCreating: "❌ Error al crear calificación"
        }
    }
};
