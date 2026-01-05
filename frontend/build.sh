#!/bin/bash

echo "🔨 Building Rate Your Track Bogotá..."

# Supprimer les anciens fichiers copiés
rm -rf public/css public/config public/data

# Copier src/ vers public/
echo "📁 Copying src/ to public/..."
cp -rv src/* public/

echo "✅ Build complete!"
echo "📦 Files in public/:"
ls -la public/
