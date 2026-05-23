export function renderizarCompetencias(competencias) {
  const container = document.querySelector(".competenciasContainer");

  competencias.forEach((competencia) => {
    const div = document.createElement("div");

    const imagens = competencia.images
      .map(
        (img) => `
        <img src="${img}" />
      `
      )
      .join("");

    div.innerHTML = `
      <p><strong>${competencia.tipo}</strong></p>
      <p>
        ${imagens}
      </p>
    `;

    container.appendChild(div);
  });
}