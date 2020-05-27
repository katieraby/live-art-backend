const { createArtist } = require("../models/artistModel");

console.log("in the controller");
exports.postArtist = (req, res, next) => {
  return createArtist(req.body)
    .then((postedArtist) => {
      res.status(201).send(postedArtist);
    })
    .catch(console.dir);
};
