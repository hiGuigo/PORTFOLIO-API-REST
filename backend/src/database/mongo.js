import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("MONGO_URI não definida no .env");
}

const client = new MongoClient(uri);

let db;

export async function connectDatabase() {
  try {
    await client.connect();

    db = client.db("portfolioAV3");

    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Erro ao conectar no MongoDB:", error);
  }
}

export function getDatabase() {
  return db;
}