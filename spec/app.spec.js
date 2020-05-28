process.env.NODE_ENV = "test";
const app = require("../app");
const request = require("supertest");
const { expect } = require("chai");
const mongoose = require("mongoose");
const Artist = require("../db/schema");

describe("/", () => {
  after(async () => {
    await Artist.deleteMany();
  });

  describe("/artist", () => {
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
        });
    });
  });
  describe("/artist errors", () => {
    it("POST - an error message is returned when the username already exists", () => {
      return request(app)
        .post("/artist")
        .send({
          username: "katietest8",
          password: "tester123",
          paymentPointer: "4382438hejwh9999",
          aboutMe: "Hello this is a test description of a username error",
        })
        .expect(400)
        .then((error) => {
          expect(error.body.msg).to.equal("Username already exists!");
        });
    });
    it("status: 405", () => {
      const invalidMethods = ["patch", "put", "get", "delete"];
      const methodPromises = invalidMethods.map((method) => {
        return request(app)
          [method]("/artist")
          .expect(405)
          .then(({ body: { msg } }) => {
            expect(msg).to.equal("Method not allowed");
          });
      });
      return Promise.all(methodPromises);
    });
  });
  describe("artist/:username", () => {
    it("GET - returns status 200 and an object containing the artist information", () => {
      return request(app)
        .get("/artist/katietest8")
        .expect(200)
        .then(({ body }) => {
          expect(body).to.have.keys([
            "_id", //automatically added id key
            "username",
            "password",
            "paymentPointer",
            "aboutMe",
            "__v", //version key indicating the revision of the document])
          ]);
          expect(body).to.be.an("object");
          expect(body.username).to.equal("katietest8");
        });
    });
    it("GET - returns status 404 and a relevant error message when the username cannot be found", () => {
      return request(app)
        .get("/artist/nickiscool")
        .expect(404)
        .then((error) => {
          expect(error.body.msg).to.equal("Username doesn't exist");
        });
    });
    it("status: 405", () => {
      const invalidMethods = ["patch", "put", "post", "delete"];
      const methodPromises = invalidMethods.map((method) => {
        return request(app)
          [method]("/artist/:username")
          .expect(405)
          .then(({ body: { msg } }) => {
            expect(msg).to.equal("Method not allowed");
          });
      });
      return Promise.all(methodPromises);
    });
  });
});
