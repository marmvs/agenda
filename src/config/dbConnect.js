import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:160381@cluster0.hxdi0iu.mongodb.net/contato"
);

let db = mongoose.connection;

export default db;