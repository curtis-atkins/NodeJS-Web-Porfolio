const mongoose = require("mongoose")
const state = "mongoose.connection.readyState";

const projectDB = "mongodb://localhost/portfolio";

const projectSchema = new mongoose.Schema({
  title: String,
  slug: String,
  tags: String,
  date: String,
  img: String
})
