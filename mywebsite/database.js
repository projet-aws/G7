var mysql = require('mysql');

var conn = mysql.createConnection({
  host: 'localhost', // assign your host name
  user: 'phpmyadmin',      //  assign your database username
  password: 'ayoub',      // assign your database password
  database: 'phpmyadmin' // assign database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('la conneion à la base est reussi !');
});
module.exports = conn;