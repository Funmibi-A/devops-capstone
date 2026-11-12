
FROM nginx:alpine

# Apply available Alpine security updates
RUN apk upgrade --no-cache

# Copy production React build
COPY dist/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
