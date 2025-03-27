const anexoRepo = require("./AnexoRepository");

class AnexoService {
  async listarTodos() {
    return await anexoRepo.find();
  }

  async criar(data) {
    return await anexoRepo.save(data);
  }

  async atualizar(id, data) {
    return await anexoRepo.update(id, data);
  }

  async deletar(id) {
    return await anexoRepo.delete(id);
  }
}

module.exports = AnexoService;