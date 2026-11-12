// coleccion que se puede modificar:
// let autos = new Array("BMW", "Mercedes Benz", "Volvo");

//arreglo inmutable USAR CONST, ARREGLO PARA MODIFICAR= LET
const autos = ["BMW", "Mercedes Benz", "Volvo"];
//console.log(autos);

//como recorrer un arreglo
console.log(autos[1]);
console.log(autos[2]);

//si queremos correr todos los elementos a la vez
for (let i = 0; i < autos.length; i++) {
  console.log(i + " : " + autos[i]);
}

//modificar valores de un elemento del arreglo
autos[1] = "MercedesBenz";
console.log(autos[1]);

//agregar elementos a un arreglo con funsion PUSH
autos.push("Audi");
console.log(autos);

//agregar elementos a un arreglo, usando el largo del arreglo, se agregara al final
console.log(autos.length);
autos[autos.length] = "Cadillac"; //se le cambia el valor
console.log(autos);


//agregar elementos y dejar huecos NO SE DEBE HACER
autos[6] = "Porshe" //se le cambia el valor
console.log(autos);

//para llenar ese espacio vacio
autos[5] = "Mazda" //se le cambia el valor
console.log('autos :>> ', autos);