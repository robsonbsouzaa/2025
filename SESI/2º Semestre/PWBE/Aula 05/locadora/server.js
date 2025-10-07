const express = require('express');
const cors = require('cors');

const clientesRoutes = require("./src/routes/cliente.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(clientesRoutes);

app.listen(3000, () => {
    console.log("Servidor Online");
});