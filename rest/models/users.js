const mongoose = require("mongoose");

// ----------Create Schema(Format) For Model----------------

const usersSchema = new mongoose.Schema({
  fullName: { type: String },
  address: { type: String },
  contact: { type: Number, unique: true },
  email: { type: String, unique: true },
  password: { type: String },
});

module.exports = mongoose.model("users", usersSchema);
