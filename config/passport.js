var passport = require('passport');
var LocalStrategy = require('passport-local');
const Usuario = require('../model/usuario');

passport.use(new LocalStrategy(async function verify(username, password, cb) {

    const usuario = await Usuario.findOne({
        email: username
    })

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
            nome: usuario.txtNome,
            sobrenome: usuario.txtSobrenome,
            email: usuario.txtEmail,
            senha: usuario.txtSenha,
            rua: usuario.txtRua,
            bairro: usuario.txtBairro,
            cidade: usuario.txtCidade,
            estado: usuario.txtEstado,
            complemento: usuario.txtComple,
            numero: usuario.txtNumero
        });
    });
});

passport.deserializeUser(function (usuario, cb) {
    process.nextTick(function () {
        return cb(null, usuario);
    });
});

module.exports = passport