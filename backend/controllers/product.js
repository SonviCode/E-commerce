const ProductModel = require("../models/Product");

exports.createProduct = (req, res, next) => {
  const productModel = new ProductModel({
    ...req.body,
    price: Number(req.body.price),
    counterShop: 0,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
    createdDate: Date.now(),
  });
  productModel
    .save()
    .then(() => res.status(201).json(productModel))
    .catch((error) => res.status(400).json({ error }));
};

exports.getProducts = (req, res, next) => {
  ProductModel.find()
    .then((product) => res.status(200).json(product))
    .catch((error) => res.status(400).json({ error }));
};

exports.getProductById = (req, res, next) => {
  ProductModel.findOne({ name: req.params.id })
    .then((product) => res.status(200).json(product))
    .catch((error) => res.status(400).json({ error }));
};

exports.getProductByCategory = (req, res, next) => {
  ProductModel.find({
    category: req.params.category,
    sex: req.query.sex ? req.query.sex : /.*/,
    brand: req.query.brand ? req.query.brand : /.*/,
    type: req.query.type ? req.query.type : /.*/,
    sport: req.query.sport ? req.query.sport : /.*/,
    size: req.query.size ? req.query.size : /.*/,
  })
    .then((product) => res.status(200).json(product))
    .catch((error) => res.status(400).json({ error }));
};
