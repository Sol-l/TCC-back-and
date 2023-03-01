const express = require("express");
const app = express();
const path = require("path");
const passport = require('passport')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var Usuario = require('./model/usuario')
var Produto = require('./model/produto')
var session = require('express-session')
const upload = require('./config/upload')

//ISSO É PARA O LOGIN
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  })
)

app.use(passport.authenticate('session'));
//ISSO É PARA O LOGIN

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

//Crud parte da edição de dados 
app.get('/edit/:id', function(req, res){
  Usuario.findById(req.params.id, function(err,docs){
    if(err){
        console.log(err)
    }else{
       res.render("cliente/edita.ejs", {Admin: docs})
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
      res.redirect("/")
    })
})

//Editar dados do endereço
app.get('/edite/:id', function(req, res){
  Usuario.findById(req.params.id, function(err,docs){
    if(err){
        console.log(err)
    }else{
       res.render("cliente/editaEndereco.ejs", {Admin: docs})
    }
  })
})

app.post('/edite/:id', function(req, res){
  Usuario.findByIdAndUpdate(req.params.id, 
    { rua: req.body.txtRua, 
      bairro: req.body.txtBairro, 
      cidade: req.body.txtCidade, 
      estado: req.body.txtEstado,
      complemento: req.body.txtComple, 
      numero: req.body.txtNumero
    },function(err,docs){
      res.redirect("/")
    })
})
//Editar dados do endereço
//Crud parte da edição de dados

//PARTE DO CADASTRO DE PRODUTOS//

app.post('/admin/adicionaproduto',upload.array('txtFotos',10), function(req, res){

  const x = []; // Inicializa o array com um array vazio
  
  for (let i = 0; i < req.files.length; i++) {
    
    x.push(req.files[i].filename); // Adiciona o nome do arquivo ao array produto.foto
  }
  console.log(x)
  
  var produto = new Produto({
    nome: req.body.txtNomeProduto,
    categoria: req.body.txtCategoria,
    preco: req.body.txtPreco,
    quantidade: req.body.txtQuantidade,
    descricao: req.body.txtDescricao,
    detalhes: req.body.txtDetalhes,
    foto: x
  })  

  produto.save(function(err){
    if(err){
      if(err.message.includes('duplicate key error')) {
        err = new Error('Esse produto já foi cadastrado');
        res.redirect('/');
      } 
    }else {
      res.redirect('/admin/adicionaproduto');
    }
  })
})

//parte da abertura da página pelo id do produto

app.get('/abreproduto/:id',async function(req, res){
  let usuario = ''
  if(typeof req.user !== 'undefined'){
    usuario = await Usuario.findById(req.user.id)
  }
  Produto.findById(req.params.id, function(err,docs){
    if(err){
        console.log(err)
    }else{
       res.render("cliente/product.ejs", {Admin:usuario, Produto: docs})
    }
  })
})


app.listen("3000", function (req, res) {
  console.log("Servidor rodando");
});