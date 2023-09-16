const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose
    .connect(
      "mongodb+srv://prillybsb:<password>@cluster0.zl3ntql.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Mongo DB conectado");
    })
    .catch((err) => {
      console.log(`Erro na conexão com o banco: ${err}`);
    });
}

module.exports = connectToDatabase;
