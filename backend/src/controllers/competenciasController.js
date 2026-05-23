import * as services from "../services/competenciasService.js";

export const getCompetencias = async (req, res) => {
  try {
    const data = await services.listarCompetencias();

    return res.json(data);
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao listar competências",
    });
  }
};

export const getCompetenciaById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await services.buscarCompetencia(id);

    if (!result) {
      return res.status(404).json({
        erro: "Competência não encontrada",
      });
    }

    return res.json(result);
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao buscar competência",
    });
  }
};

export const postCompetencia = async (req, res) => {
  try {
    const data = req.body;

    const novo = await services.criarCompetencia(data);

    return res.status(201).json({
      mensagem: `Competência '${novo.tipo}' adicionada com sucesso`,
      data: novo,
    });
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao criar competência",
    });
  }
};

export const patchCompetencia = async (req, res) => {
  try {
    const { id } = req.params;

    delete req.body.id;
    delete req.body._id;

    const data = req.body;

    const resultado = await services.atualizarCompetencia(id, data);

    if (!resultado) {
      return res.status(404).json({
        erro: "Competência não encontrada",
      });
    }

    return res.json({
      mensagem: `Competência '${resultado.antigo}' alterada com sucesso`,
      data: resultado.atualizado,
    });
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao atualizar competência",
    });
  }
};

export const deleteCompetencia = async (req, res) => {
  try {
    const { id } = req.params;

    const resultado = await services.deletarCompetencia(id);

    if (!resultado) {
      return res.status(404).json({
        erro: "Competência não encontrada",
      });
    }

    return res.json({
      mensagem: `Competência '${resultado.tipo}' removida com sucesso`,
      data: resultado,
    });
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao remover competência",
    });
  }
};