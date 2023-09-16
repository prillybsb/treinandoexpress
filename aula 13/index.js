const express = require("express");
const request = require("request");
const app = express();

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

    try {
      const pokemon = JSON.parse(body);
      res.json({
        id: pokemon.id,
        name: pokemon.name,
      });
    } catch (parseError) {
      return res
        .status(500)
        .json({ error: "Erro ao analisar a resposta externa" });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
