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
    res.send("hola")
})



app.listen(PORT, ()=>{
    console.log(`app listen in port: ${PORT}`)
})