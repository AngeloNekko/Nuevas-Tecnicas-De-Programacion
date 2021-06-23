// como se hacia antes
function Rectangulo (base, altura) {
    this.base = base;
    this.altura = altura;
}

Rectangulo.prototype.calcularArea = function() {
    return this.base * this.altura;
}

var rectangulo =new Rectangulo(6, 4);

//console.log(rectangulo.calcularArea());


// Declaracion de clases

class Rectangulo2 {
    constructor (base, altura){
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        return this.base * this.altura;
    }
}

var rectangulo2 = new Rectangulo2(6, 5);

console.log(rectangulo2.calcularArea())


//clase persona
// Implemnetar getters, setter y realizar una implementacion
// Implemnetar metodos estaticos - Clase Punto, Function distancia
// Construir clase persona y estudiante, extender estudiante con persona

/**
 * 
 * 
 *                                        DEBER
 * 
 * 
 */
// Implemnetar getters, setter y realizar una implementacion
let persona = {
    nombre: 'Angelo',
    apellido: 'Aulestia',
    get nombrecompleto() {
        return `${nombre} ${apellido}`
    },
    set nombrecompleto(nom) {
        const palabras = nom.split(' ');
        this.nombre = palabras[0] || '';
        this.apellido = palabras[1] || '';
    }
}
persona.nombrecompleto = 'Aulestia Angelo'

console.log(persona.nombre); 
console.log(persona.apellido);

// Implemnetar metodos estaticos - Clase Punto, Function distancia
class Punto {
    constructor ( x , y ){
        this.x = x;
        this.y = y;
    }
    static distancia ( a , b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt ( dx * dx + dy * dy );
    }
}
const p1 = new Punto(20, 5);
const p2 = new Punto(40, 50);

// Construir clase persona y estudiante, extender estudiante con persona
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    Estudiante() {
        console.log(this.nombre + 'Estudiante de institucion');
    }
}

class Mario extends Persona {
    Estudiante() {
        console.log(this.nombre + 'ITQ');
    }
}