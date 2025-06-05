import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    req.logger.debug("Este es un debug");
    req.logger.http("Este es un http");
    req.logger.info("Este es un info");
    req.logger.warning("Este es un warning");
    req.logger.error("Este es un error");
    req.logger.fatal("Este es un fatal");

    res.send("Logs generados!");
});

export default router;
