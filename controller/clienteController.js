async function index(req, res) {
  res.render("cliente/index.ejs");
}

async function abrelogin(req, res) {
  res.render("cliente/login.ejs");
}

async function abrecadastro(req, res) {
  res.render("cliente/cadastro.ejs");
}

module.exports = {
  index,
  abrelogin,
  abrecadastro,
};
