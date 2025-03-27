const getFaculdadeRepository = require("./FaculdadeRepository");

class FaculdadeService {
  async listarTodas() {
    const repo = getFaculdadeRepository();
    return await repo.find();
  }

  async criar(data) {
    const repo = getFaculdadeRepository();
    return await repo.save(data);
  }

  
}

module.exports = FaculdadeService;
