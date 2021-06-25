const { Router, query } = require(`express`);
const data = require(`../MOCK_DATA.json`)
const router = Router();
//Primer path
// 1_-User
router.get("/users", (req, res)=>{
    res.json({
        msg: "Lista de usuarios",
        body: data.map((person) =>{
            person.first_name = person.first_name.toUpperCase();
            person.last_name= person.last_name.toUpperCase();
            return person;
        })
    })
})


//Segundo path
// 2.-Para
.get("/users-query", (req, res) =>{
    const { query: {iden} } = req;
    var id = parseInt(`${iden}`);
    if (isNaN(id)){
        res.json({
            msg: "Usuario no seleccionado",
            body: data
    
        })
    }else{
        res.json({
            msg: "Usuario Seleccionado",
            body: data.filter((persona) => persona.id === id)
    
        })
    }    
})
//Tercer path
// 3.-users-params
.get(`/users-params/:apellido`, (req, res) => {
    const {params: {apelli}} = req;
    //const nombre =req.params.nombre
    var resultado= data.filter((persona)=>persona.last_name === `${apelli}`)
    if(isNaN(resultado)){
        res.json({
            msg: "Usuario no encontrado",
            body: "NULL"
        })
    }else{
        res.json({
            msg: "Usuario encontrado",
            dato: `${resultado}`,
            body: data.map((person) => person.email)
        })
    }
    
})






module.exports.RouterIndex2 = router;