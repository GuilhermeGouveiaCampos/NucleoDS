const express = require("express");
const IdentificacaoCampoPreenchidoController = require("../IDENTIFICACAOPRENCHICO/IdentificacaoCampoPreenchidoController");

const router = express.Router();
const controller = new IdentificacaoCampoPreenchidoController();

router.get("/", (req, res) => controller.list(req, res));
router.post("/", (req, res) => controller.create(req, res));

module.exports = router;
    