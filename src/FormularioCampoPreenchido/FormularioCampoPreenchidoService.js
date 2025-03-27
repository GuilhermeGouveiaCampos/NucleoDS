const preenchidoRepo = require("./FormularioCampoPreenchidoRepository");

class FormularioCampoPreenchidoService {
  async listarTodos() {
    return await preenchidoRepo.find();
  }

  async criar(data) {
    return await preenchidoRepo.save(data);
  }
}

module.exports = FormularioCampoPreenchidoService;
