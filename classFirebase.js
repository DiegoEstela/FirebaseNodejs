

class FirebaseUser {
  constructor(db) {
    this.db = db;
  }

  async createUser(body){
    const doc = this.db.doc()
    const result =  await doc.create(body)
    console.log(result)
  }

  async readAll(){
    const querySnapshot = await this.db.get()
    const docs = querySnapshot.docs
    const result = docs.map(doc=>{
      return{
        id: doc.id,
        name: doc.data().name,
        age: doc.data().age
      }
    })
    return result
  }
}

module.exports = FirebaseUser