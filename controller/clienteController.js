var Usuario = require('../model/usuario')
var Produto = require('../model/produto')

async function index(req, res) {
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id)
  }
  const produtos = await Produto.find()
  res.render("cliente/index.ejs",{Admin:usuario, Produtos:produtos});
}

async function indexLogout(req, res) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/')
  });
}

async function abrelogin(req, res) {
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id)
  }
  res.render("cliente/login.ejs",{Admin:usuario});
}

async function abrecadastro(req, res) {
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id)
  }
  res.render("cliente/cadastro.ejs",{Admin:usuario});
}

async function abreproduto(req, res) {
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id)
  }
  res.render("cliente/product.ejs",{Admin:usuario});
}

async function abrestore(req, res) {
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id)
  }
  res.render("cliente/store.ejs",{Admin:usuario});
}

async function abrecheckout(req, res) {
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id)
  }
  res.render("cliente/checkout.ejs",{Admin:usuario});
}

async function abreedita(req, res) {
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id)
  }
    res.render("cliente/edita.ejs",{Admin:usuario});
}

async function abreeditaendereco(req, res) {
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id)
  }
    res.render("cliente/editaEndereco.ejs",{Admin:usuario});
}

async function abreperfil(req, res) {
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id)
  }
  res.render("cliente/perfil.ejs" ,{Admin:usuario});
}

module.exports = {
  index,
  abrelogin,
  abrecadastro,
  abreproduto,
  abrestore,
  abrecheckout,
  abreperfil,
  abreedita,
  abreeditaendereco,
  indexLogout,
};
