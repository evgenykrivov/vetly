#!/bin/sh
set -e

# Check application files availability
if [ ! -f /usr/share/nginx/html/index.html ]; then
  echo "ERROR: index.html not found!"
  exit 1
fi

# Check for JS bundles
JS_BUNDLES=$(find /usr/share/nginx/html -name "*.js" | wc -l)
if [ "$JS_BUNDLES" -eq 0 ]; then
  echo "WARNING: No JavaScript bundles found!"
fi

# Display available files information
echo "Available files:"
ls -la /usr/share/nginx/html

# Check nginx configuration
if [ ! -f /etc/nginx/conf.d/default.conf ]; then
  echo "ERROR: Nginx configuration not found!"
  exit 1
fi

echo "Starting Vetly Nginx server..."
exec "$@"

