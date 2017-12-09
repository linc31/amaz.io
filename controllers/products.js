var Product = require('../models/product');

module.exports = {
  create,
  index,
  addItem,
  deleteItem
}

function index(req, res) {
  console.log('what')
  Product.find({}).then((products) => res.json(products))
}

function create(req, res) {
  Product.create(req.body)
  .then(product => {
    res.json(product)
  })
  .catch(err => {
    res.json({error: err});
  })
}

function addItem(req, res) {

}

function deleteItem(req, res) {
  
}