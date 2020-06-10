const express = require("express");

const {
  getMagazines,
  getMagazine,
  createMagazine,
  addMagazine,
  updateMagazine,
  actUpdateMagazine,
  actDeleteMagazine,
  group,
} = require("../controllers/magazine.controller");

const router = express.Router();

// GET method
router.get("/", getMagazines);
router.get("/search", getMagazine);
router.get("/create", createMagazine);
router.get("/update/:id", updateMagazine);
router.get("/group", group);

// POST method
router.post("/create", addMagazine);

// PUT method
router.put("/update/:id", actUpdateMagazine);

// DELETE method
router.delete("/delete/:id", actDeleteMagazine);

module.exports = router;
