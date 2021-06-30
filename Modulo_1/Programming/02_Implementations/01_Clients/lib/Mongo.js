const { MongoClient } = require(`mongodb`);


const DB_NAME = "user";
const URL = "mongodb+srv://User:<password>@cluster0.rkozo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

var MongoConnection = () => new Promise (async (resolve, reject)=>{
    try {
        let client = new MongoClient(URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        await Client.connect()
        resolve(client.db(DB_NAME))
    } catch (error) {
        reject(error)
    }
})


module.exports.MongoConnection = MongoConnection;