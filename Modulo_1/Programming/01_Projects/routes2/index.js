const { Router, query } = require(`express`);
const data = require(`../MOCK_DATA.json`)
const router = Router();
router.get("/", (req, res)=>{
    res.json({
        msg: "Deber del video"
    })
})
//Primer path
// 1_-User
.get("/users", (req, res)=>{
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
    const {params: {apellido}} = req;
    var ResultadoTotal = data.filter((person)=> person.last_name === apellido)
    var email = ResultadoTotal.map((persona)=> persona.email);
    var comparar = false;
    data.forEach(element => {
        if(element.last_name === apellido){
            comparar = true
        }
    });
    if(comparar===true){
        res.json({
            msg: "Usuario encontrado",
            Apelli: apellido,
            body: email
        })
    }else{
        res.json({
            msg: "Usuario no encontrado",
            body: "NULL"
        })
    }
    
})
module.exports.RouterIndex2 = router;