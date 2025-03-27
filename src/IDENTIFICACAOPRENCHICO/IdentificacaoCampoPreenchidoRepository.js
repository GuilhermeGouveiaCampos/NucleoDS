const IdentificacaoCampoPreenchido = require("./IdentificacaoCampoPreenchido");

function getIdentificacaoCampoPreenchidoRepository() {
  return AppDataSource.getRepository("IdentificacaoCampoPreenchido");
}

module.exports = getIdentificacaoCampoPreenchidoRepository;
