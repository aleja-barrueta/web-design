//para imprimir los argumentos si se indican abajo
//si se definen en el primer bloque es por default, no los imprime porque se asignaron inicialmente.
// let sumar = function (a = 3, b = 6) {
//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   console.log(arguments[2]); //podemos acceder a un tercer elemento aunque no este creado, pero el resultado sera UNDEFINED.
//   return a + b + arguments[2]; //aqui para sumar el tercer elemento que no se definio en parametros, pero si en argumentos.
// };

//si los parametros se indican arriba, y abajo indicamos unos nuevos, los nuevos SOBRE ESCRIBEN A LOS DE ARRIBA y se imprimen los asignados abajo
// pero si queremos pasar un tercer argumento al UNDEFINED, lo hacemos aqui abajo y asi el toma el valor que se indique aqui abajo.
// resultado = sumar(3, 7, 8);
// console.log(resultado);

//Ejemplo sumar argumentos
//usaremos hosting para este ejercicio.
let resultado = sumarTodo(5, 4, 13, 10, 9); //iniciamos llamando la funcion
console.log(resultado); // por ultimo imprimimos el resultado
function sumarTodo() {
  let suma = 0; //donde inicia la suma, inicia en O para luego ir tomando los valores y sumandolos, esta variable la actualizamos manualmente

  //usamos el for para recorrer los parametros
  // i es nuestra variable que itera e inicia en 0 y debe ser MENOR al tamano de la funcion, menor a la cantidad de parametros
  // el i++ es la forma en que el iterador va en incremento en cada uno de los recorridos por cada parametro individual
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i]; //equivalente a la suma de los parametros de la funcion, "arguments[i]" es cada uno de los parametros
  }
  return suma; // retorna el resultado de la suma.
}
