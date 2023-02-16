const express = require("express");
const router = express.Router();
const clienteController = require("../controller/clienteController");
const bloqueio = require('../config/bloqueio')

router.get("/", clienteController.index);
router.get("/indexLogout", clienteController.indexLogout);
router.get("/login", clienteController.abrelogin);
//router.post("/login", clienteController.abrelogin);
router.get("/cadastro", clienteController.abrecadastro);
router.get("/product", clienteController.abreproduto);
router.get("/store", clienteController.abrestore);
router.get("/checkout",bloqueio, clienteController.abrecheckout);
router.get("/perfil", clienteController.abreperfil);
router.get("/edita", clienteController.abreedita);

router.get('/logout', function (req, res, next) {
    /*req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
    req.session.destroy((err) => {
        if (err) {
          console.log(err);
        } else {
          res.redirect('/indexLogout');
        }
      });
    });*/
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

module.exports = router;
