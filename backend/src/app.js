import express from "express";
import cors from "cors";

import formacoesRouter from "./routes/formacoesRoutes.js";
import competenciasRouter from "./routes/competenciasRoutes.js";
import experienciasRouter from "./routes/experienciasRoutes.js";
import projetosRouter from "./routes/projetosRoutes.js";
import certificadosRouter from "./routes/certificadosRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/formacoes", formacoesRouter);
app.use("/competencias", competenciasRouter);
app.use("/experiencias", experienciasRouter);
app.use("/projetos", projetosRouter);
app.use("/certificados", certificadosRouter);

export default app;