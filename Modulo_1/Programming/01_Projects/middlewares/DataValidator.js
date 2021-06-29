/**
function DataValidator(req, res, next){
    req.pruebaDeMiddleware = "Hola mundo con Middleware";
    next()
}
 */
const { Schema } = require("joi");
const { user }=require(`../lib/Schema/User`)

function DataValidator(check = "query", Schema){
    return (req, res, next)=>{
        var data = req[check]
        const {error, value} = Schema.validate(data);

        if(error){
            res.status(406).json({
                msg: error.details[0].message,
            })
        }else{
            req[check]=value
            next()
        }
    }    
}

//Primero se pone el nombre de la llave luego la funcion
module.exports.DataValidator=DataValidator;