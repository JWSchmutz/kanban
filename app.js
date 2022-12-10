const express = require("express");
const app = express();

const Handlebars = require("express-handlebars");

const db = require("./models/Task");

app.use(express.static("public"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(
  "handlebars",
  Handlebars.engine({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

// const cupRoutes = require("./controllers/cupsController");
// const matchupRoutes = require("./controllers/matchupsController");
// app.use(cupRoutes);
// app.use(matchupRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
