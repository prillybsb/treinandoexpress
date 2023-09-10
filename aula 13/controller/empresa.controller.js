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
  res.send(empresas[id]);
};

const findAllEmpresas = (req, res) => {
  res.send(empresas);
};

const createEmpresa = (req, res) => {
  const empresa = req.body;
  if ((req, body.nome == null)) {
    return res.send({ message: "corpo da mensagem está vazio" });
  }
  empresas.push(empresa);
  res.send(empresas);
};

module.exports = {
  find,
  findAllEmpresas,
  createEmpresa,
};
