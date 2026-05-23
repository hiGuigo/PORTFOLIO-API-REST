import { getDatabase } from "../database/mongo.js";
import { ObjectId } from "mongodb";

const collection = () => getDatabase().collection("formacoes");

export async function listarFormacoes() {
  return await collection().find().toArray();
}

export async function buscarFormacao(id) {
  return await collection().findOne({
    _id: new ObjectId(id),
  });
}

export async function criarFormacao(data) {
  const result = await collection().insertOne(data);

  return {
    _id: result.insertedId,
    ...data,
  };
}

export async function atualizarFormacao(id, data) {
  const antigo = await buscarFormacao(id);

  if (!antigo) return null;

  await collection().updateOne(
    { _id: new ObjectId(id) },
    {
      $set: data,
    },
  );

  return {
    antigo: antigo.curso,
    atualizado: {
      ...antigo,
      ...data,
    },
  };
}

export async function deletarFormacoes(id) {
  const item = await buscarFormacao(id);

  if (!item) return null;

  await collection().deleteOne({
    _id: new ObjectId(id),
  });

  return item;
}