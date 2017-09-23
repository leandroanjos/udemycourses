var http = require('http');

var server = http.createServer(function (req, res) {
	
	var categoria = req.url
	console.log(categoria)
	
	if (categoria == '/tecnologia') {
		res.end("<html><body>Portal de Noticias - Tecnologia</body></html>")	
	} else if (categoria == '/moda') {
		res.end("<html><body>Portal de Noticias - Moda</body></html>")	
	} else if (categoria == '/beleza') {
		res.end("<html><body>Portal de Noticias - Beleza</body></html>")	
	} else {
		res.end("<html><body>Portal de Noticias</body></html>")	
	}
});

server.listen(3000);

console.log('Servidor rodando na porta 3000');