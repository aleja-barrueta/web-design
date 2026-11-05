// let condicion = false;

// if (condicion) console.log("condicion verdadera");
// else console.log("Condicion falsa");

//  al ser solo una linea en cada una de las sentencias, se quitan los {} de los condicionales
//  al ser mas de una linea los {} son obligatorios

// ejemplo if else en JAVASCRIPT

// let numero = 3;

// if (numero == 1) {
//   console.log("numero uno");
// } else if (numero == 2) {
//   console.log("Numero dos");
// } else if (numero == 3) {
//   console.log("Numero tres");
// } else if (numero == 4) {
//   console.log("Numero cuatro");
// } else {
//   console.log("Numero desconocido");
// }

// EJEMPLO ESTACIONES DEL ANIO
// let mes = 8;
// let estacion;

// if (mes == 1 || mes == 2 || mes == 12) {
//   estacion = "Invierno";
// } else if (mes == 3 || mes == 4 || mes == 5) {
//   estacion = "Primavera";
// } else if (mes == 6 || mes == 7 || mes == 8) {
//   estacion = "Verano";
// } else if (mes == 9 || mes == 10 || mes == 11) {
//   estacion = "Otono";
// } else {
//   estacion = "Valor incorrecto";
// }

// console.log(estacion);

// EJERICIO DEL PROFE RESUELTO HORA DEL DIA
let horaDia = 23;
let mensaje;

if (horaDia >= 6 && horaDia <= 11) {
  mensaje = "Buenos dias";
} else if (horaDia >= 12 && horaDia <= 18) {
  mensaje = "Buenas tardes";
} else if (horaDia >= 19 && horaDia <= 24) {
  mensaje = "Buenas noches";
} else if (horaDia >= 0 && horaDia < 6) {
  mensaje = "Durmiendo";
}

console.log(mensaje);
