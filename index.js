const express = require("express");
const app = express();
const path = require("path");
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var Usuario = require('./model/usuario')

app.use(cookieParser())

app.use(bodyParser.json())

const clienteRoute = require("./routes/clienteRoute");
const crudRoute = require("./routes/crudRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); //dirname significa pasta do diretório ou pasta em que os arquivos estão 
app.set("view engine", "ejs");

app.use("/", clienteRoute);
app.use("/admin", crudRoute);

app.listen("3000", function (req, res) {
  console.log("Servidor rodando");
});

app.post('/cadastro', function(req, res){
    var usuario = new Usuario({
      nome: req.body.txtNome,
      sobrenome: req.body.txtSobrenome,
      email: req.body.txtEmail,
      senha: req.body.txtSenha,
      rua: req.body.txtRua,
      bairro: req.body.txtBairro,
      cidade: req.body.txtCidade,
      estado: req.body.txtEstado,
      complemento: req.body.txtComple,
      numero: req.body.txtNumero
    })
    usuario.save(function(err){
      if(err){
          console.log(err)
      }else {
        res.redirect('/');
      }
    })
})

app.get('/del/:id', function(req, res){
  Usuario.findByIdAndDelete(req.params.id, function(err){
    if(err){
      console.log(err)
    }else{
      res.redirect('/');
    }
  })
  console.log(req.params.id)
})