// promesas async - await
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

(async ()=>{
    try {
    var respuesta = await promesas(true)
    var respuesta2 = await promesas(true)
    console.log(respuesta);
    console.log(respuesta2);
    } catch (error) {
        console.log(error);
    }
    
})()
