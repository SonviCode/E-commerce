const UserModel = require("../models/User");

exports.signup =  (req, res, next) => {
  // const newUser = JSON.parse(req.body.data);

  // console.log(req.body.password);
  // console.log(req.body.email);
  // console.log(req.body);

  // console.log(newUser);

  const newUser = new UserModel({
    ...req.body,
    // name: req.body.name,
    // firstname: req.body.firstname,
    // email: req.body.email,
    // password: req.body.password,
    // birthday: req.body.birthday,
    // phonenumber: req.body.phonenumber,
  });
  newUser
    .save()
    .then(() => res.status(201).json(newUser))
    .catch((error) => res.status(400).json({ error }));
  console.log(newUser);
};

exports.login = (req, res, next) => {};

exports.getUser = (req, res, next) => {
  UserModel.find()
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json({ error }));
};
