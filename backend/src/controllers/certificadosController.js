import * as services from "../services/certificadosService.js";

export const getCertificados = async (req, res) => {
  const data = await services.listarCertificados();
  res.json(data);
};

export const getCertificadoById = async (req, res) => {
  const { id } = req.params;

  const result = await services.buscarCertificado(id);

  if (!result)
    return res.status(404).json({ erro: "Certificado não encontrado" });

  res.json(result);
};

export const postCertificado = async (req, res) => {
  const data = req.body;

  const novo = await services.criarCertificado(data);

  return res
    .status(201)
    .json(`Certificado '${novo.titulo}' adicionado com sucesso`);
};

export const patchCertificado = async (req, res) => {
  const { id } = req.params;

  delete req.body.id;

  const resultado = await services.atualizarCertificado(id, req.body);

  if (!resultado)
    return res.status(404).json({ erro: "Certificado não encontrado" });

  return res.json(resultado);
};

export const deleteCertificado = async (req, res) => {
  const { id } = req.params;

  const resultado = await services.deletarCertificado(id);

  if (!resultado)
    return res.status(404).json({ erro: "Certificado não encontrado" });

  return res.json(resultado);
};