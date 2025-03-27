const Resposta = require("./Resposta");

function getRespostaRepository() {
  return AppDataSource.getRepository("Resposta");
}

module.exports = getRespostaRepository;
