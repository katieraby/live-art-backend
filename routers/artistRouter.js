const artistRouter = require("express").Router();
const {
  postArtist,
  fetchArtistByUsername,
} = require("../controllers/artistController");

artistRouter.route("/").get().post(postArtist);

artistRouter.route("/:username").get(fetchArtistByUsername);

module.exports = artistRouter;
