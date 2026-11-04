// para definir variables que posteriormente podemos cambiar su valor

// let nombre;
// nombre = "Juan";
// console.log(nombre);

// let persona = "Juan";
// console.log(persona);

// //para definir variables a la que no queremos cambiarle su valor.
// const apellido = "Perez";

//MEJORES PRACTICAS PARA DECLARAR NOMBRES DE VARIABLES.

// let nombreCompleto = "Juan Perez";
// console.log(nombreCompleto);

// // podemos definir varias variables en una linea let, abajo asignar sus valores una alado de la otra, y luego operarlas y asignar el valor de la operacion a una variable nueva
// let x, y;
// ((x = 10), (y = 20));
// let z = x + y;
// console.log(z);

// REGLAS PARA DEFINIR NOMBRES DE VARIABLES
// JAVASCRIPT ES SENSIBLE A MAYUSCULAS Y MINUSCULAS, LA VARIABLE CON "C" mayuscula tiene un valor, mientras que la variable con "c" minuscula tiene otro.
let nombreCompleto = "Juan Perez";
let nombrecompleto = "Carlos Lara";
console.log(nombreCompleto);
console.log(nombrecompleto);

// No podemos comenzar una variable utilizando numeros
// let 1nombrecompleto; NO VALIDO
// VALORES PERMITIDOS: Letras en mayuscula/minuscula, _, $(despues del simbolo de $ ya podriamos utilizar numeros ejemplo: $1variable,  _1variable)
let _nombreCompleto;
let a1nombreCompleto;
let $nombreCompleto;

// Las palabras reservadas no se pueden usar exactamente igual, las podemos usar pero deben tener modificaciones
// por ejemplo: break es una palabra reservada, se puede usar: _break
// SIN EMBARGO NO ES RECOMENDABLE USAR LAS PALABRAS RESERVADAS COMO VARIABLES PORQUE PODRIAMOS CONFUNDIRNOS
