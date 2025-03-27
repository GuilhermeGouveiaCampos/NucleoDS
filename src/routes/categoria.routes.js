const express = require("express");
const CategoriaController = require("../CATEGORIA/CategoriaController");

const router = express.Router();
const controller = new CategoriaController();

router.get("/", (req, res) => controller.list(req, res));
router.post("/", (req, res) => controller.create(req, res));
router.put("/:id", (req, res) => controller.update(req, res));
router.patch("/:id/inativar", (req, res) => controller.inactivate(req, res));

module.exports = router;
