const express = require("express")
const app = express()
const PORT = process.env.PORT ||  8080
const db = require("./db/db.js")
const user = db.collection("users")
const FirebaseUser = require("./classFirebase")
const api = new FirebaseUser(user)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res)=>{
    const allUser = await api.readAll()
    res.send(allUser)
})

app.post("/newUser", async (req, res)=>{
    try{
        const user = req.body.lala
        await api.createUser(user)
        res.send(`el usuario ${user?.name} ha sido creado con exito`)
    }catch(err){
        console.log("por favor verificar los datos")
    }
   
})


app.listen(PORT, ()=>{
    console.log(`app listen in port: ${PORT}`)
})