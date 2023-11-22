//This file gives acces to pool and is being used by exporting 

const mysql = require('mysql2');

//create connection pool - (new connection from that pool which runs multiple connections for multiple queries)
//This pool is finished when application shuts down

const pool = mysql.createPool({
    host : 'localhost',             //host is running locally on localhost so localhost
    user: 'root',                    // user is we have choosen root on DB
    database: 'node-complete',       //Schema name
    password: 'root'                 //password
});

module.exports = pool.promise();        //exporting

//instead of call backs we are using promise because it allows us to run it asynchronously and write our code in a more asynchronous way