const getFormularioRepository = require("./FormularioRepository");

class FormularioService {
  async listarTodos() {
    const repo = getFormularioRepository();
    return await repo.find();
  }

  async criar(data) {
    const repo = getFormularioRepository();
    return await repo.save(data);
  }


  async atualizar(id, data) {
    return await formularioRepo.update(id, data);
  }

  async deletar(id) {
    return await formularioRepo.delete(id);
  }
}

module.exports = FormularioService;

