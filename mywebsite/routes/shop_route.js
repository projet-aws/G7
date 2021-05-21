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
		              
		        } else {
		            categorie = rows;
		            res.render('shop',{data:produit,categorie});
		        }
    		});
    	}   
    });
  }

  //insertion dans le panier
  if (req.query.id === undefined) {
    conn.query('SELECT id FROM products ORDER BY id desc', function (err, rows) {
      p = rows;
    });
  } else {
    conn.query('SELECT id FROM products ORDER BY id desc', function (err, rows){
      if (err) throw err;
      conn.query('INSERT INTO panier(idProduit,nomp,prix,image,idUser) SELECT id, nomProduit, prix, image, idur FROM products , user where id=' + req.query.id + ' AND idur=' + 2, function (err, result) {
        if (err) throw err;
      });
      console.log('Produit ajoueter');
      res.redirect('/shop');

    });
  }



});

router.post('/delete_product', function(req, res){
  conn.query('DELETE FROM products WHERE id='+req.body.idp, function(err, results){
    if(err) throw err;
  });

 console.log('Produit supprimé');
  res.redirect('/shop');

});
  module.exports = router;