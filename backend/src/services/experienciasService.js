import { getDatabase } from "../database/mongo.js";
import { ObjectId } from "mongodb";

const collection = () => getDatabase().collection("experiencias");

export async function listarExperiencias() {
  return await collection().find().toArray();
}

export async function buscarExperiencia(id) {
  return await collection().findOne({
    _id: new ObjectId(id),
  });
}

export async function criarExperiencia(data) {
  const result = await collection().insertOne(data);

  return {
    _id: result.insertedId,
    ...data,
  };
}

export async function atualizarExperiencia(id, data) {
  const antigo = await buscarExperiencia(id);

  if (!antigo) return null;

  await collection().updateOne(
    { _id: new ObjectId(id) },
    {
      $set: data,
    },
  );

  return {
    antigo: antigo.item,
    atualizado: {
      ...antigo,
      ...data,
    },
  };
}

export async function deletarExperiencia(id) {
  const item = await buscarExperiencia(id);

  if (!item) return null;

  await collection().deleteOne({
    _id: new ObjectId(id),
  });

  return item;
}