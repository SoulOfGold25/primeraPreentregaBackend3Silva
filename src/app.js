import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
import { fileURLToPath } from "url";

import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import adoptionsRouter from "./routes/adoption.router.js";
import sessionsRouter from "./routes/sessions.router.js";
import mocksRouter from "./routes/mocks.router.js";
import loggerTestRouter from "./routes/loggerTest.router.js";
import errorHandler from "./middlewares/errorHandler.js";
import { loggerMiddleware } from "./middlewares/loggerMiddleware.js";

dotenv.config();
console.log("ENV DESDE DOTENV:", process.env.NODE_ENV);

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(loggerMiddleware);

// Swagger config
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const swaggerDocument = YAML.load(path.join(__dirname, "../docs/swagger.yaml"));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas
app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/adoptions", adoptionsRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/api/mocks", mocksRouter);
app.use("/loggerTest", loggerTestRouter);
app.get("/", (req, res) => {
    res.status(200).send("Servidor funcionando");
});

// Manejo de errores
app.use(errorHandler);

export default app;
