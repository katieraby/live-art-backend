process.env.NODE_ENV = "test";
const app = require("../app");
const request = require("supertest");
const { expect } = require("chai");
const mongoose = require("mongoose");

describe("/artist", () => {
  afterEach(async () => {
    await mongoose.connection.db.dropCollection("artists");
  });

  it("POST - successfully adds new artist to database", () => {
    return request(app)
      .post("/artist")
      .send({
        username: "katietest8",
        password: "tester",
        paymentPointer: "4382438hejwh8",
        aboutMe: "Hello this is a test description",
      })
      .expect(201)
      .then(({ body }) => {
        expect(body).to.have.keys([
          "_id", //automatically added id key
          "username",
          "password",
          "paymentPointer",
          "aboutMe",
          "__v", //version key indicating the revision of the document
        ]);
      })
      .catch(console.dir);
  });
});
