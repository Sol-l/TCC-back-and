async function adicionaproduto(req, res) {
  res.render("crud/adicionaproduto.ejs");
}

async function excluiproduto(req, res) {
  res.render("crud/excluiproduto.ejs");
}

module.exports = {
  adicionaproduto,
  excluiproduto,
};
