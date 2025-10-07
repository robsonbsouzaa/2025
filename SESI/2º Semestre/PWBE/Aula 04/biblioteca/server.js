const express = require("express"); //Importa um modulo
const cors = require("cors");

const UsuariosRoutes = require("./src/routes/usuarios.routes");

const app = express();

app.use(express.json()); //Habilita comunicação via JSON
app.use(cors()); //Habilita requisição local

//Importar as Rotas configuradas
app.use(UsuariosRoutes);

app.listen(3000, () => {
    console.log("Servidor online na porta 3000");
});