const express = require("express");
const app = express();
const path = require("path");

const clienteRoute = require("./routes/clienteRoute");
const crudRoute = require("./routes/crudRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/", clienteRoute);
app.use("/admin", crudRoute);

app.listen("3000", function (req, res) {
  console.log("Servidor rodando");
});
