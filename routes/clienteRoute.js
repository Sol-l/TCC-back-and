var Usuario = require('../model/usuario')
var Produto = require('../model/produto')

const express = require("express");
const router = express.Router();
const clienteController = require("../controller/clienteController");
const bloqueio = require('../config/bloqueio')

router.get("/", clienteController.index);
router.get("/indexLogout", clienteController.indexLogout);
router.get("/login", clienteController.abrelogin);
router.get("/cadastro", clienteController.abrecadastro);
router.get("/product", clienteController.abreproduto);
router.get("/store", clienteController.abrestore);
router.get("/checkout",bloqueio, clienteController.abrecheckout);
router.get("/perfil", bloqueio, clienteController.abreperfil);
router.get("/edita", clienteController.abreedita);
router.get("/editaEndereco", clienteController.abreeditaendereco);
router.get("/termos", clienteController.abretermos);

 router.get('/logout', function (req, res, next) {
        req.user = undefined
        res.redirect('/indexLogout');
});

//ISSO É DO LOGIN
const passport = require('../config/passport')

//ISSO É DO LOGIN

//abrir a tela de login

//ISSO É DO LOGIN
//logar
router.post('/login' , passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
}))

//ISSO É DO LOGIN



//rotas de adição ao carrinho e favoritos


router.get('/carrinho/:id',bloqueio, async (req, res) => {
  const produto = await Produto.findById(req.params.id);
  const usuario = await Usuario.findById(req.user.id)
  usuario.carrinho.push(produto._id)
  await usuario.save()
  res.redirect('/')
});

router.delete('/carrinho/:productId', async (req, res) => {
  const { produtoId } = req.params;
  const produto = await Produto.findById(produtoId);
  if (!produto) {
    return res.status(404).send('Produto não encontrado');
  }
  // Remover o produto do carrinho
});

//desejos
router.get('/desejo/:id',bloqueio, async (req, res) => {
  const produto = await Produto.findById(req.params.id);
  const usuario = await Usuario.findById(req.user.id)
  usuario.desejo.push(produto._id)
  await usuario.save()
  res.redirect('/')
});

router.delete('/desejo/:productId', async (req, res) => {
  const { produtoId } = req.params;
  const produto = await Produto.findById(produtoId);
  if (!produto) {
    return res.status(404).send('Produto não encontrado');
  }
  // Remover o produto do carrinho
});


//rotas de adição ao carrinho e favoritos

module.exports = router;
