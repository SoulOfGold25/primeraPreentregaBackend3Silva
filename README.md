# 🐾 AdoptMe - Backend API

Sistema de gestión de adopciones de mascotas, desarrollado con Node.js, Express y MongoDB. Este backend permite registrar usuarios, gestionar mascotas y llevar el control de adopciones. Además, cuenta con documentación Swagger y soporte para contenedores Docker.

---

## 🚀 Tecnologías usadas

-   Node.js + Express
-   MongoDB + Mongoose
-   Swagger (documentación)
-   Docker + Docker Compose
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

3. Crear un archivo `.env`:

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
docker compose up --build
```

2. Acceder a la API:  
   👉 `http://localhost:8080/`

3. Acceder a la documentación Swagger:  
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
└── docs/swagger.yaml     # Documentación de la API
test/                     # Pruebas unitarias con Mocha
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
-   `POST /api/adoptions/:uid/:pid`
-   `POST /api/sessions/login`
-   `GET /docs` → documentación Swagger

---

## 📝 Autor

Desarrollado por 221Dev

---

## 📄 Licencia

Este proyecto es parte de una entrega académica. Uso educativo.
