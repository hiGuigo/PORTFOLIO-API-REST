import * as services from "../services/projetosService.js";

export const getProjetos = async (req, res) => {
  try {
    const projetos = await services.listarProjetos();

    return res.json(projetos);
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao listar projetos",
    });
  }
};

export const getProjetoById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await services.buscarProjeto(id);

    if (!result) {
      return res.status(404).json({
        erro: "Projeto não encontrado",
      });
    }

    return res.json(result);
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao buscar projeto",
    });
  }
};

export const postProjeto = async (req, res) => {
  try {
    const data = req.body;

    const novoProjeto = await services.criarProjeto(data);

    return res.status(201).json({
      mensagem: `Projeto '${novoProjeto.titulo}' adicionado com sucesso`,
      data: novoProjeto,
    });
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao criar projeto",
    });
  }
};

export const patchProjeto = async (req, res) => {
  try {
    const { id } = req.params;

    delete req.body.id;
    delete req.body._id;

    const data = req.body;

    const resultado = await services.atualizarProjeto(id, data);

    if (!resultado) {
      return res.status(404).json({
        erro: "Projeto não encontrado",
      });
    }

    return res.json({
      mensagem: `Projeto '${resultado.antigo}' alterado com sucesso`,
      data: resultado.atualizado,
    });
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao atualizar projeto",
    });
  }
};

export const deleteProjeto = async (req, res) => {
  try {
    const { id } = req.params;

    const resultado = await services.deletarProjeto(id);

    if (!resultado) {
      return res.status(404).json({
        erro: "Projeto não encontrado",
      });
    }

    return res.json({
      mensagem: `Projeto '${resultado.titulo}' removido com sucesso`,
      data: resultado,
    });
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao remover projeto",
    });
  }
};