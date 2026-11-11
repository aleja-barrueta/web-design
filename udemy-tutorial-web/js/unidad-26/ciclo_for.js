console.log("Fin ciclo for");
for (let contador = 0; contador < 3; contador++) {
  console.log(contador);
}

const edadMayor = 18;
list = [1, 2, 3, 4, 5, 6];
console.log("Usando el for de JS");

for (let i = list.length - 1; i >= 0; i--) {
  const element = list[i];
  console.log(element);
}

console.log("Usando el while de JS");

let incrementador = 0;
while (incrementador < list.length) {
  const element = list[incrementador];
  console.log(element);
  incrementador++;
}

console.log("Usando el while para recorrer la lista en sentido inverso.");

let decremento = list.length - 1;
while (decremento >= 0) {
  const element = list[decremento];
  console.log(element);
  decremento--;
}
