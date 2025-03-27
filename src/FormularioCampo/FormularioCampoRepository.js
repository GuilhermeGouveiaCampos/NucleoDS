const FormularioCampo = require("./FormularioCampo");

function getFormularioCampoRepository() {
  return AppDataSource.getRepository("FormularioCampo");
}

module.exports = getFormularioCampoRepository;
