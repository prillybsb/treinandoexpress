const dotenv = require("dotenv");
const express = require("express");
const connectToDatabase = require("./database/database");
//const request = require("request");
const app = express();
const empresa = require("./router/empresa.router");
const authService = require("./service/auth.server");
const jwt = require("jsonwebtoken");

dotenv.config();
connectToDatabase();

const port = 3000;
const segredo = "633f3d0a5a9d77f83e93703";

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

app.post("/login", async (req, res) => {
  try {
    const { email, senha } = req.body;
    const user = await authService.loginService(email);

    if (!user) {
      return res.status(400).send({
        message: "Usuário não encontrado, tente novamente",
      });
    }

    if (senha !== user.senha) {
      return res.status(400).send({
        message: "Senha inválida",
      });
    }

    const token = authService.generateToken(user.id, segredo);
    res.status(200).send({
      user,
      token,
    });
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
});

app.get("/teste-token", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ message: "O token não foi informado" });
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2 || !/^Bearer$/i.test(parts[0])) {
    return res.status(401).send({ message: "Token inválido" });
  }

  const token = parts[1];

  // Aqui você pode usar a biblioteca JWT para verificar e decodificar o token
  // Exemplo usando o JWT do jsonwebtoken:
  try {
    const decoded = jwt.verify(token, segredo);
    // Agora você pode acessar os dados do token em `decoded`
    // e realizar a lógica necessária com esses dados

    // Se a validação for bem-sucedida, você pode continuar com o processamento
    res.status(200).send({ message: "Token válido" });
  } catch (error) {
    // Se houver um erro na validação do token, retorne um erro 401
    return res.status(401).send({ message: "Token inválido" });
  }
});
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
