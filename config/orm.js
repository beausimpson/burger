// Import MySQL connection.
var connection = require("../config/connection.js")

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
};

function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
};

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
        var queryString = "INSERT INTO " + table + " (" + column.toString() + ") VALUES (" + printQuestionMarks(value.length) + ")"

        console.log(queryString);

        connection.query(queryString, value, function (err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        });
    },
    updateOne: function (table, value, condition, callback) {
        var queryString = "UPDATE " + table + " SET " +objToSql(value) + " WHERE " + condition;

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