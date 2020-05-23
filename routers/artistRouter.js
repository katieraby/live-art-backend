const artistRouter = require("express").Router();
const { postArtist } = require("../controllers/artistController");

artistRouter.route("/").get().post(postArtist);

module.exports = artistRouter;
