let miNumero = "18"; //"18" es un string
// // console.log(typeof miNumero);

// // convierto usando la funcion Number(el nombre de mi variable que quiero convertir a numero)
let edad = Number(miNumero);
// // console.log(typeof edad);

// if (edad >= 18) {
//   console.log("Puede votar");
// } else {
//   console.log("Muy joven para votar");
// }

let resultado = edad >= 18 ? "Puede votar" : "Muy joven para votar";
console.log(resultado);
