const Empresa = require("../model/empresa");
const mongoose = require("mongoose");

const find = async (req, res) => {
  try {
    const id = mongoose.Types.ObjectId(req.params.id);
    let found = false;
    const empresa = awaitEmpresa.findById(id);

    if (empresa != null) {
      found = true;
    }

    if (!found) {
      return res
        .status(404)
        .send({ message: "Empresa não foi encontrada, tente outro ID" });
    }

    return res.status(200).send(empresa);
  } catch (err) {
    console.log(`erro: ${err}`);
    return res.status(500).send("erro no servidor, tente novamente mais tarde");
  }
};

const findAllEmpresas = async (req, res) => {
  return res.status(200).send(await Empresa.find());
};

const createEmpresa = async (req, res) => {
  const empresa = req.body;

  if (Object.keys(empresa).length === 0) {
    return res.status(400).send({ message: "O corpo da mensagem está vazio" });
  }

  if (!empresa.nome) {
    returnres
      .status(400)
      .send({ message: "O campo 'nome' não foi encontrado" });
  }

  if (!empresa.numFuncinarios) {
    returnres
      .status(400)
      .send({ message: "O campo 'NumFuncionarios' não foi encontrado" });
  }

  return res.status(201).send(await Empresa.create(empresa));
};

const updateEmpresa = (req, res) => {
  const id = req.params.id;
  let found = false;

  if (Object.keys(empresa).length === 0) {
    return res.status(400).send({ message: "O corpo da mensagem está vazio" });
  }
  if (!empresa.id) {
    return res.status(400).send({ message: "O campo 'id' não foi encontrado" });
  }
  if (!empresa.nome) {
    returnres
      .status(400)
      .send({ message: "O campo 'nome' não foi encontrado" });
  }

  if (!empresa.numFuncinarios) {
    returnres
      .status(400)
      .send({ message: "O campo 'NumFuncionarios' não foi encontrado" });
  }

  empresas.map(function (valor, index) {
    const empresa = req.body;
    if (valor.id == id) {
      found = true;
      empresa[index] = empresa;
      return res.send(empresa[index]);
    }
  });
};

const deleteEmpresa = (req, res) => {
  const id = req.params.id;
  let found = false;

  empresas.map(function (valor, index) {
    if (valor.id == id) {
      found = true;
      empresas.splice(index, 1);
      return res.send(valor);
    }
  });
};

module.exports = {
  find,
  findAllEmpresas,
  createEmpresa,
  updateEmpresa,
  deleteEmpresa,
};
