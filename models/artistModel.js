const Artist = require("../db/schema");
const bcrypt = require("bcrypt");

exports.createArtist = (userInput) => {
  return bcrypt
    .hash(userInput.password, 12)
    .then((hashedPassword) => {
      const newArtist = new Artist({
        username: userInput.username,
        password: hashedPassword,
        paymentPointer: userInput.paymentPointer,
        aboutMe: userInput.aboutMe,
      });
      return newArtist.save();
    })
    .then((data) => {
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

exports.checkArtistByLogin = (username, password) => {
  return Artist.findOne({ username })
    .then((artist) => {
      return artist
        ? Promise.all([bcrypt.compare(password, artist.password), artist])
        : Promise.reject({ status: 400, msg: "Username not found" });
    })
    .then(([checkedArtist, artist]) => {
      return checkedArtist
        ? artist
        : Promise.reject({ status: 404, msg: "Incorrect password" });
    });
};
