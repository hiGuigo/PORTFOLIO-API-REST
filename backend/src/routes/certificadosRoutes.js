import { Router } from "express";
import * as controller from "../controllers/certificadosController.js";

const router = Router();

router.get("/", controller.getCertificados);
router.get("/:id", controller.getCertificadoById);
router.post("/", controller.postCertificado);
router.patch("/:id", controller.patchCertificado);
router.delete("/:id", controller.deleteCertificado);

export default router;