const express = require("express");
const mongoose = require("mongoose");
const poemRoutes = require("./routes/poemRoutes");
const keys = require("./config/keys");
const seeders = require("./seeders");
const cors = require("cors");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(cors());
app.use(express.static("public"));

poemRoutes(app);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  seeders();
});

app.get("/", (req, res) => {
  res.send("miaus");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
