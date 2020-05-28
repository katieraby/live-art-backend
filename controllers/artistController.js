const {
  createArtist,
  getArtistByUsername,
  checkArtistByLogin,
} = require("../models/artistModel");

exports.postArtist = (req, res, next) => {
  return createArtist(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(next);
};

exports.fetchArtistByUsername = (req, res, next) => {
  const { username } = req.params;
  return getArtistByUsername(username)
    .then((artist) => {
      res.status(200).send({ ...artist._doc, password: null });
    })
    .catch(next);
};

exports.loginArtistByUsername = (req, res, next) => {
  const { username, password } = req.body;
  return checkArtistByLogin(username, password)
    .then((artist) => {
      res.status(200).send({ ...artist._doc, password: null });
    })
    .catch(next);
};
