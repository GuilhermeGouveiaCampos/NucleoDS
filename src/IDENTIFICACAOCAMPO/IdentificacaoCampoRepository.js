const IdentificacaoCampo = require("./IdentificacaoCampo");

function getIdentificacaoCampoRepository() {
  return AppDataSource.getRepository("IdentificacaoCampo");
}

module.exports = getIdentificacaoCampoRepository;
