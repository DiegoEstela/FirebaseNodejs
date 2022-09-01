var admin = require("firebase-admin");

var serviceAccount = require("./node_firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nodediegoestela.firebaseio.com"
});

const db = admin.firestore()
const user = db.collection("users")

const crearUsuario = async() =>{
  const doc = user.doc()
  const result =  await doc.create({name: "ezequiel", age: 30})
  console.log(result)

}

crearUsuario()