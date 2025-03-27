const IdentificacaoCampoPreenchidoService = require("./IdentificacaoCampoPreenchidoService");
const service = new IdentificacaoCampoPreenchidoService();

class IdentificacaoCampoPreenchidoController {
  async list(req, res) {
    try {
      const data = await service.listarTodos();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const novo = await service.criar(req.body);
      return res.status(201).json(novo);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = IdentificacaoCampoPreenchidoController;