var express = require('express');
var router = express.Router();
var conn = require('../database');
var mysql = require('mysql');
var bcrypt = require('bcrypt');

router.get('/cart', function (req, res, next) {
    var panier = '';
    var produit = '';

    conn.query('SELECT * FROM panier where idUser=' + 2, function (err, rows) {
        if (err) {
            console.log('error', err);

        } else {
            panier = rows;

                    res.render('cart', { result: panier });
                }
            });

            // supprimer un produit dans le panier
            if (req.query.id === undefined) {
                conn.query('SELECT * FROM panier where idUser=' + 2, function (err, results) {
                    if (err) {
                        console.log('error', err);
        
                    } 
                });
            } else {
                conn.query('DELETE FROM panier WHERE idpanier=' + req.query.id, function (err, results) {
        
                    if (err) throw err;
                });
        
                console.log('Produit supprimé');
               res.redirect('cart');
        
            }
              
            
            
    
});
module.exports = router;