const express = require("express");
const router = express.Router();
const clienteController = require("../controller/clienteController");

router.get("/", clienteController.index);
router.get("/login", clienteController.abrelogin);
router.post("/login", clienteController.abrelogin);
router.get("/cadastro", clienteController.abrecadastro);
router.get("/product", clienteController.abreproduto);
router.get("/store", clienteController.abrestore);
router.get("/checkout", clienteController.abrecheckout);
router.get("/perfil", clienteController.abreperfil);
router.get("/edita", clienteController.abreedita);
router.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

//ISSO É DO LOGIN
const passport = require('../config/passport')
const bloqueio = require('../config/bloqueio');
//ISSO É DO LOGIN

//abrir a tela de login

//ISSO É DO LOGIN
//logar
router.post('/' , passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
}))
//ISSO É DO LOGIN

module.exports = router;
