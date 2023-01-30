var conexao = require('../config/conexao')

var UsuarioSchema = conexao.Schema({
    nome:{type:String},
    sobrenome:{type:String},
    email:{type:String},
    senha:{type:String},
    rua:{type:String},
    bairro:{type:String},
    cidade:{type:String},
    estado:{type:String},
    complemento:{type:String},
    numero:{type:String},
})

module.exports = conexao.model("Usuario", UsuarioSchema)