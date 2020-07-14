module.exports = function(app){

    app.get('/noticia', function(req, res){   // função de solicitação de rota.
        
        var connection = app.config.dbConnection(); //carregando o mudulo de conexão com o banco de dados , configurado em server.js
        var noticiasModel =   app.app.models.noticiasModel;

    noticiasModel.getNoticia(connection, function(error, result ){
        res.render("noticias/noticia",{noticia: result});
    });
    
});

};