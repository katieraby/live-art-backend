const Artist = require("../db/schema");

exports.createArtist = (userInput) => {
  const newArtist = new Artist({
    username: userInput.username,
    password: userInput.password,
    paymentPointer: userInput.paymentPointer,
    aboutMe: userInput.aboutMe,
  });
  return newArtist
    .save()
    .then((data) => {
      return data;
    })
    .catch(console.dir);
};

exports.getArtistByUsername = (username) => {
  return Artist.findOne({ username }).then((artist) => {
    return artist;
  });
};
