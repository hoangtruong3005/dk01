const fs = require("fs");
const shortid = require("shortid");

let magazines = [];
const magazineTamp = fs.readFileSync("db.json");

magazines = JSON.parse(magazineTamp).magazines;

module.exports.getMagazines = (req, res) => {
  res.render("magazines", {
    magazines,
  });
};

module.exports.getMagazine = (req, res) => {
  const name = req.query.q;

  const tamp = magazines.filter((item) => item.name === name);

  console.log("tamp", tamp);
  res.render("magazines/magazine", {
    magazine: tamp[0],
  });
};

module.exports.group = (req, res) => {
  const by = req.query.by;

  const tamp = magazines.filter((item) => item[by] === by);

  console.log("tamp", tamp);
  res.render("magazines/magazine", {
    magazine: tamp[0],
  });
};

// Render create form
module.exports.createMagazine = (req, res) => {
  res.render("magazines/create", {});
};

// Add a new magazine
module.exports.addMagazine = (req, res) => {
  magazines.push({ ...req.body, id: shortid.generate() });

  fs.writeFileSync("./db.json", JSON.stringify({ magazines: magazines }));
  res.redirect("/magazines");
};

// Render update form
module.exports.updateMagazine = (req, res) => {
  res.render("magazines/update", { id: req.params.id });
};

// update a magazine
module.exports.actUpdateMagazine = (req, res) => {
  const id = req.params.id;
  const tamp = magazines.filter((item) => item.id === id);
  const indexMaga = magazines.indexOf(tamp[0]);

  magazines[indexMaga] = { ...req.body };
  fs.writeFileSync("./db.json", JSON.stringify({ magazines: magazines }));
  res.redirect("/magazines");
};

// Delete a magazine
module.exports.actDeleteMagazine = (req, res) => {
  const id = req.params.id;
  const tamp = magazines.filter((item) => item.id === id);
  const indexMaga = magazines.indexOf(tamp[0]);

  magazines.splice(indexMaga, 1);
  fs.writeFileSync("./db.json", JSON.stringify({ magazines: magazines }));
  res.redirect("/magazines");
};
