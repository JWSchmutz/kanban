const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const Handlebars = require("express-handlebars");

require("./config");

app.use(express.static("public"));
// Parse request body as JSON

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var hbs = Handlebars.create({
  helpers: {
    ifEquals: function (arg1, arg2, options) {
      return arg1 == arg2 ? options.fn(this) : options.inverse(this);
    },
  },
  defaultLayout: "main",
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

const routes = require("./routes");
app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
