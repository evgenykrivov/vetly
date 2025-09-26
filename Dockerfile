FROM node:18-alpine as build

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy environment variables
COPY ./env ./env

# Copy remaining files
COPY . .

# Check that env files are available
RUN ls -la env
RUN cat env/.env.production || echo "Production env file not found"

# Build with explicit production mode
RUN NODE_ENV=production npm run build

# Check build results
RUN ls -la build
RUN ls -la build/assets || echo "No assets directory"
RUN find build -name "*.js" | head -5 || echo "No JS files found"

# Second stage - nginx
FROM nginx:alpine

# Copy built files from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Create logs directory
RUN mkdir -p /var/log/nginx

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Check directory contents
RUN ls -la /usr/share/nginx/html
RUN find /usr/share/nginx/html -name "*.js" | head -5 || echo "No JS files found in nginx html dir"

# Create health check file
RUN echo "OK" > /usr/share/nginx/html/health.txt

# Add server startup script
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

EXPOSE 3000

# Start nginx via entrypoint script
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]

