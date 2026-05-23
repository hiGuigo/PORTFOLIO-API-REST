import dotenv from "dotenv";

dotenv.config();

import app from "./app.js";
import { connectDatabase } from "./database/mongo.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}

startServer();