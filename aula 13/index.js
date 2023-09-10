const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/contato", (req, res) => {
  res.send("nosso contato Prillybsb@gmail.com");
});

app.listen(port, () => {
  console.log(`Servidor dodando em http://localhost:${port}`);
});
