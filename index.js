const admin = require("firebase-admin");
const dotenv = require("dotenv")
dotenv.config()
const serviceAccount = require("./config.js");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount.modules),
  databaseURL: process.env.DATABASEURL
});

const db = admin.firestore()
const user = db.collection("users")


// CREATE A NEW USER
const createUser = async() =>{
  const doc = user.doc()
  const result =  await doc.create({name: "ezequiel", age: 30})
  console.log(result)

}


const readAll = async () =>{
  const querySnapshot = await user.get()
  const docs = querySnapshot.docs
  const result = docs.map(doc=>{
    return{
      id: doc.id,
      name: doc.data().name,
      age: doc.data().age
    }
  })
  console.log(result)
}

const readById = async () =>{
  let id = "WaLQZLBQ8lv01FlVn6kV"
  const doc = user.doc(`${id}`)
  const _user = await doc.get()
  const _data = _user.data()
  console.log(_data)
}

const updateById = async () =>{
  let id = "WaLQZLBQ8lv01FlVn6kV"
  const doc = user.doc(`${id}`)
  const _user = await doc.update({age: 60})
  console.log(_user)
}

readAll()

