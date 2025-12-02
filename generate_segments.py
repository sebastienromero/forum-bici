#!/usr/bin/env python3
"""
Script pour générer pistes-linestrings.js à partir du GeoJSON de rate-your-track
Extrait les contours des MultiPolygons et les convertit en LineStrings séparés
"""

import json

# Lire le fichier GeoJSON de rate-your-track
with open('data/pistes-rate-your-track.geojson', 'r', encoding='utf-8') as f:
    rate_your_track_data = json.load(f)

print(f"✅ Données chargées: {len(rate_your_track_data['features'])} features")

# Créer un nouveau GeoJSON avec des LineStrings
linestrings_data = {
    "type": "FeatureCollection",
    "features": []
}

for idx, feature in enumerate(rate_your_track_data['features']):
    geom_type = feature['geometry']['type']
    
    if geom_type == 'MultiPolygon':
        # Pour chaque polygone dans le MultiPolygon
        for poly_idx, polygon_coords in enumerate(feature['geometry']['coordinates']):
            # Extraire le contour extérieur (premier anneau)
            exterior_ring = polygon_coords[0]
            
            # Créer un LineString pour ce contour
            linestring_feature = {
                "type": "Feature",
                "id": f"{idx}_{poly_idx}",
                "properties": {
                    **feature['properties'],
                    "original_id": idx,
                    "segment_index": poly_idx
                },
                "geometry": {
                    "type": "LineString",
                    "coordinates": exterior_ring
                }
            }
            linestrings_data['features'].append(linestring_feature)
    
    elif geom_type == 'Polygon':
        # Extraire le contour extérieur
        exterior_ring = feature['geometry']['coordinates'][0]
        
        linestring_feature = {
            "type": "Feature",
            "id": str(idx),
            "properties": {
                **feature['properties'],
                "original_id": idx,
                "segment_index": 0
            },
            "geometry": {
                "type": "LineString",
                "coordinates": exterior_ring
            }
        }
        linestrings_data['features'].append(linestring_feature)
    
    elif geom_type in ['LineString', 'MultiLineString']:
        # Garder tel quel
        linestrings_data['features'].append({
            **feature,
            "id": str(idx)
        })

print(f"✅ {len(linestrings_data['features'])} LineStrings créés")

# Écrire le fichier JavaScript
output_content = f"const pistesLineStrings = {json.dumps(linestrings_data, ensure_ascii=False, separators=(',', ':'))};"

with open('data/pistes-linestrings.js', 'w', encoding='utf-8') as f:
    f.write(output_content)

print(f"✅ Fichier créé: data/pistes-linestrings.js ({len(output_content) / 1024 / 1024:.1f} MB)")
