const Artist = require("../db/schema");

console.log("in the model");

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
      console.log(data);
      return data;
    })
    .catch(console.dir);
};
