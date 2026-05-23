import { getDatabase } from "../database/mongo.js";
import { ObjectId } from "mongodb";

const collection = () => getDatabase().collection("certificados");

export async function listarCertificados() {
  return await collection().find().toArray();
}

export async function buscarCertificado(id) {
  return await collection().findOne({
    _id: new ObjectId(id),
  });
}

export async function criarCertificado(data) {
  const result = await collection().insertOne(data);

  return {
    _id: result.insertedId,
    ...data,
  };
}

export async function atualizarCertificado(id, data) {
  const antigo = await buscarCertificado(id);

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

export async function deletarCertificado(id) {
  const item = await buscarCertificado(id);

  if (!item) return null;

  await collection().deleteOne({
    _id: new ObjectId(id),
  });

  return item;
}