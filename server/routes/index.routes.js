import { Router } from "express";

const router = Router();

router.get("/", getActas);
router.post("/actas", createActas);
router.put("/actas/:id", updateActas);
router.delete("/actas/:id", deleteActas);

export default router;
