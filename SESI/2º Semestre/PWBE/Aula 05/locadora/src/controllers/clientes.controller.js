const db = require("../data/connection");

const listarClientes = async (req, res) => {
    const lista = await db.query("SELECT * FROM clientes");
    res.json(lista[0]).end();
}

const buscarClientes = async (req, res) => {
    const idCliente = req.params.id;
    const cliente = await db.query("SELECT * FROM clientes WHERE id = " + idCliente);
    res.json(cliente[0][0]).end();
}

const cadastrarCliente = async (req, res) => {
    const {id, nome, email} = req.body;

    const novoCliente = await db.query("INSERT INTO clientes VALUES (?, ?, ?)",[id, nome, email]);

    const cliente = {
        id: id,
        nome: nome
    }
    res.json(cliente).status(201).end();
}

module.exports = {
    listarClientes,
    buscarClientes,
    cadastrarCliente
}