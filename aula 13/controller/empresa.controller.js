const empresas = [
  {
    id: 1,
    nome: "empresa1",
    numFuncinarios: 100,
  },
  {
    id: 2,
    nome: "empresa2",
    numFuncinarios: 1200,
  },

  {
    id: 3,
    nome: "empresa3",
    numFuncinarios: 5000,
  },
  {},
];

const find = (req, res) => {
  const id = req.params.id;
  let found = false;

  empresas.map(function (valor) {
    if (valor.id == id) {
      found = true;
      return res.send(valor);
    }
  });

  if (!found) {
    res.status(404).send({ message: "Não foi encontrado" });
  }
};

const findAllEmpresas = (req, res) => {
  res.send(empresas);
};

const createEmpresa = (req, res) => {
  const empresa = req.body;

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

  empresa.nacionalidade = "brasileira";

  empresas.push(empresa);
  res.status(201).send(empresas);
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
