import express from "express"
import { getUser, createUser, logout } from "../controllers/authController.js";
import { getDoctor, createDoctor } from "../controllers/doctorAuthController.js";
import { chatWithAI } from "../controllers/chatController.js";

const router = express.Router();

router.post('/', createUser);
router.post('/login', getUser);
router.post('/logout', logout);
router.post('/doctor', createDoctor);
router.post('/doctor/login', getDoctor);
router.post('/chat', chatWithAI);

export default router;