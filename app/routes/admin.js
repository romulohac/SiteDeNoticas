module.exports = function(app){

    app.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia", {validacao : {}, noticia:{}});
    });


    app.post('/noticias/salvar', function(req, res){
        var noticia = req.body;
        // implementando o midware express validator nos campos do formulario .

        req.assert('titulo','O Título é obrigatório').notEmpty();
        req.assert('resumo','O Resumo é obrigatório').notEmpty();
        req.assert('resumo','O Resumo  deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor','O autor  é obrigatorio').notEmpty();
        req.assert('data_noticia','A data é obrigatorio').notEmpty().isDate({format:'YYY-MM-DD'});
        req.assert('noticia','A Noticia  é obrigatorio').notEmpty();


        var erros = req.validationErrors();

        console.log(erros);

        if(erros){

            res.render("admin/form_add_noticia", {validacao: erros, noticia : noticia});
                return;
        }

  
         var connection = app.config.dbConnection(); //carregando o mudulo de conexão com o banco de dados , configurado em server.js
        
        var noticiasModel = new app.app.models.NoticiasDAO(connection); // arquivo noticiasModel instanciado para que seja usado na função abaixo
        
        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect("/noticias");

        });    
    });
    
    };