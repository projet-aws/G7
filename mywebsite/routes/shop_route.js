var express = require('express');
var router = express.Router();
var conn=require('../database');
var mysql = require('mysql');
var bcrypt = require('bcrypt');

router.get('/shop', function(req, res, next) {
	var produit = '';
	var categorie = '';
	if(req.query.categorie === undefined){
     conn.query('SELECT * FROM products ORDER BY id desc',function(err,rows)     {
 
        if(err) {
            req.flash('error', err);
            // render to views/books/index.ejs
              
        } else {
            produit = rows;
            conn.query('SELECT * FROM categorie ORDER BY id desc',function(err,rows)     {
 
		        if(err) {
		            req.flash('error', err);
		            
		              
		        } else {
		            categorie = rows;
		            res.render('shop',{data:produit,categorie});
		        }
    		});
    	}
        
    });
  }else{
  	conn.query('SELECT * FROM products where categorie='+req.query.categorie+' ORDER BY id desc',function(err,rows)     {
 
        if(err) {
            console.log('error', err);
              
        } else {
            produit = rows;
            conn.query('SELECT * FROM categorie ORDER BY id desc',function(err,rows)     {
 
		        if(err) {
		            req.flash('error', err);
		            // render to views/books/index.ejs
		              
		        } else {
		            categorie = rows;
		            res.render('shop',{data:produit,categorie});
		        }
    		});
    	}
        
    });
  }
  });
  module.exports = router;