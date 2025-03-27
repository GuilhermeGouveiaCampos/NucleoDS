const LogService = require("./LogService");
const service = new LogService();

class LogController {
  async list(req, res) {
    try {
      const data = await service.listarTodos();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = LogController;
