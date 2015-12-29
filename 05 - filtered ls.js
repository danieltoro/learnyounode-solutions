var fs = require('fs');
var path = require('path');

var dir = process.argv[2]
var filtro = process.argv[3]

fs.readdir(dir, function(err, archivos){
	archivos
		.filter(function(archivo){ return path.extname(archivo) === '.' + filtro })
		.forEach(function(archivo){ console.log(archivo); });
});