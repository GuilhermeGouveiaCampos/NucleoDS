const getLogRepository = require("./LogRepository");

class LogService {
  async listarTodos() {
    const repo = getLogRepository();
    return await repo.find();
  }

  async criar(logData) {
    const repo = getLogRepository();
    return await repo.save(logData);
  }

  async buscarPorUsuario(idUsuario) {
    const repo = getLogRepository();
    return await repo.find({ where: { idUsuario } });
  }
}

module.exports = LogService;
