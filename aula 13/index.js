const dotenv = require("dotenv");
const express = require("express");
const connectToDatabase = require("./database/database");
//const request = require("request");
const app = express();
const empresa = require("./router/empresa.router");

dotenv.config();
connectToDatabase();

const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const url = req.query.url; // Use req.query para obter a URL da solicitação GET

  if (!url) {
    return res.status(400).json({ error: "A URL é obrigatória" });
  }

  request(url, function (error, response, body) {
    if (error) {
      return res.status(500).json({ error: "Erro ao buscar a URL externa" });
    }

    console.log("statusCode:", response && response.statusCode);
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
