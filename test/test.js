const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");
const should = chai.should();
chai.use(chaiHttp);

describe("/GET user", () => {
  it("it should Get all users", done => {
    chai
      .request(app)
      .get("/users")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

describe("/POST user", () => {
  it("it sould post the user info", done => {
    const user = {
      phone_number: "081321886599",
      first_name: "Yacob",
      last_name: "Madiana",
      birth_date: "1989-15-06",
      gender: "male",
      email: "yacobs.madiana@gmail.com"
    };
    chai
      .request(app)
      .post("/users")
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});
