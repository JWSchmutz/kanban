const path = require("path");
const router = require("express").Router();
const taskRoutes = require("./tasks");
// user routes
console.log("here1");
router.use("/", taskRoutes);
// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
