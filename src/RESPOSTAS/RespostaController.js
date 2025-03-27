const RespostaService = require("./RespostaService");
const service = new RespostaService();

class RespostaController {
  async list(req, res) {
    try {
      const data = await service.listarTodas();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const nova = await service.criar(req.body);
      return res.status(201).json(nova);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = RespostaController;