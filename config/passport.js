var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const Usuario = require('../model/usuario');

passport.use(new LocalStrategy(async function verify(username, password, cb) {

    const usuario = await Usuario.findOne({
        email: username
    }).catch(err => console.error(err)); // Adicionado console.error para tratar erros

    if (!usuario) {
        console.log('usuario')
        return cb(null, false, {
            message: 'Usuário não encontrado!'
        });
    } else {
        if (usuario.senha != password) {
            console.log(usuario.senha)
            return cb(null, false, {
                message: 'Senha incorreta!'
            });
        } else {
            console.log('ok')
            return cb(null, usuario);
        }
    } 
}));

passport.serializeUser(function (usuario, cb) {
    process.nextTick(function () {
        cb(null, {
            id: usuario._id,
            email: usuario.txtEmail,
            senha: usuario.txtSenha,
        });
    });
}); 

passport.deserializeUser(function (usuario, cb) {
    process.nextTick(function () {
        return cb(null, usuario);
    });
});

module.exports = passport;
