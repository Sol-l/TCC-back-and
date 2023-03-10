var conexao = require('../config/conexao')

var UsuarioSchema = conexao.Schema({
    nome:{type:String},
    sobrenome:{type:String},
    email:{type:String, unique: true},
    senha:{type:String},
    rua:{type:String},
    bairro:{type:String},
    cidade:{type:String},
    estado:{type:String},
    complemento:{type:String},
    numero:{type:String},
    carrinho:[{
        type: conexao.Schema.Types.ObjectId,
        ref: 'Produto'
    }],
    desejo:[{
        type: conexao.Schema.Types.ObjectId,
        ref: 'Produto'
    }]
})
  
module.exports = conexao.model("Usuario", UsuarioSchema);

