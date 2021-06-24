const express = require(`express`); 

//genera una aplicacion express
const app = express();
// ENDPOINT
app.get(`/`, (req, res) =>{
    res.send("Hola mundo con ExpressJS")
});

app.get("/saludo", (req, res) => {
    // Objeto req.query (Accedemos a todo lo que este en el query)
    //console.log(req.query);
    const { query: {nombre, apellido} } = req;
    res.json({
        saludo: `hola soy ${nombre} ${apellido}`,
    })
})
// los parametros estan modificando la URL 
app.get(`/saludo/:nombre`, (req, res) => {
    const {params: {nombre}} = req;

    //const nombre =req.params.nombre
    res.json({
        nombre: nombre,
    })
})

app.listen(3000, () =>{
    console.log("servidor escuchando en http://localhost:3000");
})
