const express = require("express");
const LogController = require("../LOG/LogController");

const router = express.Router();
const controller = new LogController();

router.get("/", (req, res) => controller.list(req, res));

module.exports = router;
