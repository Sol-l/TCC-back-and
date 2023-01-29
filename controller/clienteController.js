async function index(req, res) {
  res.render("cliente/index.ejs");
}

async function abrelogin(req, res) {
  res.render("cliente/login.ejs");
}

async function abrecadastro(req, res) {
  res.render("cliente/cadastro.ejs");
}

async function abreproduto(req, res) {
  res.render("cliente/product.ejs");
}

async function abrestore(req, res) {
  res.render("cliente/store.ejs");
}

async function abrecheckout(req, res) {
  res.render("cliente/checkout.ejs");
}

async function abreperfil(req, res) {
  res.render("cliente/perfil.ejs");
}

module.exports = {
  index,
  abrelogin,
  abrecadastro,
  abreproduto,
  abrestore,
  abrecheckout,
  abreperfil,
};
