const express = require("express");
const FormularioCampoPreenchidoController = require("../FormularioCampoPreenchido/FormularioCampoPreenchidoController");

const router = express.Router();
const controller = new FormularioCampoPreenchidoController();

router.get("/", (req, res) => controller.list(req, res));
router.post("/", (req, res) => controller.create(req, res));

module.exports = router;
