#!/usr/bin/env python3
"""
Script pour générer pistes-linestrings.js à partir de pistes-data.js
Convertit les MultiPolygons en LineStrings utilisables pour rate-your-track
"""

import json
import re

# Lire le fichier pistes-data.js
with open('data/pistes-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extraire le JSON du fichier JavaScript
# Le fichier commence par: const pistesData = {...}
match = re.search(r'const\s+pistesData\s*=\s*({.*});', content, re.DOTALL)
if not match:
    print("❌ Impossible de trouver pistesData dans le fichier")
    exit(1)

pistes_data = json.loads(match.group(1))
print(f"✅ Données chargées: {len(pistes_data['features'])} features")

# Créer un nouveau GeoJSON avec des LineStrings
linestrings_data = {
    "type": "FeatureCollection",
    "features": []
}

for feature in pistes_data['features']:
    if feature['geometry']['type'] == 'MultiPolygon':
        # Convertir chaque polygone en LineString (extérieur uniquement)
        for polygon_coords in feature['geometry']['coordinates']:
            # Prendre uniquement le contour extérieur (premier anneau)
            exterior_ring = polygon_coords[0]
            
            linestring_feature = {
                "type": "Feature",
                "properties": feature['properties'].copy(),
                "geometry": {
                    "type": "LineString",
                    "coordinates": exterior_ring
                }
            }
            linestrings_data['features'].append(linestring_feature)
    
    elif feature['geometry']['type'] == 'Polygon':
        # Convertir le polygone en LineString (extérieur uniquement)
        exterior_ring = feature['geometry']['coordinates'][0]
        
        linestring_feature = {
            "type": "Feature",
            "properties": feature['properties'].copy(),
            "geometry": {
                "type": "LineString",
                "coordinates": exterior_ring
            }
        }
        linestrings_data['features'].append(linestring_feature)
    
    elif feature['geometry']['type'] in ['LineString', 'MultiLineString']:
        # Garder tel quel
        linestrings_data['features'].append(feature)

print(f"✅ {len(linestrings_data['features'])} LineStrings créés")

# Écrire le fichier JavaScript
output_content = f"const pistesLineStrings = {json.dumps(linestrings_data, ensure_ascii=False, indent=2)};"

with open('data/pistes-linestrings.js', 'w', encoding='utf-8') as f:
    f.write(output_content)

print(f"✅ Fichier créé: data/pistes-linestrings.js ({len(output_content)} bytes)")
