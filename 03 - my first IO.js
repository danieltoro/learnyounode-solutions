var fs = require('fs');

var numeroDeLineas = 
	fs.readFileSync(process.argv[2], 'utf8')
		.split('\n')
		.length -1;

console.log(numeroDeLineas);