const UserProduct = require("../models/Product");

exports.createProduct = (req, res, next) => {
  console.log(req.body);
  console.log(req.body);
  console.log(req.body.name);
  console.log(req.file);

  const newProduct = new UserProduct({
    ...req.body,
    price: Number(req.body.price),
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
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
  console.log(req.params);
  console.log(req.query);
  UserProduct.find({
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
