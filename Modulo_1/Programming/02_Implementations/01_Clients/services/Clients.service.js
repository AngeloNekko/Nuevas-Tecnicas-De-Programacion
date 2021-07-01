const { MongoClient } = require("mongodb");
const {MongoConnection} = require(`../lib/Mongo`);
// Collection
const COLLECTION = "clients";

const FindUser = () => new Promise(async(resolve, reject) => {
    try {
        // Inicializacion mongoclient para que me retorne la
    //configuracion de la db
    const DB = await MongoConnection();
    // obtenemos la collection
    const clients = DB.Collection(COLLECTION);
    const ClientsList = await clients.find({}).toArray()
    resolve(ClientsList);
    } catch (error) {
        reject(error);
    }
    
})

module.exports = {
    FindUser,
}