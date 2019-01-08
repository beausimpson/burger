
// dependencies
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// static content
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// inports routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// starts server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
