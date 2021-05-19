var express = require('express');
var router = express.Router();
var conn=require('../database');
var mysql = require('mysql');
var bcrypt = require('bcrypt');

/* GET users listing. */




router.get('/login', function(req, res, next) {

  res.render('login');
});
router.get('/registration', function (req, res, next) {
    res.render('registration');
});
//ajouter
router.post('/logout', function(req,res)
{
    req.session.destroy(err => {
        if(err)
        {
            return res.redirect('/index')
        }
        
        res.clearCookie(SESS_NAME)
        res.redirect('login')
    })
})

router.post('/login', function(req, res){


    var email = req.body.email;
    var password = req.body.password;
    
    var sql='SELECT * FROM user WHERE email =?';
    conn.query(sql, [email], function (err, result, fields) {
        if(err) throw err;
        if(result.length && bcrypt.compareSync(password, result[0].password)){
            req.session.email= email;
            req.session.user= result;
            exports.result = result ;

            
            res.redirect('/shop')
            
            

        }else{
            res.render('login',{alertMsg:"Votre adresse ou votre mot de passe est incorrect"});
        }
    });



    











});
module.exports = router;