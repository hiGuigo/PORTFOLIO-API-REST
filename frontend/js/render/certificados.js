export function renderizarCertificados(certificados) {
  const container = document.querySelector(".certificadosContainer");

  certificados.forEach((certificado) => {
    const article = document.createElement("article");

    const imagens = certificado.images
      .map((img) => `<img src="${img}" />`)
      .join("");

    article.innerHTML = `
      <h1>${certificado.titulo}</h1>
      ${imagens}
    `;

    container.appendChild(article);
  });
}
