var conexao = require('../config/conexao')

var ProdutoSchema = conexao.Schema({
    nome:{type:String},
    categoria:{type:String},
    dimensoes:{type:String},
    preco:{type:String,},
    quantidade:{type:String},
    descricao:{type:String},
    detalhes:{type:String},
    foto:[{type:String}],
})
  
  module.exports = conexao.model("Produto", ProdutoSchema); 

