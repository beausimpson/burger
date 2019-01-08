// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(result) {
            callback(result)
        })
    },
    insertOne: function(column, value, callback) {
        orm.insertOne("burgers", column, value, function(result) {
            callback(result)
        })
    },
    updateOne: function(value, condition, callback) {
        orm.updateOne("burgers", value, condition, function(result) {
            callback(result)
        })
    }
}

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;