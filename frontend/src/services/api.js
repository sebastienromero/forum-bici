// ============================================
// MODULE API SUPABASE - VERSION MINIMALE
// ============================================
// Date: 25 décembre 2025
// Description: Communication avec la base de données Supabase
// Version: MVP - Fonction de test uniquement
// ============================================

import { createClient } from '@supabase/supabase-js'

// ============================================
// CONFIGURATION SUPABASE
// ============================================
// ✅ Credentials configurés depuis docs/CREDENTIALS-SUPABASE.txt
const SUPABASE_URL = 'https://xdvrfrogmfkntuluypdx.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkdnJmcm9nbWZrbnR1bHV5cGR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2ODk5ODcsImV4cCI6MjA4MjI2NTk4N30.X8aDHaqYVEXVXZiNwicbI8GatvFNrfXBKn_QTHBcnck'

// Créer le client Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// ============================================
// FONCTIONS API
// ============================================

/**
 * Fonction de TEST pour vérifier la connexion à Supabase
 * 
 * Cette fonction récupère toutes les lignes de la table 'ratings'
 * pour vérifier que la connexion fonctionne.
 * 
 * @returns {Promise<Object>} { success: boolean, data: array, error: object }
 */
export async function testConnection() {
  console.log('🔄 Test connexion Supabase...')
  
  const { data, error } = await supabase
    .from('ratings')
    .select('*')
  
  console.log('📊 Résultat:', { data, error })
  
  if (error) {
    console.error('❌ Erreur:', error)
    return { success: false, error }
  }
  
  console.log('✅ Connexion OK !', data)
  return { success: true, data }
}

/**
 * Créer un nouvel avis (rating)
 * 
 * @param {Object} rating - L'objet rating à insérer
 * @param {string} rating.segment_id - ID du segment
 * @param {string} rating.comment - Commentaire de l'utilisateur
 * @returns {Promise<Object>} { success: boolean, data: object, error: object }
 */
export async function createRating(rating) {
  console.log('📝 Création d\'un avis:', rating)
  
  const { data, error } = await supabase
    .from('ratings')
    .insert([rating])
    .select()
  
  if (error) {
    console.error('❌ Erreur lors de la création:', error)
    return { success: false, error }
  }
  
  console.log('✅ Avis créé avec succès:', data)
  return { success: true, data: data[0] }
}

/**
 * Récupérer tous les avis
 * 
 * @returns {Promise<Object>} { success: boolean, data: array, error: object }
 */
export async function getAllRatings() {
  console.log('📥 Récupération de tous les avis...')
  
  const { data, error } = await supabase
    .from('ratings')
    .select('*')
    .order('timestamp', { ascending: false })
  
  if (error) {
    console.error('❌ Erreur:', error)
    return { success: false, error }
  }
  
  console.log(`✅ ${data.length} avis récupérés`)
  return { success: true, data }
}

// ============================================
// EXPORT DU CLIENT (pour usage avancé)
// ============================================
export { supabase }
