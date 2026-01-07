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
        wishedWeek: "semaine",
        
        // Propositions de démo
        demo1Title: "Extension de la Ciclorruta de la Carrera 7",
        demo1Author: "María G.",
        demo1Desc: "Prolonger la piste de la Carrera 7 jusqu'à la Calle 170. Cette zone est très fréquentée par les cyclistes mais manque d'infrastructure sécurisée.",
        demo1Tag1: "📏 3.5 km",
        demo1Tag2: "🏢 Usaquén",
        demo1Tag3: "⭐ Prioritaire",
        
        demo2Title: "Connexion Unicentro - Parque de la 93",
        demo2Author: "Carlos M.",
        demo2Desc: "Créer une piste sécurisée entre Unicentro et le Parque de la 93. Actuellement, il faut emprunter des rues dangereuses avec beaucoup de trafic.",
        demo2Tag1: "📏 2.1 km",
        demo2Tag2: "🏢 Chapinero",
        
        demo3Title: "Piste protégée sur Avenida Boyacá",
        demo3Author: "Ana R.",
        demo3Desc: "Installer une piste séparée physiquement sur l'Avenida Boyacá entre la Calle 80 et la Calle 127. Cette avenue est très dangereuse pour les cyclistes.",
        demo3Tag1: "📏 4.7 km",
        demo3Tag2: "🏢 Engativá",
        demo3Tag3: "🛡️ Sécurité",
        
        wishedProposeButton: "✏️ Proposer une nouvelle piste",
        wishedProposeAlert: "Fonctionnalité en cours de développement 🚧\n\nBientôt vous pourrez :\n- Tracer votre piste sur la carte\n- Ajouter une description\n- Justifier votre proposition",
        
        // Forum - Catégories et discussions
        forumInfrastructure: "Infrastructures",
        forumInfrastructureDesc: "Propositions d'amélioration des infrastructures",
        forumEvents: "Événements",
        forumEventsDesc: "Sorties et événements cyclistes",
        forumGeneral: "Discussions générales",
        forumGeneralDesc: "Tout ce qui concerne le vélo à Bogotá",
        
        // Forum - Sujets de démo
        forumTopic1: "Carrera 7 : Nids de poule dangereux",
        forumTopic1Time: "Aujourd'hui à 14:23",
        forumTopic2: "Éclairage insuffisant sur Calle 26",
        forumTopic2Time: "Hier à 18:45",
        forumTopic3: "Plus de parkings vélo nécessaires",
        forumTopic3Time: "Il y a 2 jours",
        forumTopic4: "Ciclovía du dimanche - qui vient ?",
        forumTopic4Time: "Il y a 3 heures",
        forumTopic5: "Conseils pour cyclistes débutants",
        forumTopic5Time: "Il y a 1 jour",
        forumPopular: "Populaire",
        
        // Forum - Stats
        forumTopics: "Sujets",
        forumMessages: "Messages",
        forumMembers: "Membres",
        
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
        tooltipComments: "Commentaires",
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
        siteTitle: "Califica Tu Ciclorruta Bogotá",
        darkMode: "Cambiar modo noche",
        navHome: "Inicio",
        navExisting: "Ciclorrutas existentes",
        navWished: "Ciclorrutas deseadas",
        navForum: "Foro",
        navAbout: "Acerca de",
        
        // Page Accueil
        welcomeTitle: "🌍 Bienvenido a Califica Tu Ciclorruta Bogotá",
        welcomeSubtitle: "¡Un sitio colaborativo para mejorar las ciclorrutas de Bogotá!",
        
        // Section Hero - Boutons
        heroTitle: "🗺️ Evalúa las ciclorrutas",
        heroSubtitle: "Califica la seguridad, la tranquilidad, la calidad del aire de las ciclorrutas existentes",
        seeMapButton: "Ver el mapa →",
        
        heroTitle2: "✨ Propone mejoras",
        heroSubtitle2: "Traza nuevas ciclorrutas y vota por las de otros",
        proposeButton: "Proponer una ciclorruta →",
        
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
        commentPlaceholder: "Comparte tu experiencia en esta ciclorruta...",
        submitButton: "Guardar",
        resetButton: "Reiniciar",
        
        // Pistes souhaitées
        wishedTitle: "✨ Ciclorrutas deseadas",
        wishedSubtitle: "Propone y vota por nuevas ciclorrutas",
        wishedMapComingSoon: "Mapa interactivo próximamente",
        wishedMapDescription: "Podrás trazar tus ciclorrutas ideales directamente en el mapa",
        wishedHowTitle: "📝 ¿Cómo funciona?",
        wishedStep1: "Haz clic en el mapa para trazar tu ciclorruta ideal",
        wishedStep2: "Agrega una descripción y justificación",
        wishedStep3: "Vota por las propuestas de otros ciclistas",
        wishedStep4: "Las ciclorrutas más votadas se enviarán al municipio",
        wishedPopularTitle: "🎯 Propuestas populares",
        wishedProposedBy: "Propuesto por",
        wishedAgo: "Hace",
        wishedDays: "días",
        wishedVotes: "votos",
        wishedVoteButton: "👍 Votar por esta ciclorruta",
        wishedComments: "comentarios",
        wishedWeek: "semana",
        
        // Propositions de démo
        demo1Title: "Extensión de la Ciclorruta de la Carrera 7",
        demo1Author: "María G.",
        demo1Desc: "Extender la ciclorruta de la Carrera 7 hasta la Calle 170. Esta zona es muy frecuentada por ciclistas pero carece de infraestructura segura.",
        demo1Tag1: "📏 3.5 km",
        demo1Tag2: "🏢 Usaquén",
        demo1Tag3: "⭐ Prioritaria",
        
        demo2Title: "Conexión Unicentro - Parque de la 93",
        demo2Author: "Carlos M.",
        demo2Desc: "Crear una ciclorruta segura entre Unicentro y el Parque de la 93. Actualmente, hay que tomar calles peligrosas con mucho tráfico.",
        demo2Tag1: "📏 2.1 km",
        demo2Tag2: "🏢 Chapinero",
        
        demo3Title: "Ciclorruta protegida en la Avenida Boyacá",
        demo3Author: "Ana R.",
        demo3Desc: "Instalar una ciclorruta físicamente separada en la Avenida Boyacá entre la Calle 80 y la Calle 127. Esta avenida es muy peligrosa para los ciclistas.",
        demo3Tag1: "📏 4.7 km",
        demo3Tag2: "🏢 Engativá",
        demo3Tag3: "🛡️ Seguridad",
        
        wishedProposeButton: "✏️ Proponer una nueva ciclorruta",
        wishedProposeAlert: "Funcionalidad en desarrollo 🚧\n\nPronto podrás:\n- Trazar tu ciclorruta en el mapa\n- Agregar una descripción\n- Justificar tu propuesta",
        
        // Forum - Catégories et discussions
        forumInfrastructure: "Infraestructuras",
        forumInfrastructureDesc: "Propuestas de mejora de infraestructuras",
        forumEvents: "Eventos",
        forumEventsDesc: "Salidas y eventos ciclistas",
        forumGeneral: "Discusiones generales",
        forumGeneralDesc: "Todo lo relacionado con la bicicleta en Bogotá",
        
        // Forum - Sujets de démo
        forumTopic1: "Carrera 7: Baches peligrosos",
        forumTopic1Time: "Hoy a las 14:23",
        forumTopic2: "Iluminación insuficiente en Calle 26",
        forumTopic2Time: "Ayer a las 18:45",
        forumTopic3: "Se necesitan más parqueaderos para bicicletas",
        forumTopic3Time: "Hace 2 días",
        forumTopic4: "Ciclovía del domingo - ¿quién viene?",
        forumTopic4Time: "Hace 3 horas",
        forumTopic5: "Consejos para ciclistas principiantes",
        forumTopic5Time: "Hace 1 día",
        forumPopular: "Popular",
        
        // Forum - Stats
        forumTopics: "Temas",
        forumMessages: "Mensajes",
        forumMembers: "Miembros",
        
        // Forum
        forumTitle: "💬 Foro comunitario",
        forumSubtitle: "Discusiones sobre seguridad y acondicionamientos ciclistas",
        newTopicButton: "➕ Nuevo tema",
        forumSecurity: "Seguridad",
        forumSecurityDesc: "Discusiones sobre la seguridad de las ciclorrutas",
        forumBy: "Por",
        forumReplies: "respuestas",
        forumActive: "Activo",
        
        // Tooltips carte
        tooltipAverageRating: "Calificación promedio",
        tooltipBasedOn: "Basado en",
        tooltipReviews: "calificaciones",
        tooltipComments: "Comentarios",
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
