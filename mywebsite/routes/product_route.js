var express = require('express');
var router = express.Router();
var conn = require('../database');
var mysql = require('mysql');
var bcrypt = require('bcrypt');

router.get('/product', function (req, res, next) {
    res.render('product');
});
module.exports = router;