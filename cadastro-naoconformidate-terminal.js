var http = require('http');

var configuracoes = {
		hostname: 'localhost',
		port: 3000,
		path: '/naoconformidade',
		method: 'post',
		headers:{
			'Accept': 'application/json',
			'Content-type': 'application/json'
		}
};

var client = http.request(configuracoes, function(res){
	console.log(res.statusCode);
	res.on('data', function(body){
		console.log('Corpo: '+body);
	});
});

var naoconformidade = {
	descricao: 'Sem uso de colete',
	data: ''
};

client.end(JSON.stringify(naoconformidade));