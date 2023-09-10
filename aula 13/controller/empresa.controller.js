const findAllEmpresas = (req, res) => {
  res.send("todas as empresas listadas");
};

const createEmpresa = (req, res) => {
  res.send("empresa criada com sucesso");
};

module.exports = {
  findAllEmpresas,
  createEmpresa,
};
