var express = require('express');
var router = express.Router();
var conn = require('../database');
var mysql = require('mysql');
var bcrypt = require('bcrypt');

// Modification: Ajout d'une route paramétrée pour récupérer les informations du produit
router.get('/product/:id', function (req, res, next) {
    let query = 'SELECT * FROM products WHERE id = ? LIMIT 1';
    conn.query(query, [req.params.id],(err, rows) => {
        if (err) {
            req.flash('error', err);
        } else {
            const product = rows.length > 0 ? rows[0] : null;
            if (product) {
                query = 'SELECT * FROM reviews WHERE product_id = ?';
                conn.query(query, [req.params.id], (err, rows) => {
                    const averageRating = parseInt(rows.map(x => x.rating).reduce((x, y) => x + y, 0) / rows.length);
                    console.log(averageRating);
                    res.render('product', { product, reviews: rows, averageRating });
                });
            } else {
                res.redirect('/shop');
            }
        }
    });
});
module.exports = router;
