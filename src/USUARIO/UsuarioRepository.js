const { AppDataSource } = require("../database/data-source");
const Usuario = require("./Usuario");

function getUsuarioRepository() {
  return AppDataSource.getRepository(Usuario); 
}

module.exports = getUsuarioRepository;
  