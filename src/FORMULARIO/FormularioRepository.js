const { AppDataSource } = require("../database/data-source");
const Formulario = require("./Formulario");

function getFormularioRepository() {
  return AppDataSource.getRepository(Formulario);
}

module.exports = getFormularioRepository;
