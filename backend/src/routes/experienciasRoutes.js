import { Router } from "express";
import * as controller from "../controllers/experienciasController.js";

const router = Router();

router.get("/", controller.getExperiencias);
router.get("/:id", controller.getExperienciaById);
router.post("/", controller.postExperiencia);
router.patch("/:id", controller.patchExperiencia);
router.delete("/:id", controller.deleteExperiencia);

export default router;