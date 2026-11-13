// Declaracion Funcion de tipo expresion
let sumar = function (a, b) {
  return a + b;
};

let resultado = sumar(2, 2);
console.log(resultado);

// Funcion tipo flecha

const sumarFuncionTipoFlecha = (a, b) => a + b;
//paso 1 = ya no tenemos que especificar la palabra reservada function
// paso 2 = ya no tenemos que usar {}, usamos => (flecha), y esto lo que indica es que a continuacion vamos a definir el cuerpo de nuestra funcion
// para definir el cuerpo de nuestra funcion ya podemos omitir el uso de return e indicamos nuestra operacion, y ya el retornara.
//toda la funcion : (a,b) => a + b; se almacena en un espacio de memoria, que es: sumarFuncionTipoFlecha para que a traves de esa variable podamos
//mandar a llamar esta funcion de tipo flecha que hemos declarado.

resultado = sumarFuncionTipoFlecha(3, 5);
console.log(resultado);

const potencia = (a) => a * a;
const result = potencia(5);
console.log(result);

//cuando quiero hacer mas de una operacion con funcion flecha
const raiz_cuadrada = (exponente, base) => {
  console.log(exponente, base);
  const test = base * (exponente * base);
  return test;
};

const raiz_resultado = raiz_cuadrada(3, 4);
console.log(raiz_resultado);
