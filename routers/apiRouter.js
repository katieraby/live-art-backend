const apiRouter = require("express").Router();
const artistRouter = require("./artistRouter");

apiRouter.use("/artist", artistRouter);

module.exports = apiRouter;
