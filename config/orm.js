// Import MySQL connection.
var connection = require("../config/connection.js")

var orm = {
    selectAll: function (table, callback) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result)
        })
    },
    insertOne: function (table, column, value, callback) {
        var queryString = "INSERT INTO " + table + " (" + column + ") VALUES (" + value + ")"

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        });
    },
    updateOne: function (table, value, condition, callback) {
        var queryString = "UPDATE " + table + " SET " + value + " WHERE " + condition;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            callback(result)
        })
    }
}

// Export the orm object for the model (burger.js).
module.exports = orm;