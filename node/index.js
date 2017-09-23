var app = require('./config/server')
var routeHome = require('./app/routes/home')
var routeNoticias = require('./app/routes/noticias')
var routeFormAddNoticia = require('./app/routes/formulario_inclusao_noticia')

routeHome(app)
routeNoticias(app)
routeFormAddNoticia(app)

app.listen(3000, function () {
	console.log('Servidor rodando com Express na porta 3000')
})