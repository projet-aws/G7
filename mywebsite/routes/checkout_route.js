var express = require('express');
var router = express.Router();
var conn = require('../database');
var mysql = require('mysql');
var bcrypt = require('bcrypt');

router.get('/checkout', function (req, res, next) {
    res.render('checkout');
});
module.exports = router;