var fs = require('fs');

var dir = process.argv[2]

var numeroDeLineas = 
	fs.readFileSync(dir, 'utf8')
		.split('\n')
		.length -1;

console.log(numeroDeLineas);