const identificacaoRepo = require("./IdentificacaoRepository");

class IdentificacaoService {
  async listarTodas() {
    return await identificacaoRepo.find();
  }

  async criar(data) {
    return await identificacaoRepo.save(data);
  }

  async atualizar(id, data) {
    return await identificacaoRepo.update(id, data);
  }

  async deletar(id) {
    return await identificacaoRepo.delete(id);
  }
}

module.exports = IdentificacaoService;