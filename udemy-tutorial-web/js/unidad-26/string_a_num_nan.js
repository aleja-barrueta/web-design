let miNumero = "18x"; //"18" es un string
// si tuvieramos un: "18x" NaN (not a number)

// // convierto usando la funcion Number(el nombre de mi variable que quiero convertir a numero)
let edad = Number(miNumero);
console.log(edad);

//preguntamos si la variable edad no es un numero
if (isNaN(edad)) {
  console.log("No es un numero");
} else {
  if (edad >= 18) {
    console.log("Puede votar");
  } else {
    console.log("Muy joven para votar");
  }
}

if (isNaN(edad)) {
  console.log("No es un numero");
} else {
  let resultado = edad >= 18 ? "Puede votar" : "Muy joven para votar";
  console.log("resultado");
}
