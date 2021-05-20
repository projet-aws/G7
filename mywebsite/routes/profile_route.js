var express = require('express');
var router = express.Router();
var conn = require('../database');
var mysql = require('mysql');
var bcrypt = require('bcrypt');
var users = '';


router.post('/editer' , function(req, res,next)
{

    var tel = req.body.tel;
    var Lname = req.body.Lname;
    var Fname = req.body.Fname;
    var adr = req.body.adr;
    const { user } = res.locals
   
    conn.query('update user set telephone=' + tel  +  ' , adresse="' + adr + '" where id=2'  + ' ;', function (err, rows) {

        if (err) {
            console.log('error', err);


        }
        else {
            
            res.redirect('/profile');
        }




    });


});
        


router.get('/profile' , function (req, res, next) {

  
     
    conn.query('SELECT * FROM user where id=2'  , function (err, rows) {

       
        if (err) {
            console.log('error', err);


        }
        else {
            users = rows;
            res.render('profile',{data : users});
        }


       

    });


});







module.exports = router;


