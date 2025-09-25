#!/bin/bash

echo "🚀 Deploying Vetly Landing..."

# Остановка существующих контейнеров
echo "📦 Stopping existing containers..."
docker-compose down

# Удаление старых образов (опционально)
echo "🗑️ Cleaning up old images..."
docker image prune -f

# Сборка и запуск новых контейнеров
echo "🔨 Building and starting new containers..."
docker-compose up --build -d

# Проверка статуса
echo "✅ Checking deployment status..."
sleep 10
docker-compose ps

# Проверка логов
echo "📋 Recent logs:"
docker-compose logs --tail=20

echo "🎉 Deployment completed!"
echo "📍 Application available at: http://localhost:8446"

