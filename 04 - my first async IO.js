var fs = require('fs');

var dir = process.argv[2]

fs.readFile(dir, 'utf8', function(err, data){
	var numeroDeLineas = data.split('\n').length -1;
	console.log(numeroDeLineas);
	
});

