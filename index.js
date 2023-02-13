const express = require("express");
const app = express();
const path = require("path");
const passport = require('passport')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var Usuario = require('./model/usuario')
var session = require('express-session')


app.use(cookieParser())

app.use(bodyParser.json())

const clienteRoute = require("./routes/clienteRoute");
const crudRoute = require("./routes/crudRoute");
const { render } = require("ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); //dirname significa pasta do diretório ou pasta em que os arquivos estão 
app.set("view engine", "ejs");

app.use("/", clienteRoute);
app.use("/admin", crudRoute);



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
        if(err.message.includes('duplicate key error')) {
          err = new Error('This email is already registered');
          res.redirect('/cadastro');
        } 
      }else {
        res.redirect('/');
      }
    })
})

//Crud parte da exclusão de dados
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
//Crud parte da exclusão de dados

//ISSO É PARA O LOGIN
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    })
)

app.use(passport.authenticate('session'));
//ISSO É PARA O LOGIN

//Crud parte da edição de dados
app.get('/edit/:id', function(req, res){
  Usuario.findById(req.params.id, function(err,docs){
    if(err){
        console.log(err)
    }else{
       res.render("/edita.ejs", {Usuario: docs})
    }
  })
})

app.post('/edit/:id', function(req, res){
  Usuario.findByIdAndUpdate(req.params.id, 
    { nome: req.body.txtNome, 
      sobrenome: req.body.txtSobrenome, 
      email: req.body.txtEmail, 
      senha: req.body.txtSenha
    },function(err,docs){
      res.redirect("/", {Usuario: docs})
    })
})
//Crud parte da edição de dados

app.listen("3000", function (req, res) {
  console.log("Servidor rodando");
});