var express = require('express');
var router = express.Router();
var productCtrl = require('../controllers/products');

router.get('/catalog', productCtrl.index);

module.exports = router;