
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

// inports routes
var routes = require("./controllers/catsController.js");

app.use(routes);

// starts server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
