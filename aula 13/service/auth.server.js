const Usuario = require("../model/usuario");
const jwt = require("jsonwebtoken");

const loginService = async (email) => {
  try {
    const user = await Usuario.findOne({ email });
    return user;
  } catch (err) {
    // Lide com erros aqui
    throw err; // Você pode optar por tratar ou propagar o erro
  }
};

const generateToken = (userid, segredo) => jwt.sign(userid, segredo);

module.exports = { loginService, generateToken };
//Neste código corrigido, loginService é agora uma função assíncrona que aceita email como parâmetro e usa await Usuario.findOne({ email }) para buscar o usuário pelo email corretamente. Certifique-se de importar Usuario corretamente e tratar erros de acordo com as necessidades do seu aplicativo.
