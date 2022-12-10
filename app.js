const express = require("express");
const app = express();

const Handlebars = require("express-handlebars");

require("./config");

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

const routes = require("./routes");
app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
