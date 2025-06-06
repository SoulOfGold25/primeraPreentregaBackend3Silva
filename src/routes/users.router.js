import { Router } from "express";
import usersController from "../controllers/users.controller.js";

const router = Router();

router.get("/", usersController.getAllUsers);

router.get("/:uid", usersController.getUser);
router.put("/:uid", usersController.updateUser);
router.delete("/:uid", usersController.deleteUser);

import userModel from "../dao/models/User.js";

router.get("/", async (req, res) => {
    try {
        const users = await userModel.find();
        res.json({ status: "success", payload: users });
    } catch (err) {
        res.status(500).json({ status: "error", error: err.message });
    }
});

export default router;
