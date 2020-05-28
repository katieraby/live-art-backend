const artistRouter = require("express").Router();
const {
  postArtist,
  fetchArtistByUsername,
  loginArtistByUsername,
} = require("../controllers/artistController");
const { send405Error } = require("../errors");

artistRouter.route("/").post(postArtist).all(send405Error);
artistRouter
  .route("/:username")
  .get(fetchArtistByUsername)
  .post(loginArtistByUsername)
  .all(send405Error);

module.exports = artistRouter;
