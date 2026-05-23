import { getDatabase } from "../database/mongo.js";
import { ObjectId } from "mongodb";

const collection = () => getDatabase().collection("competencias");

export async function listarCompetencias() {
  return await collection().find().toArray();
}

export async function buscarCompetencia(id) {
  return await collection().findOne({
    _id: new ObjectId(id),
  });
}

export async function criarCompetencia(data) {
  const result = await collection().insertOne(data);

  return {
    _id: result.insertedId,
    ...data,
  };
}

export async function atualizarCompetencia(id, data) {
  const antigo = await buscarCompetencia(id);

  if (!antigo) return null;

  await collection().updateOne(
    { _id: new ObjectId(id) },
    {
      $set: data,
    },
  );

  return {
    antigo: antigo.tipo,
    atualizado: {
      ...antigo,
      ...data,
    },
  };
}

export async function deletarCompetencia(id) {
  const item = await buscarCompetencia(id);

  if (!item) return null;

  await collection().deleteOne({
    _id: new ObjectId(id),
  });

  return item;
}