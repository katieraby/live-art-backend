const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  paymentPointer: { type: String, required: true, unique: true, trim: true },
  aboutMe: { type: String, required: false },
});

module.exports = mongoose.model("Arist", artistSchema);
//a mongoose model is a wrapper on the mongoose schema.
//mongoose schema defines the structure of the document, default values etc.
//mongoose model provides an interface to the db for creating, querying, updating and deleting records.
//calling mongoose.model on a schema, mongoose compiles a model for you.

/* artist details:
ID
username
password
payment pointer (wallet)
about me section */
