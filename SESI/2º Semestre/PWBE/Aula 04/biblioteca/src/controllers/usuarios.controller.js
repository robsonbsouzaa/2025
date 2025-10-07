const usuarios = require("../data/usuarios.data");

//req -> Request(Requisicao)
//res -> Response(Resposta)
const listar = (req, res) => {
    res.status(200).send(usuarios).end();
};

const buscar = (req, res) => {
    //   /usuarios/id
    const idUsuario = req.params.id;

    var user = "não encontrado";

    usuarios.forEach((usuario, index) => {
        if (usuario.id === idUsuario) {
            user = usuario;
        }
    });

    res.send(user).end();
};

const cadastrar = (req, res) => {
    const novoUsuario = req.body;
    usuarios.push(novoUsuario);
    res.status(201).send("Cadastrado com Sucesso !").end();
};

const apagar = (req, res) => {
    // /usuarios/:id -> parametro
    const idUsuario = req.params.id;

    var indice = -1;

    usuarios.forEach((usuario, index) => {
        if (usuario.id === idUsuario) {
            indice = index;
        }
    });

    if (indice === -1) {
        res.status(404).end();
    } else {
        usuarios.splice(indice, 1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    const usuarioAlterado = req.body;

    var encontrei = false;

    usuarios.forEach((usuario, index) => {
        if (usuario.id === usuarioAlterado.id) {
            usuarios[index] = usuarioAlterado;
            encontrei = true;
        }
    });

    if (encontrei === false) {
        res.status(404).end();
    } else {
        res.status(201).end();
    }
};

const atualizar = (req, res) => {
    const idUsuario = req.params.id;
    const novosDados = req.body;

    var indice = -1;

    usuarios.forEach((usuario, index) => {
        if (usuario.id === idUsuario) indice = index;
    });

    if (indice === -1) {
        res.status(404).end();
    } else {
        Object.keys(novosDados).forEach((key) => {
            usuarios[indice][key] = novosDados[key];
        });
        res.status(204).end();
    }
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar,
    alterar,
    atualizar
};