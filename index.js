const express = require("express");
const app = express();
const path = require("path");
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var path = require('path')

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
