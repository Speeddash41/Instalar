const arquivos = [
  {
    nome: "Jogos de Gba",
    descricao: "jogos de gba diferentes originais",
    link: "files/gba_games.zip"
  },
  {
    nome: "Hack Rom de Pokémon",
    descricao: "50 Hack Roms de Pokémon",
    link: "files/roms.zip"
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
