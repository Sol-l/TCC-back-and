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
})

const productSchema = conexao.Schema({
    name: { type: String, required: true },
    descricao: { type: String },
    preco: { type: Number, required: true },
    imagem: { type: String }
  });
  
  module.exports = conexao.model('Product', productSchema); //no caso isso ainda n funciona
  module.exports = conexao.model("Usuario", UsuarioSchema);

