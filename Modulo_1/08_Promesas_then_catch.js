// promesas
//construtor de una promesa
function promesas(bandera) {
    return new Promise ((resolve, reject) => {
        if (bandera){
            setTimeout(() => {
                resolve("Peticion resulta");
            }, 3000);
        }else{
            setTimeout(() => {
                reject("La operacion fallo")
            }, 2000);
        }
        
    })
}
// resulucion de una promesa
/** 
promesas(true)
.then((resultado) => {
    console.log(resultado);
})
.catch((error) => {
    console.log(error);
});
*/

//construir promesa en una sola linea expresiva
var segundaPromesa = (bandera) => new Promise((resolve, reject) => {
    if (bandera){
        setTimeout(() => {
            resolve("Peticion resulta");
        }, 3000);
    }else{
        setTimeout(() => {
            reject("La operacion fallo")
        }, 2000);
        
    }
})

segundaPromesa(true)
.then((respuesta)=>{
    console.log(resultado);
})
.catch((error)=>{
    console.log(error);
})

//encadenar promesas
promesas(true) //peticion del clientes
.then((respuesta)=>{ // respuesta de lista de cliente
    console.log(resupuesta); 
    return segundaPromesa(true); //compras del cliente
})
.then((respuesta)=>{ // respuesta de la segunda promesa
    console.log(resupuesta);
})
.catch((error)=>{
    console.log(error);
})