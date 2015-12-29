var fs = require('fs')
var path = require('path')

module.exports = function (dir, filtro, callback) {

  fs.readdir(dir, function (err, archivos) {
    if (err)
      return callback(err)

    archivos = archivos.filter(function (archivo) { return path.extname(archivo) === '.' + filtro });

    callback(null, archivos)
  });
}