
var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgerObject = {
            burgers: data
        };
        res.render("index", burgerObject)
    })
});

// Export routes for server.js to use.
module.exports = router;