const express = require(`express`); 

//genera una aplicacion express
const app = express();
// ENDPOINT
app.get(`/`, (req, res) =>{
    res.send("Hola mundo con ExpressJS")
});

app.listen(3000, () =>{
    console.log("servidor escuchando en http://localhost:3000");
})
