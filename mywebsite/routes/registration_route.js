var express = require('express');
var router = express.Router();
var conn = require('../database');
var mysql = require('mysql');
var bcrypt = require('bcrypt');
// to display registration form 
router.get('/register', function (req, res, next) {
  res.render('registration');
});
// to store user input detail on post request
router.post('/register', function (req, res, next) {

  var nom = req.body.nom;
  var prenom = req.body.prenom;
  var telephone = req.body.telephone;
  var adresse = req.body.adresse;
  var email = req.body.email;
  var password = req.body.password;
  var confpass = req.body.confpass;
if(nom == ""){
  res.redirect('/register');
  var msg = "veuillez remplir tout les champs";
  console.log(msg);
}else if(prenom == ""){
  res.redirect('/register');
  var msg = "veuillez remplir tout les champs";
  console.log(msg);

}else if (telephone == ""){
  res.redirect('/register');
  var msg = "veuillez remplir tout les champs";
  console.log(msg);
}else if (adresse == ""){
  res.redirect('/register');
  var msg = "veuillez remplir tout les champs";
  console.log(msg);

}else if(email == ""){
  res.redirect('/register');
  var msg = "veuillez remplir tout les champs";
  console.log(msg);
}else if(password == ""){
  res.redirect('/register');
  var msg = "veuillez remplir tout les champs";
  console.log(msg);
}else if (confpass == ""){
  res.redirect('/register');
  var msg = "veuillez remplir tout les champs";
  console.log(msg);

}else{
  if (confpass == password) {
    var sql = 'SELECT * FROM user WHERE email =?';
    conn.query(sql, [email], function (err, result, fields) {
      if (err) throw err;
      if (result.length > 0) {
        var msg = email + "was already exist";

      } else {
        var hashpassword = bcrypt.hashSync(password, 10);
        var sql = 'INSERT INTO user(nom,prenom,telephone,adresse,email,password,confpass) VALUES(?,?,?,?,?,?,?);';
        conn.query(sql, [nom, prenom, telephone, adresse, email, hashpassword, confpass], function (err, result, fields) {
          if (err) throw err;
          var msg = "Your are successfully registered";
          
        });
        res.redirect('/register');
      }

    });

  } else {
    res.redirect('/index');
  }

}



});
module.exports = router;