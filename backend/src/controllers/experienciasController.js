import * as services from "../services/experienciasService.js";

export const getExperiencias = async (req, res) => {
  try {
    const data = await services.listarExperiencias();

    return res.json(data);
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao listar experiências",
    });
  }
};

export const getExperienciaById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await services.buscarExperiencia(id);

    if (!result) {
      return res.status(404).json({
        erro: "Experiência não encontrada",
      });
    }

    return res.json(result);
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao buscar experiência",
    });
  }
};

export const postExperiencia = async (req, res) => {
  try {
    const data = req.body;

    const novo = await services.criarExperiencia(data);

    return res.status(201).json({
      mensagem: `Experiência '${novo.item}' adicionada com sucesso`,
      data: novo,
    });
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao criar experiência",
    });
  }
};

export const patchExperiencia = async (req, res) => {
  try {
    const { id } = req.params;

    delete req.body.id;
    delete req.body._id;

    const data = req.body;

    const resultado = await services.atualizarExperiencia(id, data);

    if (!resultado) {
      return res.status(404).json({
        erro: "Experiência não encontrada",
      });
    }

    return res.json({
      mensagem: `Experiência '${resultado.antigo}' alterada com sucesso`,
      data: resultado.atualizado,
    });
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao atualizar experiência",
    });
  }
};

export const deleteExperiencia = async (req, res) => {
  try {
    const { id } = req.params;

    const resultado = await services.deletarExperiencia(id);

    if (!resultado) {
      return res.status(404).json({
        erro: "Experiência não encontrada",
      });
    }

    return res.json({
      mensagem: `Experiência '${resultado.item}' removida com sucesso`,
      data: resultado,
    });
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao remover experiência",
    });
  }
};