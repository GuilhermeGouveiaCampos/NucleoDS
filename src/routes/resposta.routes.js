const express = require("express");
const RespostaController = require("../RESPOSTAS/RespostaController");

const router = express.Router();
const controller = new RespostaController();

router.get("/", (req, res) => controller.list(req, res));
router.post("/", (req, res) => controller.create(req, res));

module.exports = router;
