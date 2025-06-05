import logger from "../config/logger.js";

export const loggerMiddleware = (req, res, next) => {
    req.logger = logger;
    next();
};
