require('./../config/database');
const sample = require('./sample-data');
console.log(sample);

// import mongoose models
const Product = require('./../models/product');

// destroy all database
const seed = Product.remove({})

// create products
seed.then(() => {
  return Product.create(sample)
})

Product.remove({}).then( () => {
  
})

.then((product) => {
  console.log(product);
  require('mongoose').connection.close();
  process.exit();
});