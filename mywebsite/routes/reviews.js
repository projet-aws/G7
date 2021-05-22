var express = require('express');
var router = express.Router();
var conn = require('../database');

// TODO : A reprendre : Ajout d'une route créer un commentaire
router.post('/', (req, res, _) => {
    let query = 'SELECT id FROM reviews WHERE email = ? AND product_id = ?';
    conn.query(query, [req.body.email, req.body.product_id], (e, rows) => {
        if (e) {
            console.error(e);
        } else if (rows.length <= 0) {
            query = `INSERT INTO reviews(name, email, content, rating, product_id) VALUES(?, ?, ?, ?, ?)`;
            conn.query(query, [req.body.name, req.body.email, req.body.content, req.body.rating, req.body.product_id], (e, _) => {
                if (e) {
                    console.error(e);
                } else {
                    res.redirect(`/product/${req.body.product_id}`);
                }
            })
        }
    });
})

module.exports = router;
