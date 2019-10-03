const mongoose = require("mongoose");
const models = require("../models");

let poemController = {};

poemController.random = (req, res) => {
  res.send(models.Poem.count().exec((err, count) => { res.send(count); })
  // models.Poem.count().exec((err, count) => {
  //   let random = Math.floor(Math.random() * count);
  //   //
  //   models.Poem.findOne()
  //     .skip(random)
  //     .populate("poet")
  //     .exec((err, poem) => {
  //       if (err) {
  //         res.send({ error: err });
  //       } else {
  //         res.send(poem);
  //       }
  //     });
  // });
};

module.exports = poemController;
