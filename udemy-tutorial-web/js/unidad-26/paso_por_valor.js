//valor primitivo, no tienen metodos ni atributos asociados a ese valor.
let x = 10;
//crear un metodo para intentar cambiar este valor desde el metodo, no sera posible porque es primitivo
function cambiarValor(a) {
  //las variables locales y primitivas no se pueden cambiar
  a = 20;
}
// paso por valor     
cambiarValor(x); //le estamos pasando el valor de x que es 10
console.log(x);

//posteriormente el valor de la variable x se le asigna a la variable "a", el parametro a seria a=x; asi que a=10
//posteriormente cambiamos el valor de a por 20, es decir que a=20
//cualquier cambio en la variable a no modifica el valor de la otra variable.
