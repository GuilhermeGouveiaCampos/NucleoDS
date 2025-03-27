const respostaRepo = require("./RespostaRepository");

class RespostaService {
  async listarTodas() {
    return await respostaRepo.find();
  }

  async criar(data) {
    return await respostaRepo.save(data);
  }
}

module.exports = RespostaService;