-- ============================================
-- RATE YOUR TRACK BOGOTÁ - DATABASE SCHEMA
-- ============================================
-- Date de création: 25 décembre 2025
-- Backend: Supabase (PostgreSQL)
-- Version: MVP - Table complète avec colonnes de notation
-- ============================================

-- ============================================
-- TABLE: ratings
-- ============================================
-- Description: Stocke les évaluations des segments de pistes cyclables
-- Colonnes de notation: security, noise, air, flow, inclusion
-- ============================================

CREATE TABLE ratings (
  -- Identifiant unique auto-incrémenté
  id SERIAL PRIMARY KEY,
  
  -- Identifiant du segment de piste évalué
  -- Ex: "SEG_001", "SEG_002", etc.
  segment_id VARCHAR(100),
  
  -- Nom de la piste
  -- Ex: "Carrera 7", "Avenida Jiménez", etc.
  track_name VARCHAR(255),
  
  -- Identifiant parent (pour regrouper plusieurs segments)
  -- Ex: "TRACK_001"
  parent_id VARCHAR(100),
  
  -- Note de sécurité (1 à 5)
  -- 1 = Très dangereux, 5 = Très sécurisé
  security INT CHECK (security BETWEEN 1 AND 5),
  
  -- Note de bruit (1 à 5)
  -- 1 = Très bruyant, 5 = Très calme
  noise INT CHECK (noise BETWEEN 1 AND 5),
  
  -- Qualité de l'air (1 à 5)
  -- 1 = Air très pollué, 5 = Air très pur
  air INT CHECK (air BETWEEN 1 AND 5),
  
  -- Fluidité du trafic cycliste (1 à 5)
  -- 1 = Très encombré, 5 = Très fluide
  flow INT CHECK (flow BETWEEN 1 AND 5),
  
  -- Inclusion / Accessibilité (1 à 5)
  -- 1 = Peu accessible, 5 = Très accessible
  inclusion INT CHECK (inclusion BETWEEN 1 AND 5),
  
  -- Commentaire texte de l'utilisateur
  -- Illimité (TEXT = pas de limite de caractères)
  comment TEXT,
  
  -- Date et heure de création automatique
  -- TIMESTAMPTZ = avec fuseau horaire
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INDEX POUR PERFORMANCES
-- ============================================
-- Accélère les recherches par segment_id
CREATE INDEX idx_segment_id ON ratings(segment_id);

-- ============================================
-- NOTES POUR ÉVOLUTION FUTURE (Phase 2+)
-- ============================================
-- TODO: Ajouter user_id pour identifier l'utilisateur (auth)
-- TODO: Ajouter contraintes UNIQUE pour éviter doublons (user_id + segment_id)
-- TODO: Ajouter coordonnées GPS (GEOGRAPHY POINT)
-- TODO: Activer Row Level Security (RLS) pour sécurité
-- ============================================