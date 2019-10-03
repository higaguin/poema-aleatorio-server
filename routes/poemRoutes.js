const poem = require("../controllers/PoemController");

module.exports = app => {
  app.get("/api/randomPoem", (req, res) => {
    poem.random(req, res);
  });
};
