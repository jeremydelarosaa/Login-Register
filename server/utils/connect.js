import { MongoClient } from "mongodb";
import { EventEmitter } from "node:events";

class DB {}
class Connect extends EventEmitter {
  constructor() {
    super();
    this.mongoClient = new MongoClient("mongodb://127.0.0.1:27017");
  }

  async get() {
    await this.mongoClient.connect();
    console.log("Connessione avvenuta");
    this.emit("connectionOK");
    DB.Users = this.mongoClient.db("Users");
    DB.User = DB.Users.collection("User");
  }
}
export { Connect, DB };
