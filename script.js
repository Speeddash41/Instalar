const arquivos = [
  {
    nome: "Arquivo Teste ZIP",
    descricao: "Um arquivo compactado de exemplo",
    link: "files/arquivo1.zip"
  },
  {
    nome: "Documento PDF",
    descricao: "Arquivo PDF para download",
    link: "files/arquivo2.pdf"
  }
];

const container = document.getElementById("downloads");

arquivos.forEach(file => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${file.nome}</h3>
    <p>${file.descricao}</p>
    <a href="${file.link}" download>Baixar</a>
  `;

  container.appendChild(card);
});
