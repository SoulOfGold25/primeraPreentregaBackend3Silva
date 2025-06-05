import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

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

const PORT = process.env.PORT || 8080;
const connection = mongoose.connect(
    "mongodb+srv://coder:coderpass@ecommerce-cluster.tmavn.mongodb.net/fampRepuestos?retryWrites=true&w=majority&appName=ecommerce-cluster"
);

app.use(express.json());
app.use(cookieParser());
app.use(loggerMiddleware);

// Rutas
app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/adoptions", adoptionsRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/api/mocks", mocksRouter);
app.use("/loggerTest", loggerTestRouter);

// Middleware de errores
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
