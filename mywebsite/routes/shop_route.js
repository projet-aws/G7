var express = require('express');
var router = express.Router();
var conn=require('../database');
var mysql = require('mysql');
var bcrypt = require('bcrypt');

router.get('/shop', function(req, res, next) {
    res.render('shop');
  });
  module.exports = router;