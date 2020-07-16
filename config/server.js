var express = require ("express");
var consign = require('consign'); // instancia instalada que serve para declarar rotas por parametro.
var  bodyParser = require ('body-parser');
var expressValitador =require('express-validator');
var app = express();
app.set('view engine', 'ejs')
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended : true}));
app.use(expressValitador());

consign()
.include('app/routes') // diretorio incluido para que o consign faça o scan das rotas.
.then('config/dbConnection.js') // autoload do aquivo do banco de dados , para evitar fazer require em paginhas que ultilizarão o banco de dados.
.then('app/models')
.into(app); // lançando os modulos escaneados do diretorio routers para o arquivo app.js 
 
module.exports = app;