process.env.NODE_ENV = "test";
const app = require("../app");
const url = "http://localhost:9090";
const request = require("supertest")(url);
const { expect } = require("chai");

//current tests are working, but need to implement re-seeding test DB before each test, because the values must now be changed before testing to ensure values are unique

describe("/artist", () => {
  it("POST - successfully adds new artist to database", () => {
    return request
      .post("/artist")
      .send({
        username: "katietest7",
        password: "tester",
        paymentPointer: "4382438hejwh7",
        aboutMe: "Hello this is a test description",
      })
      .expect(201)
      .then(({ body }) => {
        console.log(body);
        expect(body).to.have.keys([
          "_id", //automatically added id key
          "username",
          "password",
          "paymentPointer",
          "aboutMe",
          "__v", //version key indicating the revision of the document
        ]);
      });
  });
});
