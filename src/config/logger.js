import winston from "winston";
import dotenv from "dotenv";
dotenv.config();

const customLevels = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        http: 4,
        debug: 5,
    },
    colors: {
        fatal: "red",
        error: "magenta",
        warning: "yellow",
        info: "green",
        http: "cyan",
        debug: "blue",
    },
};

winston.addColors(customLevels.colors);

const buildLogger = (env) => {
    if (env === "production") {
        return winston.createLogger({
            levels: customLevels.levels,
            transports: [
                new winston.transports.Console({ level: "info" }),
                new winston.transports.File({
                    filename: "errors.log",
                    level: "error",
                }),
            ],
        });
    } else {
        // por defecto, en desarrollo o entornos de pruebas
        return winston.createLogger({
            levels: customLevels.levels,
            transports: [new winston.transports.Console({ level: "debug" })],
        });
    }
};

const env = process.env.NODE_ENV || "development";
console.log("LOGGER ENVIRONMENT: ", env);

const logger = buildLogger(env);

export default logger;
