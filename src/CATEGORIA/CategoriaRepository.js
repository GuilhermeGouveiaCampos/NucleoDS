const { AppDataSource } = require("../database/data-source");
const Categoria = require("./Categoria");

function getCategoriaRepository() {
  return AppDataSource.getRepository("Categoria");
}

module.exports = getCategoriaRepository;
