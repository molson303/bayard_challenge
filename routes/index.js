var express = require('express');
var router = express.Router();
var service = require('../lib/services')
var knex = require('../db/knex')


router.get('/', function(req, res, next) {
  service.all().then(function(service, services){
    res.render('index', {
      service: service.rows[0].service,
      services: service.rows[1].service
    });
  })
});

router.post('/index', function (req, res) {
   service.create(req.body).then(function () {
     res.redirect('/');
   });
 })




module.exports = router;
