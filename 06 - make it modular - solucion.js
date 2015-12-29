var modulo = require('./06 - make it modular - filtro.js');

var dir = process.argv[2]
var filtro = process.argv[3]

modulo(dir, filtro, function (err, archivos) {
  if (err)
    return console.error('Hay un error: ', err)

  archivos.forEach(function (archivo) { console.log(archivo) });
});