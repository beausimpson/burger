// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(result) {
            callback(result)
        })
    },
    insertOne: function(value, callback) {
        console.log(value)
        orm.insertOne("burgers", "burger_name", value, function(result) {
            callback(result)
        })
    },
    updateOne: function(value, condition, callback) {

        console.log(value, condition)
        
        orm.updateOne("burgers", value, condition, function(result) {
            callback(result)
        })
    }
}

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;