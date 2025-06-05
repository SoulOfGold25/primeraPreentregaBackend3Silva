import { Router } from "express";
import { generatePetMock } from "../utils/MockGenerator.js";

const router = Router();

router.get("/mockingpets", (req, res) => {
    const pets = [];

    for (let i = 0; i < 100; i++) {
        pets.push(generatePetMock());
    }

    res.status(200).json({ status: "success", payload: pets });
});

export default router;
