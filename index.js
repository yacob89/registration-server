var express = require("express"),
  app = express(),
  port = process.env.PORT || 8000,
  bodyParser = require("body-parser"),
  controller = require("./controller");
var cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./routes");
routes(app);

//app.listen(port);
let server = app.listen(port, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log(
    "Mitrais Registration Coding Test RESTful API server started on: " + port
  );
});

module.exports = server;
