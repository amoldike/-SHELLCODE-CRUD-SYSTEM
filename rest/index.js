const express = require("express");

const cors = require("cors");

const app = express();

const PORT = 5000;

const conn = require("./db");

app.use(express.json());
app.use(cors());

// ---------------Connect to MongoDB--------------------------
conn.on("connected", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to Mongo DB!");
  }
});

// --------------------------------------------------------------------
app.use("/users", require("./routes/users"));

// -------------------Show api information on homepage-----------------
app.get("/", (req, res) => {
  res.send("<h1> This is the users API</h1>");
});

// --------------------------Start The Server-------------------------
app.listen(PORT, () => {
  console.log(" SERVER IS RUNNING ON PORT : " + PORT);
});
