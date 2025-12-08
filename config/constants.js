/**
 * Configuration centralisée de Rate Your Track Bogotá
 * 
 * Ce fichier contient toutes les constantes et valeurs configurables de l'application.
 * Modifier ces valeurs permet d'ajuster le comportement global sans chercher dans le code.
 */

const CONFIG = {
    // ===== COULEURS =====
    COLORS: {
        // Couleurs des notes (échelle 1-5)
        EXCELLENT: '#22c55e',  // Vert vif - Notes 4.5-5
        GOOD: '#84cc16',       // Vert lime - Notes 3.5-4.49
        AVERAGE: '#eab308',    // Jaune vif - Notes 2.5-3.49
        POOR: '#f97316',       // Orange vif - Notes 1.5-2.49
        BAD: '#ef4444',        // Rouge vif - Notes 0-1.49
        NEUTRAL: '#757575',    // Gris - Segments non notés
        
        // Couleurs des boutons
        PRIMARY: '#2563eb',
        DANGER: '#dc2626',
        WARNING: '#f39c12'
    },
    
    // ===== SEUILS DE NOTATION =====
    THRESHOLDS: {
        EXCELLENT: 4.5,  // À partir de 4.5/5
        GOOD: 3.5,       // À partir de 3.5/5
        AVERAGE: 2.5,    // À partir de 2.5/5
        POOR: 1.5        // À partir de 1.5/5
        // En dessous de 1.5 = BAD
    },
    
    // ===== CRITÈRES DE NOTATION =====
    CRITERIA: {
        security: {
            label: 'Sécurité',
            emoji: '🛡️',
            description: 'Protection contre les accidents et agressions'
        },
        noise: {
            label: 'Bruit',
            emoji: '🔇',
            description: 'Niveau sonore de l\'environnement'
        },
        air: {
            label: 'Qualité de l\'air',
            emoji: '🌬️',
            description: 'Pollution et qualité de l\'air respiré'
        },
        flow: {
            label: 'Fluidité',
            emoji: '🚴',
            description: 'Facilité et continuité du déplacement'
        },
        inclusion: {
            label: 'Inclusion',
            emoji: '♿',
            description: 'Accessibilité pour tous les usagers'
        }
    },
    
    // ===== CONFIGURATION CARTE =====
    MAP: {
        // Position initiale (Bogotá)
        center: [4.6097, -74.0817],
        zoom: 12,
        minZoom: 10,
        maxZoom: 18,
        
        // Styles des segments
        defaultWeight: 4,      // Épaisseur segments non notés
        ratedWeight: 5,        // Épaisseur segments notés
        defaultOpacity: 0.90,  // Opacité segments non notés
        ratedOpacity: 0.95     // Opacité segments notés
    },
    
    // ===== VUES DISPONIBLES =====
    VIEWS: {
        global: 'Note moyenne',
        security: 'Sécurité',
        noise: 'Bruit',
        air: 'Qualité de l\'air',
        flow: 'Fluidité',
        inclusion: 'Inclusion'
    },
    
    // ===== TEXTES DE L'INTERFACE =====
    TEXTS: {
        appName: '🚴‍♀️ Rate Your Track Bogotá',
        ratingPanelTitle: 'Noter ce segment',
        noRatingMessage: 'Aucune note pour l\'instant',
        saveButton: '💾 Enregistrer',
        resetButton: '🔄 Réinitialiser',
        commentPlaceholder: 'Votre avis sur ce segment...'
    },
    
    // ===== STOCKAGE =====
    STORAGE: {
        ratingsKey: 'portionRatings',  // Clé localStorage pour les notes
        darkModeKey: 'darkMode'        // Clé localStorage pour le thème
    }
};

// Export pour utilisation dans index.html
// Note : Pour le moment on utilise une variable globale
// Dans une future version modulaire, on utilisera export/import ES6
window.CONFIG = CONFIG;
