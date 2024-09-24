const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware para habilitar o CORS e o body parser para JSON
app.use(cors());
app.use(bodyParser.json());

// Definindo uma rota de exemplo
app.get("/", (req, res) => {
  res.send("Servidor de backend funcionando!");
});

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
