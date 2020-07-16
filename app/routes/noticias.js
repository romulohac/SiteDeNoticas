
module.exports = function(app){

    app.get('/noticias', function(req, res){   // função de solicitação de rota.
     app.app.controllers.noticias.noticias(app, req, res);   
      
      
});

app.get('/noticia', function(req, res){   // função de solicitação de rota.
    app.app.controllers.noticias.noticia(app, req, res);    
});

};