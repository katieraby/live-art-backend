const { createArtist, getArtistByUsername } = require("../models/artistModel");

exports.postArtist = (req, res, next) => {
  return createArtist(req.body)
    .then((postedArtist) => {
      res.status(201).send(postedArtist);
    })
    .catch(next);
};

exports.fetchArtistByUsername = (req, res, next) => {
  const { username } = req.params;
  return getArtistByUsername(username)
    .then((artist) => {
      res.status(200).send(artist);
    })
    .catch(next);
};
