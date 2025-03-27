const express = require("express");
const FormularioController = require("../FORMULARIO/FormularioController");

const router = express.Router();
const controller = new FormularioController();

router.get("/", (req, res) => controller.list(req, res));
router.post("/", (req, res) => controller.create(req, res));
router.put("/:id", (req, res) => controller.update(req, res));
router.delete("/:id", (req, res) => controller.delete(req, res));

module.exports = router;
