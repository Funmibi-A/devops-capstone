
# Use lightweight Nginx image
FROM nginx:alpine

# Copy production React build
COPY dist/ /usr/share/nginx/html/

# Expose HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

