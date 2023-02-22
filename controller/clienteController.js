var Usuario = require('../model/usuario')


async function index(req, res) {
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id)
  }
  res.render("cliente/index.ejs",{Admin:usuario});
}

async function indexLogout(req, res) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.clearCookie('connect.sid'); // Limpa o cookie de sessão
    res.render("cliente/index.ejs",{Admin:undefined});
  });
}

/*async function indexLogout(req, res) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.render("cliente/index.ejs",{Admin:undefined});
  });
}

async function indexLogout(req, res) {
  req.user = 'undefined'
  res.render("cliente/index.ejs",{Admin:undefined});

}*/

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
