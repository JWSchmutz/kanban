const express = require("express");
const router = express.Router();
const Tasks = require("../models/Task");
console.log("here");
router.get("/", (req, res) => {
  console.log(typeof parseInt(req.params.number));
  // send us to the next get function instead.
  res.render("index", { test: "test" });
});

module.exports = router;
