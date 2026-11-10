let a = 3,
  b = 2,
  c = 1;
d = 4;

// se multiplica a *b primero, luego se divide c/d, y el resultado de ambos SE SUMA
let z = a * b + c / d;
console.log(z);

z = c + (a * b) / d;
console.log(z);
// en este caso ejecuta primero la multiplicacion, y despues queda la suma con la division, toma prioridad la division, y seria:
// el resultado de=  a * b / d. Y finalmente restaria sumar c al resultado de la division. Da como resultado 2.5

z = ((c + a) * b) / c;
console.log(z);
// modificamos el orden de prioridad usando parentesis. 
