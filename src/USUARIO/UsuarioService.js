const usuarioRepo = require("./UsuarioRepository");

class UsuarioService {
  async listarTodos() {
    const repo = getUsuarioRepository();
    return await repo.find();
  }

  async criar(data) {
    return await usuarioRepo.save(data);
  }

  async atualizar(id, data) {
    return await usuarioRepo.update(id, data);
  }

  async deletar(id) {
    return await usuarioRepo.delete(id);
  }
}

module.exports = UsuarioService;
