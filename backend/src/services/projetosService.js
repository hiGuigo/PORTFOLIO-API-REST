import { getDatabase } from "../database/mongo.js";
import { ObjectId } from "mongodb";

const collection = () => getDatabase().collection("projetos");

export async function listarProjetos() {
  return await collection().find().toArray();
}

export async function buscarProjeto(id) {
  return await collection().findOne({
    _id: new ObjectId(id),
  });
}

export async function criarProjeto(data) {
  const result = await collection().insertOne(data);

  return {
    _id: result.insertedId,
    ...data,
  };
}

export async function atualizarProjeto(id, data) {
  const antigo = await buscarProjeto(id);

  if (!antigo) return null;

  await collection().updateOne(
    { _id: new ObjectId(id) },
    {
      $set: data,
    },
  );

  return {
    antigo: antigo.titulo,
    atualizado: {
      ...antigo,
      ...data,
    },
  };
}

export async function deletarProjeto(id) {
  const item = await buscarProjeto(id);

  if (!item) return null;

  await collection().deleteOne({
    _id: new ObjectId(id),
  });

  return item;
}