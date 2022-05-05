// ---------------------Create a connection to Mango db--------------

const mongoose = require("mongoose");

// ------db url---- - mongodb://localhost:27017/users_data

mongoose.connect("mongodb://localhost:27017/users_data");

module.exports = mongoose.connection;
