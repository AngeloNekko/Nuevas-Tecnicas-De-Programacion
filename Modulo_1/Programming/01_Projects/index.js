const express = require(`express`); 

//genera una aplicacion express
const app = express();

//Routes (Rutas)
const { RouterIndex }  = require(`./routes/index`);
const { RouterIndex2 }  = require(`./routes2/index`);
app.use("/", RouterIndex);
app.use("/deber-video", RouterIndex2);
/**
app.use("/user", RouterIndex);
app.use("/user/data", RouterIndex);
 */

/**
 * 
 */
app.listen(3000, () =>{
    console.log("servidor escuchando en http://localhost:3000");
})
