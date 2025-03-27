const getCategoriaRepository = require("./CategoriaRepository");

class CategoriaService {
  async listarTodas() {
    const repo = getCategoriaRepository();
    return await repo.find();
  }

  async criar(data) {
    const repo = getCategoriaRepository();
    return await repo.save(data);
  }

  async atualizar(id, data) {
    const repo = getCategoriaRepository();
    return await repo.update(id, data);
  }

  async inativar(id) {
    const repo = getCategoriaRepository();
    return await repo.update(id, { habilitado: 0 });
  }
}

module.exports = CategoriaService;
