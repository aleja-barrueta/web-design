//concepto HOISTING:
// miFuncion(2, 1);

//declaracion de la funcion
// function miFuncion(a, b) {
//   console.log("Suma: " + (a + b));
// }

//llamando a la funcion
// miFuncion(5, 7);

//return


function miFuncion(a,b){
    return a + b;

}

let resultado = miFuncion(1,2)
console.log(resultado);

//funciones de tipo expresion
let x = function (a,b){
    return a + b
};

resultado = x(1,2);
console.log(resultado);

(function(){
    console.log("Ejecutando la funcion");
     
})();