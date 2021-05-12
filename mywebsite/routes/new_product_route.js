var express = require('express');
var router = express.Router();
var conn = require('../database');
var mysql = require('mysql');
var bcrypt = require('bcrypt');

router.get('/new_product', function (req, res, next) {
    res.render('new_product');
});

router.post('/create_product', function(req, res, next) {
  
  var sql = 'INSERT INTO products (nomProduit, prix, description, image, categorie) VALUES ("'+req.body.nomProduit+'", '+req.body.prix+', "'+req.body.description+'", "'+req.body.image+'", '+req.body.categorie+')';
  conn.query(sql, function(err, result) {
    if (err) throw err;
    console.log('produit inséré');
    res.redirect('/shop');
  });
});

module.exports = router;