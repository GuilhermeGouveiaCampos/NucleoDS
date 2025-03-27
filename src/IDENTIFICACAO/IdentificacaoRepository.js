const Identificacao = require("./Identificacao");

function getIdentificacaoRepository() {
  return AppDataSource.getRepository("Identificacao");
}

module.exports = getIdentificacaoRepository;
