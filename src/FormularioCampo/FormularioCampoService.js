const getFormularioCampoRepository = require("./FormularioCampoRepository");

class FormularioCampoService {
  async listarTodos() {
    const repo = getFormularioCampoRepository();
    return await repo.find();
  }

  async criar(data) {
    const repo = getFormularioCampoRepository();
    return await repo.save(data);
  }

  async atualizar(id, data) {
    return await formularioCampoRepo.update(id, data);
  }

  async deletar(id) {
    return await formularioCampoRepo.delete(id);
  }
}

module.exports = FormularioCampoService;