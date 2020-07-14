
module.exports = function(app){

    app.get('/noticias', function(req, res){   // função de solicitação de rota.
        
        var connection = app.config.dbConnection(); //carregando o mudulo de conexão com o banco de dados , configurado em server.js
        
        var noticiasModel = app.app.models.noticiasModel; // arquivo noticiasModel instanciado para que seja usado na função abaixo
        
        noticiasModel.getNoticias(connection, function(error, result ){
            res.render("noticias/noticias",{noticias : result});
        });    
});

};