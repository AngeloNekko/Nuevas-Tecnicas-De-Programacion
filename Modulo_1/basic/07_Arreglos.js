// CONCAT
var numeros = [1, 2, 3, 4, 5];
//console.log(numeros);
var nuevoNumeros = numeros.concat([6, 7, 8, 9, 0]);
//console.log(nuevoNumeros);


// JOIN
var nombre = ["A", "n", "g", "e", "l", "o"];
//console.log(nombre.join(";"));


// SLICE
//console.log(nombre.slice(2));


// INDEX OF
//console.log(nombre.indexOf("g"));


// LAST INDEX OF
//console.log(nombre.lastIndexOf("g"));


//REVERSE
//console.log(nombre.reverse());


//SORT
var numerosDesordenados = [4, 5, 9, 6, 2, 1, 3, 7, 4, 0, 8, 10]
//console.log(numerosDesordenados.sort());


//SHIFT
//console.log(numerosDesordenados.shift());


//POP
//console.log(numerosDesordenados.pop());


//PUSH
//numerosDesordenados.push(1012)
//console.log(numerosDesordenados);

var pares = [2, 4, 6, 8, 10]

console.log(pares.map((elemento)=>elemento + 1))

// consultar funciones de arreglos.

var arr = [1, 2, 3, 4, 5,6]
// 1.-forEach
//El método forEach() ejecuta la función indicada una vez por cada elemento del array. Este método puede ayudarte a recorrer los elementos de un array.


arr.forEach(item => {
    console.log(item)
});

// 2.-includes
// El método includes() determina si un array incluye un determinado elemento, devuelve true o false según corresponda.
console.log(arr.includes(10))


//3.-Filter
// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
var filtrado = arr.filter(num => num > 3)
console.log(filtrado);

//4.-reduce
// El método reduce()aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.
var suma = arr.reduce((total, value) => total + value, 0);
console.log(suma)

//5.- Some
// El método some() verifica si algún elemento de un array cumple con el test implementado por la función brindada. Si se aprueba, devuelve “true” de lo contrario “false”.

var numerosLargos = arr.some(num => num > 4);
console.log(numerosLargos); //este resultado sera true

var numeroCortos = arr.some(num => num <= 0);
console.log(numeroCortos); //este resultado sera false


