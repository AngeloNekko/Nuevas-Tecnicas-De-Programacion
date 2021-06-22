// Funciones declarativas
function saludar(){
    return "Hola soy Angelo"
};
saludar(); //el valor retornado en la funcion

//funciones void
function saludar2(){
    console.log("Hola soy Andree")
};
//saludar2();
/** 
//guardamos el valor retornado en una variable
var resultado = saludar();
console.log(resultado);

//inplementar el saludar() en consol.log
console.log(saludar());
*/

//funciones con parametros

function SaludarConParametros(nombre, apellido){
    return `hola soy ${nombre} ${apellido}`;
};

//funciones con parametros por defecto

function SaludoConProfesion(nombre="Persona", profesion= "Analista de Sistemas"){
    return `Hola ${nombre} mi profesion es ${profesion}`;
};
//console.log(SaludoConProfesion("Angelo", "Programador"));

//console.log(SaludarConParametros("Angelo", "Aulestia"));



// Funciones Expresivas -- Funciones anonimas

var SaludoConEdad = function(nombre, edad){
    return `Hola soy ${nombre} y tengo ${edad}`;
};

// console.log(SaludoConEdad("Angelo", 20));


// Arrow Function -- Funciones Flecha


var SaludoConApellido =(nombre, apellido) => `Hola soy ${nombre} ${apellido}`;

var suma = (num1, num2) => num1 + num2 ;


//console.log(SaludoConApellido("Angelo", "Aulestia"));
//console.log(suma(2, 3));


// Funciones como parametros de otras funciones


function SaludoConFunciones(nombre, cb){
    return cb(nombre)
};

var misaludo = SaludoConFunciones("Angelo", function(nombre){
    return `Hola soy ${nombre}`
});

var misaludo = SaludoConFunciones("Angelo", (nombre) => `Hola soy ${nombre}`);
//console.log(misaludo);
/**
//funciones con tiempo e intervalos

//funcion de tiempo
setTimeout(() => {
    console.log("Hola mundo");
}, 3000); //el tiempo para que se ejecute


//funcion de intervalo
setInterval(() => {
    console.log("Hola mundo");
}, 2000); //cuento intervalo de tiempo queremos que se repita
*/

