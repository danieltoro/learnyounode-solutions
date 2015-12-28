var numero =
process.argv
	.slice(2)
		.reduce(function(ValorPrevio,ValorActual){
			return ValorPrevio + Number(ValorActual);
		}, 0);
console.log(numero);