const artistRouter = require("express").Router();
const {
  postArtist,
  fetchArtistByUsername,
} = require("../controllers/artistController");
const { send405Error } = require("../errors");

artistRouter.route("/").post(postArtist).all(send405Error);
artistRouter.route("/:username").get(fetchArtistByUsername).all(send405Error);

module.exports = artistRouter;
