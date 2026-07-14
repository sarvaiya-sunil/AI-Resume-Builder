import express from "express";
import {
  getUserById,
  registerUser,
  signInUser,
} from "../controllers/userController.js";
import protectRoute from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/regiter", registerUser);
router.post("/login", signInUser);
router.get("/data", protectRoute, getUserById);

export default router;
