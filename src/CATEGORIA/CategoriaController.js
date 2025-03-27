const CategoriaService = require("./CategoriaService");
const service = new CategoriaService();

class CategoriaController {
  async list(req, res) {
    try {
      const todas = await service.listarTodas();
      return res.status(200).json(todas);
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
      return res.status(200).json({ message: "Categoria atualizada com sucesso." });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async inactivate(req, res) {
    try {
      await service.inativar(req.params.id);
      return res.status(200).json({ message: "Categoria inativada com sucesso." });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = CategoriaController;
