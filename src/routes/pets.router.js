import { Router } from "express";
import petsController from "../controllers/pets.controller.js";
import uploader from "../utils/uploader.js";

const router = Router();

router.get("/", petsController.getAllPets);
router.post("/", petsController.createPet);
router.post(
    "/withimage",
    uploader.single("image"),
    petsController.createPetWithImage
);
router.put("/:pid", petsController.updatePet);
router.delete("/:pid", petsController.deletePet);

router.get("/", async (req, res) => {
    try {
        const pets = await petModel.find();
        res.json({ status: "success", payload: pets });
    } catch (err) {
        res.status(500).json({ status: "error", error: err.message });
    }
});

export default router;
