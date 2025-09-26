# 1. Build fáze
FROM node:20-alpine AS build
WORKDIR /app

# Zkopíruj package.json a nainstaluj závislosti
COPY package*.json ./
RUN npm install

# Zkopíruj zdrojové soubory a postav aplikaci
COPY . .
RUN npm run build

# 2. Production fáze – spustíme přes Nginx
FROM nginx:alpine
# Zkopíruj build do nginx html složky
COPY --from=build /app/build /usr/share/nginx/html

# Nginx spustí aplikaci na portu 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]