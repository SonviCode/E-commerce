const OrderModel = require("../models/Order");

exports.createOrder = (req, res, next) => {
  const newOrder = new OrderModel({
    user: req.body.user,
    payment: req.body.payment,
    products: req.body.products,
    createdDate: Date.now(),
  });
  newOrder
    .save()
    .then(() => res.status(201).json(newOrder))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllOrderByEmail = (req, res, next) => {
  OrderModel.find()
    .then((order) => res.status(200).json(order))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOrders = (req, res, next) => {
  OrderModel.find()
    .then((order) => res.status(200).json(order))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOrderById = (req, res, next) => {
  OrderModel.findOne({ "payment.id": req.params.id })
    .then((order) => res.status(200).json(order))
    .catch((error) => res.status(400).json({ error }));
};
