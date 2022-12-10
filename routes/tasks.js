const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
router.get("/", async (req, res) => {
  const tasks = await Task.find({});
  hbsObj = {
    tasks: tasks.map((task) => ({
      name: task.name,
      assignee: task.assignee,
      status: task.status,
    })),
  };
  console.log("tasks", hbsObj);
  // send us to the next get function instead.
  res.render("index", hbsObj);
});

router.post("/tasks", async (req, res) => {
  console.log("req.body", req.body);
  // send us to the next get function instead.
  const doc = await Task.create({
    name: req.body.name,
    assignee: req.body.assignee,
    status: "To Do",
  });
  res.send({ result: doc, status: "success" });
});

router.put("/tasks/status", async (req, res) => {
  console.log("req.body", req.body);
  // send us to the next get function instead.
  const docToUpdate = await Task.findOne({ name: req.body.name });
  docToUpdate.status = req.body.status;
  docToUpdate.save();
  res.send({ result: docToUpdate, status: "success" });
});

module.exports = router;
