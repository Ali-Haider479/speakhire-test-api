#!/bin/sh

# Start Strapi in the background, using the dist folder for compiled output
echo "Starting Strapi..."
npm run start &

# Start NGINX in the foreground
echo "Starting NGINX reverse proxy..."
nginx -g 'daemon off;'
