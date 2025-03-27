const preenchidoRepo = require("./IdentificacaoCampoPreenchidoRepository");

class IdentificacaoCampoPreenchidoService {
  async listarTodos() {
    return await preenchidoRepo.find();
  }

  async criar(data) {
    return await preenchidoRepo.save(data);
  }
}

module.exports = IdentificacaoCampoPreenchidoService;
