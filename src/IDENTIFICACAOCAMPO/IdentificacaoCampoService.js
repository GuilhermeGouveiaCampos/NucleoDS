const identificacaoCampoRepo = require("./IdentificacaoCampoRepository");

class IdentificacaoCampoService {
  async listarTodos() {
    return await identificacaoCampoRepo.find();
  }

  async criar(data) {
    return await identificacaoCampoRepo.save(data);
  }

  async atualizar(id, data) {
    return await identificacaoCampoRepo.update(id, data);
  }

  async deletar(id) {
    return await identificacaoCampoRepo.delete(id);
  }
}

module.exports = IdentificacaoCampoService;