const Anexo = require("./Anexo");

function getAnexoRepository() {
  return AppDataSource.getRepository("Anexo");
}

module.exports = getAnexoRepository;
