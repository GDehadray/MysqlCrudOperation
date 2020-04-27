module.exports = require("../config/imports").express.Router().get("/",(req,res)=>{
    var connection = require("../config/db_connection").getConnection();
    connection.connect();
    require("../config/queries").fetch(connection,res);
});