export function renderizarSobre() {
  const container = document.querySelector(".sobreContainer");

  const div = document.createElement("div");

  div.innerHTML = `
    <img src="./assets/images/foto1.jpeg" alt="Foto pessoal" />

    <p>
      Sou um desenvolvedor em formação com foco em me tornar full stack,
      atualmente direcionando meus estudos para front-end com React,
      além de fundamentos em JavaScript, TypeScript, Node.js e APIs REST.
    </p>

    <p>
      Tenho praticado a construção de aplicações que integram interface,
      lógica e dados, incluindo um projeto em desenvolvimento com
      integração real entre front-end e back-end.
    </p>

    <p>
      Meu objetivo a curto prazo é conseguir um estágio como
      desenvolvedor, visando evoluir para júnior. No longo prazo,
      pretendo me consolidar como desenvolvedor full stack pleno,
      atuando no desenvolvimento de aplicações web completas,
      com foco em boas práticas, organização de código,
      componentização e integração entre sistemas.
    </p>

    <p>
      <strong>Em evolução:</strong>
      boas práticas, organização de código, integração de sistemas
    </p>

    <p>
      <strong>Palavras-chave:</strong>
      React, JavaScript, TypeScript, Node.js, APIs REST,
      regras de negócio, arquitetura de software, desenvolvimento web.
    </p>
  `;

  container.appendChild(div);
}