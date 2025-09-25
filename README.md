# Vetly Landing

Лендинг проекта Vetly на React + TypeScript + Tailwind CSS.

## Быстрый старт

### Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшн
npm run build

# Предпросмотр продакшн сборки
npm run serve
```

### Docker развертывание

```bash
# Сборка и запуск контейнера
docker-compose up --build -d

# Просмотр логов
docker-compose logs -f

# Остановка
docker-compose down
```

### Порты

- **Локальная разработка**: http://localhost:5173
- **Docker контейнер**: http://localhost:8446

## Структура проекта

```
vetly/
├── src/                 # Исходный код
│   ├── App.tsx         # Главный компонент
│   ├── main.tsx        # Точка входа
│   └── index.css       # Стили
├── public/             # Статические файлы
├── env/                # Переменные окружения
├── build/              # Собранные файлы (создается при сборке)
├── docker-compose.yml  # Docker конфигурация
├── Dockerfile          # Docker образ
├── nginx.conf          # Конфигурация Nginx
└── package.json        # Зависимости проекта
```

## Технологии

- **React 18** - UI библиотека
- **TypeScript** - типизация
- **Tailwind CSS** - стили
- **Vite** - сборщик
- **Docker + Nginx** - деплой

## Скрипты

- `npm run dev` - запуск в режиме разработки
- `npm run build` - сборка для продакшн
- `npm run serve` - предпросмотр сборки
- `npm run lint` - проверка кода
- `npm run format` - форматирование кода

