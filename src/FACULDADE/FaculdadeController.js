const FaculdadeService = require("./FaculdadeService");
const service = new FaculdadeService();

class FaculdadeController {
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

  async update(req, res) {
    try {
      await service.atualizar(req.params.id, req.body);
      return res.status(200).json({ message: "Atualizado com sucesso." });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      await service.deletar(req.params.id);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = FaculdadeController;