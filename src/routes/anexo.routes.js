const express = require("express");
const AnexoController = require("../ANEXO/AnexoController");

const router = express.Router();
const controller = new AnexoController();

router.get("/", (req, res) => controller.list(req, res));
router.post("/", (req, res) => controller.create(req, res));
router.put("/:id", (req, res) => controller.update(req, res));
router.delete("/:id", (req, res) => controller.delete(req, res));

module.exports = router;