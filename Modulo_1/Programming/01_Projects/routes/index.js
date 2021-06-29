//Traemos el paquete
const { Router } = require(`express`);
const { user } = require("../lib/Schema/User");
const { DataValidator }=require(`../middlewares/DataValidator`)
//inicializamos router
const router = Router();
//Creacion de los endpoint
router.get("/", (req, res) =>{
    res.send("Hola mundo con expressJS");
})
.get("/saludo", DataValidator("query", user), (req, res) =>{
    const { query: {nombre, apellido} } = req;
    res.json({
        saludo: `hola soy ${nombre} ${apellido}`,
    })
})
.get(`/saludo/:nombre`, (req, res) => {
    const {params: {nombre}} = req;

    //const nombre =req.params.nombre
    res.json({
        nombre: nombre,
    })
})





//exportamos las rutas
module.exports.RouterIndex = router;

/**module = {
    exports : {
        RouterIndex: router
    }
}
**/


