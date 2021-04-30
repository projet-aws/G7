var mysql = require('mysql');

var conn = mysql.createConnection({
  host: 'localhost', // assign your host name
  user: 'root',      //  assign your database username
  password: '',      // assign your database password
  database: 'appliweb' // assign database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('la conneion à la base est reussi !');
});
module.exports = conn;