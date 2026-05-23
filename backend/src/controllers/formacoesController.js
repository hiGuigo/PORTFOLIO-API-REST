import * as services from "../services/formacoesService.js";

export const getFormacoes = async (req, res) => {
  try {
    const formacoes = await services.listarFormacoes();

    return res.json(formacoes);
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao listar formações",
    });
  }
};

export const getFormacaoById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await services.buscarFormacao(id);

    if (!result) {
      return res.status(404).json({
        erro: "Formação não encontrada",
      });
    }

    return res.json(result);
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao buscar formação",
    });
  }
};

export const postFormacao = async (req, res) => {
  try {
    const data = req.body;

    const nova = await services.criarFormacao(data);

    return res.status(201).json({
      mensagem: `Formação '${nova.curso}' adicionada com sucesso`,
      data: nova,
    });
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao criar formação",
    });
  }
};

export const patchFormacao = async (req, res) => {
  try {
    const { id } = req.params;

    delete req.body.id;
    delete req.body._id;

    const data = req.body;

    const resultado = await services.atualizarFormacao(id, data);

    if (!resultado) {
      return res.status(404).json({
        erro: "Formação não encontrada",
      });
    }

    return res.json({
      mensagem: `Formação '${resultado.antigo}' alterada com sucesso`,
      data: resultado.atualizado,
    });
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao atualizar formação",
    });
  }
};

export const deleteFormacao = async (req, res) => {
  try {
    const { id } = req.params;

    const resultado = await services.deletarFormacoes(id);

    if (!resultado) {
      return res.status(404).json({
        erro: "Formação não encontrada",
      });
    }

    return res.json({
      mensagem: `Formação '${resultado.curso}' removida com sucesso`,
      data: resultado,
    });
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao remover formação",
    });
  }
};