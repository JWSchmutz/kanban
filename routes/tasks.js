const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
router.get("/", (req, res) => {
  // send us to the next get function instead.
  res.render("index", { test: "test" });
});

router.post("/tasks", async (req, res) => {
  // send us to the next get function instead.
  const doc = await Task.create({ name: "job1", asignee: "Carson" });
  res.send({ result: doc, status: "success" });
});

module.exports = router;
