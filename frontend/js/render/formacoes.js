export function renderizarFormacoes(formacoes) {
  const container = document.querySelector(".formacoesContainer");

  formacoes.forEach((formacao) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <p>
        <strong>
          ${formacao.tipo} - ${formacao.instituicao}
        </strong>
      </p>
      <p><strong>Curso:</strong> ${formacao.curso}</p>
      <p><strong>Período:</strong> ${formacao.periodo}</p>
    `;

    container.appendChild(div);
  });
}