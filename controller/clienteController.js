var Usuario = require('../model/usuario')
var Produto = require('../model/produto')

async function index(req, res) {
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id).populate('carrinho').populate('desejo')
  }
  const Tábua = await Produto.find({categoria:"Tábua"})
  const Faca = await Produto.find({categoria:"Faca"})
  const Colar = await Produto.find({categoria:"Colar"})
  const Quadro = await Produto.find({categoria:"Quadro"})
  const Abajur = await Produto.find({categoria:"Abajur"})
  const Mandala = await Produto.find({categoria:"Mandala"})
  const Rústico = await Produto.find({categoria:"Rústico"})
  const Cuia = await Produto.find({categoria:"Cuia"})
  const Térmica = await Produto.find({categoria:"Térmica"})
  const produtos = await Produto.find()
  res.render("cliente/index.ejs",{
  Admin:usuario, Tábua:Tábua, Faca:Faca, Colar:Colar, Quadro:Quadro, Abajur:Abajur, Mandala:Mandala,
  Rústico:Rústico, Cuia:Cuia, Térmica:Térmica, Produtos:produtos, Carrinho:usuario.carrinho, Desejo:usuario.desejo});
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
    usuario = await Usuario.findById(req.user.id).populate('carrinho').populate('desejo')
  }
  res.render("cliente/login.ejs",{Admin:usuario, Carrinho:usuario.carrinho, Desejo:usuario.desejo});
}

async function abrecadastro(req, res) {
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id).populate('carrinho').populate('desejo')
  }
  res.render("cliente/cadastro.ejs",{Admin:usuario, Carrinho:usuario.carrinho, Desejo:usuario.desejo});
}

async function abreproduto(req, res) {
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id).populate('carrinho').populate('desejo')
  }
  const Tábua = await Produto.find({categoria:"Tábua"})
  const Faca = await Produto.find({categoria:"Faca"})
  const Colar = await Produto.find({categoria:"Colar"})
  const Quadro = await Produto.find({categoria:"Quadro"})
  const Abajur = await Produto.find({categoria:"Abajur"})
  const Mandala = await Produto.find({categoria:"Mandala"})
  const Rústico = await Produto.find({categoria:"Rústico"})
  const Cuia = await Produto.find({categoria:"Cuia"})
  const Térmica = await Produto.find({categoria:"Térmica"})
  const produtos = await Produto.find()
  res.render("cliente/product.ejs",{
  Admin:usuario, Tábua:Tábua, Faca:Faca, Colar:Colar, Quadro:Quadro, Abajur:Abajur, Mandala:Mandala,
  Rústico:Rústico, Cuia:Cuia, Térmica:Térmica, Produtos:produtos, Carrinho:usuario.carrinho, Desejo:usuario.desejo});
}

async function abrestore(req, res) {
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id).populate('carrinho').populate('desejo')
  }
  const Tábua = await Produto.find({categoria:"Tábua"})
  const Faca = await Produto.find({categoria:"Faca"})
  const Colar = await Produto.find({categoria:"Colar"})
  const Quadro = await Produto.find({categoria:"Quadro"})
  const Abajur = await Produto.find({categoria:"Abajur"})
  const Mandala = await Produto.find({categoria:"Mandala"})
  const Rústico = await Produto.find({categoria:"Rústico"})
  const Cuia = await Produto.find({categoria:"Cuia"})
  const Térmica = await Produto.find({categoria:"Térmica"})
  const produtos = await Produto.find()

  res.render("cliente/store.ejs",{
  Admin:usuario, Tábua:Tábua, Faca:Faca, Colar:Colar, Quadro:Quadro, Abajur:Abajur, Mandala:Mandala,
  Rústico:Rústico, Cuia:Cuia, Térmica:Térmica, Produtos:produtos, Carrinho:usuario.carrinho, Desejo:usuario.desejo});
}

async function abrecheckout(req, res) {
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id).populate('carrinho').populate('desejo')
  }
  res.render("cliente/checkout.ejs",{Admin:usuario, Carrinho:usuario.carrinho, Desejo:usuario.desejo});
}

async function abreedita(req, res) {
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id).populate('carrinho').populate('desejo')
  }
    res.render("cliente/edita.ejs",{Admin:usuario, Carrinho:usuario.carrinho, Desejo:usuario.desejo});
}

async function abreeditaendereco(req, res) {
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id).populate('carrinho').populate('desejo')
  }
    res.render("cliente/editaEndereco.ejs",{Admin:usuario, Carrinho:usuario.carrinho, Desejo:usuario.desejo});
}

async function abreperfil(req, res) {
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id).populate('carrinho').populate('desejo')
  }
  res.render("cliente/perfil.ejs" ,{Admin:usuario, Carrinho:usuario.carrinho, Desejo:usuario.desejo});
}

async function abretermos(req, res) {
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id).populate('carrinho').populate('desejo')
  }
  res.render("cliente/termos.ejs" ,{Admin:usuario, Carrinho:usuario.carrinho, Desejo:usuario.desejo});
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
  abretermos,
};
