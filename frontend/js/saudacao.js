export function saudacao() {
  const elementos = document.querySelectorAll(".saudacao");
  const hora = new Date().getHours();

  let mensagem;

  if (hora < 12) mensagem = "Bom dia, eu me chamo";
  else if (hora < 18) mensagem = "Boa tarde, eu me chamo";
  else mensagem = "Boa noite, eu me chamo";

  elementos.forEach((el) => {
    el.textContent = mensagem;
  });
}