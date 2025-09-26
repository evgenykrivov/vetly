#!/bin/bash

echo "🚀 Deploying Vetly Landing..."

# Stop existing containers
echo "📦 Stopping existing containers..."
docker-compose down

# Remove old images (optional)
echo "🗑️ Cleaning up old images..."
docker image prune -f

# Build and start new containers
echo "🔨 Building and starting new containers..."
docker-compose up --build -d

# Check deployment status
echo "✅ Checking deployment status..."
sleep 10
docker-compose ps

# Check recent logs
echo "📋 Recent logs:"
docker-compose logs --tail=20

echo "🎉 Deployment completed!"
echo "📍 Application available at: http://localhost:8446"

