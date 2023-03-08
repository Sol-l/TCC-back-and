var Produto = require('../model/produto')

async function adicionaproduto(req, res) {
  res.render("crud/adicionaproduto.ejs");
}

async function excluiproduto(req, res) {
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id)
  }
  const produtos = await Produto.find()
  res.render("crud/excluiproduto.ejs",{
  Admin:usuario, Produtos:produtos});
}

module.exports = {
  adicionaproduto,
  excluiproduto,
};
