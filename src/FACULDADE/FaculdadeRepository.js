const { AppDataSource } = require("../database/data-source");
const Faculdade = require("./Faculdade");

function getFaculdadeRepository() {
  return AppDataSource.getRepository("Faculdade");
}

module.exports = getFaculdadeRepository;
