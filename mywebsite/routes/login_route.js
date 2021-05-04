var express = require('express');
var router = express.Router();
var conn=require('../database');
var mysql = require('mysql');
var bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.post('/login', function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    var sql='SELECT * FROM user WHERE email =?';
    conn.query(sql, [email], function (err, result, fields) {
        if(err) throw err;
        if(result.length && bcrypt.compareSync(password, result[0].password)){
            req.session.email= email;
            res.redirect('/shop')

        }else{
            res.render('login',{alertMsg:"Votre adresse ou votre mot de passe est incorrect"});
        }
    });
});
module.exports = router;