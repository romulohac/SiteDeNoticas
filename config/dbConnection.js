var mysql = require ('mysql'); /*cirando variavel msql e fazendo um require do modulo mysql*/
    
var connMySQL = function(){ // tornar a conexão com o banco de dados somente quando a pagina onde necessita do banco for acessada
    
    console.log('conexão com banco de dados foi estabelecida');


    return mysql.createConnection({ /* criando uma variavel connection e solicitando que ela faça uma verificação dos dados do json*/
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'portal_noticias'

});

}

    module.exports = function(){
        console.log ('O autoload corregou o modulo de conezão com db');

        return connMySQL; 
       
}