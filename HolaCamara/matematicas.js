
const objeto ={};

function suma(x1, x2) {
	return x1 + x2;
}

function resta(x1, x2){
	return x1 - x2;
}


//console.log(suma(2,2));
//exports.suma = suma;//crea un objeto parea poder exportar la propiedad de un objeto

objeto.suma = suma;// crea un objeto pero constante
module.exports = objeto;// se puede esportar un obhjeto con multiples propiedades
// esto uede esportar funciones 