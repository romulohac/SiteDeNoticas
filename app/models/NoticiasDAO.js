function NoticiasDAO(connection){
    this._coonection = connection;

}

NoticiasDAO.prototype.getNoticias =  function(callback){
    this._coonection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function (callback){
    this._coonection.query ('select * from noticias where id_noticia = 1', callback);
}


NoticiasDAO.prototype.salvarNoticia =  function(noticia, callback){
    
    this._coonection.query('insert into noticias set ?', noticia, callback)
}


module.exports = function(){
    return NoticiasDAO;


}