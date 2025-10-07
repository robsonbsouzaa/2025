const express = require("express");
const router = express.Router();

const UsuariosControllers = require("../controllers/usuarios.controller");

router.get("/usuarios", UsuariosControllers.listar);
router.get("/usuarios/:id", UsuariosControllers.buscar);
router.post("/usuario", UsuariosControllers.cadastrar);
router.delete("/usuario/:id", UsuariosControllers.apagar);
router.put("/usuario", UsuariosControllers.alterar);
router.patch("/usuario/:id", UsuariosControllers.atualizar);

module.exports = router;