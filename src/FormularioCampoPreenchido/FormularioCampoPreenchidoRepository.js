const FormularioCampoPreenchido = require("./FormularioCampoPreenchido");

function getFormularioCampoPreenchidoRepository() {
  return AppDataSource.getRepository("FormularioCampoPreenchido");
}

module.exports = getFormularioCampoPreenchidoRepository;
