# 🐾 AdoptMe - Backend API

Sistema de gestión de adopciones de mascotas, desarrollado con Node.js, Express y MongoDB. Este backend permite registrar usuarios, gestionar mascotas y llevar el control de adopciones. Además, cuenta con documentación Swagger y soporte para contenedores Docker.

---

## 🚀 Tecnologías usadas

-   Node.js + Express
-   MongoDB + Mongoose
-   Swagger (documentación)
-   Docker + Docker Compose
-   Babel (ESModules)
-   Mocha + Sinon + Chai (tests)

---

## ⚙️ Instalación local (modo desarrollo)

1. Clonar el repositorio:

```bash
git clone https://github.com/SoulOfGold25/primeraPreentregaBackend3Silva
cd primeraPreentregaBackend3Silva
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear un archivo `.env` (opcional):

```env
PORT=8080
MONGO_URI=mongodb://localhost:27017/adoptmeTest
NODE_ENV=development
```

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

---

## 🐳 Ejecución con Docker

1. Construir y levantar los servicios:

```bash
docker-compose up --build
```

2. Accede a la API en:  
   👉 `http://localhost:8080/`

3. Accede a la documentación Swagger en:  
   👉 `http://localhost:8080/docs`

---

## 📂 Estructura del proyecto

```
src/
├── app.js                # Configuración principal de Express
├── server.js             # Conexión a MongoDB y arranque
├── routes/               # Rutas agrupadas por entidad
├── controllers/          # Lógica de negocio
├── services/             # Servicios de acceso a datos
├── dao/                  # DAO: acceso directo a Mongo
├── middlewares/          # Logger, manejo de errores
├── models/               # Esquemas de Mongoose
├── test/                 # Pruebas unitarias con Mocha
└── docs/swagger.yaml     # Documentación de la API
```

---

## 🧪 Tests

Para ejecutar las pruebas unitarias:

```bash
npm test
```

---

## 🔐 Rutas principales

-   `GET /api/users`
-   `GET /api/pets`
-   `POST /api/adoptions`
-   `POST /api/sessions/login`
-   `GET /docs` → documentación Swagger

---

## 📝 Autor

Desarrollado por [Tu Nombre o Alias]  
Universidad / Curso: [Nombre del ramo o institución]  
Año: 2025

---

## 📄 Licencia

Este proyecto es parte de una entrega académica. Uso educativo.
