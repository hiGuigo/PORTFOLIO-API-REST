// fonte de dados
import { fetchData } from "./api.js";

// rederizadores
import { renderizarSobre } from "./render/sobre.js";
import { renderizarFormacoes } from "./render/formacoes.js";
import { renderizarCompetencias } from "./render/competencias.js";
import { renderizarExperiencias } from "./render/experiencias.js";
import { renderizarProjetos } from "./render/projetos.js";
import { renderizarCertificados } from "./render/certificados.js";

// função auxiliar
import { saudacao } from "./saudacao.js";

async function init() {
  const formacoes = await fetchData("/formacoes");
  const competencias = await fetchData("/competencias");
  const experiencias = await fetchData("/experiencias");
  const projetos = await fetchData("/projetos");
  const certificados = await fetchData("/certificados");

  renderizarSobre();
  renderizarFormacoes(formacoes);
  renderizarCompetencias(competencias);
  renderizarExperiencias(experiencias);
  renderizarProjetos(projetos);
  renderizarCertificados(certificados);

  saudacao();
}

init();
