
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

router.post("/api/burgers", function(req, res){
    console.log(req.body.burger_name)
    burger.insertOne([req.body.burger_name], function(result) {
        res.redirect("/")
    })
})

router.put("/api/burgers", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.updateOne({devoured:true}, condition, function(result){
        console.log(req.params.id)
        res.redirect("/")
    })
});   

// Export routes for server.js to use.
module.exports = router;