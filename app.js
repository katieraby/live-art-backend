const express = require("express");
const app = express();
const cors = require("cors"); //cross-origin resource sharing
const mongoose = require("mongoose");
const dbConfig = require("./db/config.js"); //database configuration username/pwd
const db = mongoose.connection;

app.use(cors());
app.use(express.json()); //parsing into JSON

db.on("error", () => console.log("connection error")); //if error connecting log error
db.once("open", () => console.log("connected to the database!")); //once connected log connected

module.exports = app;
