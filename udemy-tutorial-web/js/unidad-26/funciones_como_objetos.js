function miFuncion(a, b) {
  //para saber cuantos argumentos se han definido en nuestra funcion
  console.log(arguments.length);
  return a + b;
}
console.log(typeof miFuncion);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);
