const express = require('express');
const router = express.Router();

const clientesController = require("../controllers/clientes.controller");

router.get("/clientes",clientesController.listarClientes);
router.get("/cliente/:id",clientesController.buscarClientes);
router.post("/cliente",clientesController.cadastrarCliente);

module.exports = router;