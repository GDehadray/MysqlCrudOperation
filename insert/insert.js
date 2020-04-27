module.exports = require("../config/imports").express.Router().post("/",(req,res)=>{
    var connection  = require("../config/db_connection").getConnection();
    connection.connect();
    require("../config/queries").insert(connection,req,res);
});