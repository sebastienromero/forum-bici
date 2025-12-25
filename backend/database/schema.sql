-- ============================================
-- RATE YOUR TRACK BOGOTÁ - DATABASE SCHEMA
-- ============================================
-- Date de création: 25 décembre 2025
-- Backend: Supabase (PostgreSQL)
-- Version: MVP - Table minimale
-- ============================================

-- ============================================
-- TABLE: ratings
-- ============================================
-- Description: Stocke les évaluations des segments de pistes cyclables
-- Version MVP: Structure minimale pour tester la connexion
-- ============================================

CREATE TABLE ratings (
  -- Identifiant unique auto-incrémenté
  id SERIAL PRIMARY KEY,
  
  -- Identifiant du segment de piste évalué
  -- Ex: "SEG_001", "SEG_002", etc.
  segment_id VARCHAR(100),
  
  -- Commentaire texte de l'utilisateur
  -- Illimité (TEXT = pas de limite de caractères)
  comment TEXT,
  
  -- Date et heure de création automatique
  -- TIMESTAMPTZ = avec fuseau horaire
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- NOTES POUR ÉVOLUTION FUTURE (Phase 2+)
-- ============================================
-- TODO: Ajouter colonnes pour les notes (security, comfort, etc.)
-- TODO: Ajouter user_id pour identifier l'utilisateur
-- TODO: Ajouter contraintes UNIQUE pour éviter doublons
-- TODO: Ajouter index pour optimiser les recherches
-- TODO: Ajouter coordonnées GPS (GEOGRAPHY POINT)
-- ============================================
