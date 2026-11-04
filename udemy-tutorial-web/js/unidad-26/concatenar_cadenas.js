var nombre = "Juan";
var apellido = "Perez";
// para concatenar usamos el +, tomando en cuenta que " " es un espacio vacio para que no se peguen el nombre y el apellido
var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

// tambien se puede hacer de esta forma:
var nombrecompleto2 = "Carlos" + " " + "Lara";
console.log(nombrecompleto2);

// concatenar un numero(lo conviere a cadena) a una cadena
// TODAS LAS EXPRESIONES DE JAVASCRIPT SE EVALUAN DE IZQUIERDA A DERECHA
var x = nombre + " " + 219;
console.log(x);

// Otro ejemplo
var x = nombre + " " + 2 + " " + 4;
console.log(x);

// si quisieramos que esos valores numericos se sumaran colocamos () y se realiza en primer lugar.
x = nombre + (2 + 4);
console.log(x);

// otro ejemplop
x = 2 + 4 + nombre;
console.log(x);

// si queremos sumar colocamos los numeros en primer lugar y se agrega parentesis e incluso sin parentesis, si estan primero los numeros, se suman
// si se quieren concatenar los nros, se agregan despues (NO en primer luigar) sin parentesis.
// SI PRIMERO ENCUENTRA UNA CADENA TODO LO DEMAS SE CONSIDERA CADENA (CONTEXTO STRING O CONTEXTO DE CADENA), A MENOS QUE LAS EXPRESIONES NUMERICAS SE COLOQUEN EN PARENTESIS Y EN PRIMER LUGAR.
