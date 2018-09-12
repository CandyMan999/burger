var connection = require("../config/connection.js");


var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
     
        cb(result);
    });

    },

    insertOne: function(table, val, cb) {
        var queryString = `INSERT INTO ${table} (burger_name) VALUES ("${val}")`;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    
    },
   
    updateOne: function(table, id, cb) {
        var queryString = `UPDATE ${table} SET devoured = true WHERE id = ${id}`;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
   
    },

    // onLoad: function(tableInput, cb){
    //     connection.query(`UPDATE ${tableInput} SET devoured = false`, function(){
    //         if (err) throw err;
    //     });
    // }
  
}


module.exports = orm;

