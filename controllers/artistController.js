const { createArtist, getArtistByUsername } = require("../models/artistModel");

exports.postArtist = (req, res, next) => {
  return createArtist(req.body)
    .then((postedArtist) => {
      res.status(201).send(postedArtist);
    })
    .catch(console.dir);
};

exports.fetchArtistByUsername = (req, res, next) => {
  const { username } = req.params;
  return getArtistByUsername(username)
    .then((artist) => {
      res.status(200).send(artist);
    })
    .catch(console.dir);
};
