import mongoose from "mongoose";
import app from "./app.js";

const PORT = process.env.PORT || 8080;

const MONGO_URI =
    process.env.MONGO_URI ?? "mongodb://localhost:27017/adoptmeTest";

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("✅ Conectado a MongoDB");
        app.listen(PORT, () => {
            console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ Error al conectar a MongoDB:", err);
    });
