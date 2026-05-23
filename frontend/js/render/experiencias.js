export function renderizarExperiencias(experiencias) {
  const container = document.querySelector(".experienciasContainer");

  experiencias.forEach((exp) => {
    const div = document.createElement("div");

    const [titulo, descricao] = exp.item.split(":");

    div.innerHTML = `
      <p>
        • <strong>${titulo}:</strong> ${descricao.trim()}
      </p>
    `;

    container.appendChild(div);
  });
}