# Dockerfile

# 1. Imagen base
FROM node:18

# 2. Directorio de trabajo
WORKDIR /app

# 3. Copiar archivos de configuración primero
COPY package*.json ./

# 4. Instalar dependencias (dentro del contenedor)
RUN npm install

# 5. Copiar el resto del proyecto
COPY . .

# 6. Exponer puerto
EXPOSE 8080

# 7. Comando por defecto
CMD ["npm", "run", "dev"]
