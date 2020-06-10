var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const methodOverride = require("method-override");

const magazineRouter = require("./models/magazine.model");

var port = 8082;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});
app.use("/magazines", magazineRouter);

app.listen(port, function () {
  console.log("server listening on port:" + port);
});
