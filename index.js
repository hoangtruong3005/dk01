var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const methodOverride = require("method-override");

const magazineRouter = require("./models/magazine.model");
var PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("layouts/home_");
});
app.use("/magazines", magazineRouter);

app.listen(PORT, function () {
  console.log(`server running on http://localhost:${PORT}`);
});
