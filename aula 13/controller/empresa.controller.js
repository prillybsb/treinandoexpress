const EmpresaService = require("../service/empresa.service");
const mongoose = require("mongoose");

const find = async (req, res) => {
  try {
    const id = mongoose.Types.ObjectId(req.params.id);
    let found = false;
    const empresa = await EmpresaService.findByIdEmpresa(id);

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
  return res.status(200).send(await EmpresaService.findByIdEmpresa());
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

  return res.status(201).send(await EmpresaService.createEmpresa(empresa));
};

const updateEmpresa = async (req, res) => {
  const id = req.params.id;
  const empresa = req.body;
  //let found = false;

  if (Object.keys(empresa).length === 0) {
    return res.status(400).send({ message: "O corpo da mensagem está vazio" });
  }
  //if (!empresa.id) {
  //return res.status(400).send({ message: "O campo 'id' não foi encontrado" });
  //}
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
  return res.status(200).send(await EmpresaService.deleteEmpresa(id));
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
