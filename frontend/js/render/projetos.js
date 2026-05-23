export function renderizarProjetos(projetos) {
  const container = document.querySelector(".projetosContainer");

  projetos.forEach((projeto) => {
    const article = document.createElement("article");

    const lista = (arr) =>
      arr?.map((item) => `<p>${item}</p>`).join("") || "";

    const listaItem = (arr) =>
      arr?.map((item) => `<p>• ${item}</p>`).join("") || "";

    const links = (arr) =>
      arr?.map((l) => `<p><a href="${l.url}">• ${l.label}</a></p>`).join("") || "";

    article.innerHTML = `
      <img src="${projeto.imagem}">

      <div>
        <h1>${projeto.titulo}</h1>

        <h2>Problema</h2>
        ${lista(projeto.problema)}

        <h2>Objetivo</h2>
        ${lista(projeto.objetivo)}

        <h2>Solução</h2>
        ${lista(projeto.solucao)}

        <h2>Tecnologias</h2>
        ${listaItem(projeto.tecnologias)}

        <h2>Resultado</h2>
        ${lista(projeto.resultados)}

        <h2>Minha contribuição</h2>
        ${listaItem(projeto.atividades)}

        <h2>Links</h2>
        ${links(projeto.links)}
      </div>
    `;

    container.appendChild(article);
  });
}