var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var subscribers = require('../lib/subscribers')

router.get('/', function(req, res, next){
  subscribers.all().then(function(subscribers){
    res.render('subscribers/index', {subscribers: subscribers.rows});
  })
})


module.exports = router;
