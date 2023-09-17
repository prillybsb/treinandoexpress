const Empresa = require("../model/empresa");

const findByIdEmpresa = (id) => {
  return Empresa.findById(id);
};

const findAllEmpresa = () => {
  return empresa.find();
};

const createEmpresa = (empresa) => {
  return Empresa.create(empresa);
};

const updateEmpresa = (id, empresa) => {};

const deleteEmpresa = (id) => {};

module.exports = {
  findByIdEmpresa,
  findAllEmpresa,
  createEmpresa,
  updateEmpresa,
  deleteEmpresa,
};
