const admin = require("firebase-admin");
require("dotenv").config()
const serviceAccount = require("./config.js");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASEURL
});

const db = admin.firestore()

module.exports = db