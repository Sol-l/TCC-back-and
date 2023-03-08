const express = require("express");
const router = express.Router();
const crudController = require("../controller/crudController");

router.get("/adicionaproduto", crudController.adicionaproduto);
router.get("/excluiproduto", crudController.excluiproduto);

module.exports = router;
