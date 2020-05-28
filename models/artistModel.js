const Artist = require("../db/schema");

exports.createArtist = (userInput) => {
  const newArtist = new Artist({
    username: userInput.username,
    password: userInput.password,
    paymentPointer: userInput.paymentPointer,
    aboutMe: userInput.aboutMe,
  });
  return newArtist.save().then((data) => {
    return data;
  });
};

exports.getArtistByUsername = (username) => {
  return Artist.findOne({ username }).then((artist) => {
    if (artist === null) {
      return Promise.reject({ status: 404, msg: "Username doesn't exist" });
    }
    return artist;
  });
};
