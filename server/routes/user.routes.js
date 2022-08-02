import { Router } from "express";
import { crearUsuario } from "../controllers/user.controller.js";

const router = Router();

router.post("/user", crearUsuario);

export default router;
