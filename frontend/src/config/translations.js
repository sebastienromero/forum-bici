// frontend/src/config/translations.js
// Système de traduction FR/ES pour Rate Your Track Bogotá

const translations = {
    fr: {
        // Header
        siteTitle: "Rate Your Track Bogotá",
        
        // Navigation / Menu
        darkMode: "Basculer mode nuit",
        
        // Section Hero
        heroTitle: "🗺️ Évaluez les pistes",
        heroSubtitle: "Notez la sécurité, le calme, la qualité de l'air des pistes existantes",
        
        // Critères de notation
        filterLabel: "Filtrer par critère:",
        criteria: {
            security: "Sécurité",
            noise: "Calme",
            air: "Qualité de l'air",
            flow: "Qualité du revêtement",
            inclusion: "Largeur de la piste",
            global: "Note moyenne"
        },
        
        // Panel de notation
        rateLabel: "Noter",
        ratingPanelTitle: "Noter 🚴",
        commentLabel: "💬 Commentaire",
        commentPlaceholder: "Décrivez votre expérience...",
        submitButton: "💾 Sauvegarder",
        
        // Forum (aperçu)
        forumCategoryTitle: "Sécurité",
        forumCategoryDesc: "Discussions sur la sécurité des pistes cyclables",
        forumTopicExample1: "Éclairage insuffisant sur Calle 26",
        forumTopicExample2: "Plus de parkings vélo nécessaires",
        popularBadge: "Populaire",
        
        // Propositions
        propositionsTitle: "🎯 Propositions populaires",
        priorityBadge: "⭐ Prioritaire",
        securityBadge: "🛡️ Sécurité",
        commentsCount: "💬 {count} commentaires",
        
        // À propos
        aboutObjective: "Fédérer la communauté cycliste de Bogotá pour améliorer la sécurité et rendre le vélo encore plus attractif.",
        aboutGoal1: "Améliorer la sécurité des cyclistes",
        
        // Messages (utilisés dans JS)
        messages: {
            success: {
                ratingSaved: "✅ Avis enregistré avec succès",
                thankYou: "✅ Merci pour votre contribution"
            },
            error: {
                saveFailed: "❌ Erreur lors de l'enregistrement",
                fillAllFields: "⚠️ Veuillez remplir tous les champs",
                selectSegment: "⚠️ Veuillez sélectionner un segment"
            },
            loading: {
                loading: "🔄 Chargement...",
                loadingRatings: "📊 Chargement des avis...",
                loadingMap: "🗺️ Chargement de la carte..."
            }
        },
        
        // Console (debug)
        console: {
            ratingCreated: "✅ Avis créé",
            ratingsLoaded: "📊 {count} avis récupérés",
            transformingRatings: "🎨 Transformation des avis",
            errorCreatingRating: "❌ Erreur création avis"
        }
    },
    
    es: {
        // Header
        siteTitle: "Califica Tu Ciclovía Bogotá",
        
        // Navigation / Menu
        darkMode: "Cambiar modo noche",
        
        // Section Hero
        heroTitle: "🗺️ Evalúa las ciclovías",
        heroSubtitle: "Califica la seguridad, la tranquilidad, la calidad del aire de las ciclovías existentes",
        
        // Critères de notation
        filterLabel: "Filtrar por criterio:",
        criteria: {
            security: "Seguridad",
            noise: "Tranquilidad",
            air: "Calidad del aire",
            flow: "Calidad del pavimento",
            inclusion: "Ancho de la ciclovía",
            global: "Calificación promedio"
        },
        
        // Panel de notation
        rateLabel: "Calificar",
        ratingPanelTitle: "Calificar 🚴",
        commentLabel: "💬 Comentario",
        commentPlaceholder: "Describe tu experiencia...",
        submitButton: "💾 Guardar",
        
        // Forum (aperçu)
        forumCategoryTitle: "Seguridad",
        forumCategoryDesc: "Discusiones sobre la seguridad de las ciclovías",
        forumTopicExample1: "Iluminación insuficiente en Calle 26",
        forumTopicExample2: "Más parqueaderos de bicicletas necesarios",
        popularBadge: "Popular",
        
        // Propositions
        propositionsTitle: "🎯 Propuestas populares",
        priorityBadge: "⭐ Prioritaria",
        securityBadge: "🛡️ Seguridad",
        commentsCount: "💬 {count} comentarios",
        
        // À propos
        aboutObjective: "Unir la comunidad ciclista de Bogotá para mejorar la seguridad y hacer el ciclismo aún más atractivo.",
        aboutGoal1: "Mejorar la seguridad de los ciclistas",
        
        // Messages (utilisés dans JS)
        messages: {
            success: {
                ratingSaved: "✅ Calificación guardada exitosamente",
                thankYou: "✅ Gracias por tu contribución"
            },
            error: {
                saveFailed: "❌ Error al guardar",
                fillAllFields: "⚠️ Por favor completa todos los campos",
                selectSegment: "⚠️ Por favor selecciona un segmento"
            },
            loading: {
                loading: "🔄 Cargando...",
                loadingRatings: "📊 Cargando calificaciones...",
                loadingMap: "🗺️ Cargando mapa..."
            }
        },
        
        // Console (debug)
        console: {
            ratingCreated: "✅ Calificación creada",
            ratingsLoaded: "📊 {count} calificaciones recuperadas",
            transformingRatings: "🎨 Transformando calificaciones",
            errorCreatingRating: "❌ Error al crear calificación"
        }
    }
};

// Export pour utilisation dans index.html
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
