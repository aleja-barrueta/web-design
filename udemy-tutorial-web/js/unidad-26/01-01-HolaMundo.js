/*
Ejemplos de tipos de datos 
en JavaScript
*/
// Tipo de datos string
var nombre = "Alejandra";
console.log(nombre);

nombre = 10;
console.log(typeof nombre);

// Tipo de dato numerico
var numuero = 1000;
console.log(numuero);

// Tipo de dato object
var objeto = {
  nombre: "Juan",
  apellido: "Perez",
  telefono: "123456",
};

console.log(typeof objeto);

// tipo de dato boolean (true, false)

var bandera = false;
console.log(typeof bandera);

// Tipo de de dato function
function miFuncion() {}
console.log(typeof miFuncion);

// Tipo de dato SYMBOLL
var simbolo = Symbol("Mi simbolo");
console.log(typeof simbolo);

// Tipo clase es una funcion
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
console.log(typeof Persona);

// tipo de dato undefined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

// null = ausencia de valor
var y = null;
console.log(typeof y);

// arreglo de tipo STRING y todos los arreglos son tipo OBJECT
var autos = ["BMW", "Audi", "Volvo"];
console.log(autos);
console.log(typeof autos);

// cadena vacia tambien es un tipo de datos
var z = "";
console.log(z);
console.log(typeof z);


