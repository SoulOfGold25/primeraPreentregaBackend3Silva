import { Router } from "express";
import { generatePetMock, generateUserMock } from "../utils/MockGenerator.js";
import petModel from "../dao/models/Pet.js";
import userModel from "../dao/models/User.js";

const router = Router();

// GET /mockingpets
router.get("/mockingpets", (req, res) => {
    const pets = [];
    for (let i = 0; i < 100; i++) {
        pets.push(generatePetMock());
    }
    res.json({ status: "success", payload: pets });
});

// GET /mockingusers
router.get("/mockingusers", async (req, res) => {
    const users = [];
    for (let i = 0; i < 50; i++) {
        users.push(await generateUserMock());
    }
    res.json({ status: "success", payload: users });
});

// POST /generateData
router.post("/generateData", async (req, res) => {
    const { users = 0, pets = 0 } = req.body;

    try {
        const userPromises = [];
        for (let i = 0; i < users; i++) {
            userPromises.push(generateUserMock());
        }
        const usersToInsert = await Promise.all(userPromises);
        await userModel.insertMany(usersToInsert);

        const petsToInsert = [];
        for (let i = 0; i < pets; i++) {
            petsToInsert.push(generatePetMock());
        }
        await petModel.insertMany(petsToInsert);

        res.json({
            status: "success",
            message: `${users} users and ${pets} pets inserted.`,
        });
    } catch (err) {
        res.status(500).json({ status: "error", error: err.message });
    }
});

export default router;
