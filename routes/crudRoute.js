const express = require("express");
const router = express.Router();
const crudController = require("../controller/crudController");

router.get("/adicionaproduto", crudController.adicionaproduto);

module.exports = router;
