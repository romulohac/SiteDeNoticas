module.exports.noticias =function(app, req, res){
    
    var connection = app.config.dbConnection();   //carregando o mudulo de conexão com o banco de dados , configurado em server.js
    var noticiasModel = new app.app.models.NoticiasDAO(connection); // arquivo noticiasModel instanciado para que seja usado na função abaixo     
    noticiasModel.getNoticias(function(error, result ){
        res.render("noticias/noticias",{noticias : result});
    });    

}
module.exports.noticia = function(app, req, res){
    
    var connection = app.config.dbConnection(); //carregando o mudulo de conexão com o banco de dados , configurado em server.js
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticia(function(error, result ){
        res.render("noticias/noticia",{noticia: result});
    });
    
}