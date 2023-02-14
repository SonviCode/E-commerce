const UserProduct = require("../models/Product");

exports.createProduct = (req, res, next) => {
  const newProduct = new UserProduct({
    ...req.body,
  });
  newProduct
    .save()
    .then(() => res.status(201).json(newProduct))
    .catch((error) => res.status(400).json({ error }));
  console.log(newProduct);
};

exports.getProduct = (req, res, next) => {
  UserProduct.find()
    .then((product) => res.status(200).json(product))
    .catch((error) => res.status(400).json({ error }));
};

exports.getProductById = (req, res, next) => {
  UserProduct.findOne({ name: req.params.id })
    .then((product) => res.status(200).json(product))
    .catch((error) => res.status(400).json({ error }));
};

exports.getProductByCategory = (req, res, next) => {
  UserProduct.find({
    category: req.params.category,
    sex: req.query.sex ? req.query.sex : /.*/,
    // name: req.query.name ? req.query.name : "",
  })
    .then((product) => res.status(200).json(product))
    .catch((error) => res.status(400).json({ error }));
};
