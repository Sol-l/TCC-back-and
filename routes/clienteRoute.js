const express = require("express");
const router = express.Router();
const clienteController = require("../controller/clienteController");

router.get("/", clienteController.index);
router.get("/login", clienteController.abrelogin);
router.get("/cadastro", clienteController.abrecadastro);

module.exports = router;
