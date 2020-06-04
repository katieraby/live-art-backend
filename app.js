const express = require("express");
const app = express();
const cors = require("cors"); //cross-origin resource sharing
const apiRouter = require("./routers/apiRouter.js");
const mongoose = require("mongoose");
const ENV = process.env.NODE_ENV || "development"; //setting node environment variable
const db = mongoose.connection;
const { customErrorHandler, mongoErrorHandling } = require("./errors.js");

let mongoUsername;
let mongoPassword;

if (!process.env.MONGODB_USERNAME && !process.env.MONGODB_PASSWORD) {
  const { mongoUsername, mongoPassword } = require("./db/config");
  mongoUsername = mongoUsername;
  mongoPassword = mongoPassword;
} else {
  mongoUsername = process.env.MONGODB_USERNAME;
  mongoPassword = process.env.MONGODB_PASSWORD;
}

ENV === "test"
  ? mongoose.connect("mongodb://127.0.0.1:27017/test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  : mongoose.connect(
      `mongodb+srv://${mongoUsername}:${mongoPassword}@live-art-bgiml.mongodb.net/test?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    ); //checks if node env is test - if so connects to local mongo db else connects to live db

mongoose.set("useCreateIndex", true); //stops collection ensureIndex deprecation warning
db.on("error", console.error.bind(console, "MongoDB connection error:")); //binds connection to error event
db.once("open", () => console.log("Connected to the database!")); //once connected log connected

app.use(cors());
app.use(express.json()); //parsing into JSON
app.use("/", apiRouter);

app.use(customErrorHandler);
app.use(mongoErrorHandling);

module.exports = app;
