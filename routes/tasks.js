const express = require("express");
const router = express.Router();
const Tasks = require("../models/Tasks");
router.get("/", (req, res) => {
  console.log(typeof parseInt(req.params.number));
  // send us to the next get function instead.
  res.render("index", { test: "test" });
});

module.exports = router;
