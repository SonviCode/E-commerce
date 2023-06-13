const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const newUser = new UserModel({
        ...req.body,
        location: {
          ...req.body,
        },
        password: hash,
        createdDate: Date.now(),
      });
      newUser
        .save()
        .then(() => res.status(201).json(newUser))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  UserModel.findOne({ email: req.body.email })
    .then((user) => {
      if (user === null) {
        res.status(401).json({ message: "identifiant/mot de passe incorrect" });
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then((valid) => {
            if (!valid) {
              res
                .status(401)
                .json({ message: "identifiant/mot de passe incorrect" });
            } else {
              res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                  { userId: user._id },
                  process.env.RANDOM_TOKEN_SECRET,
                  {
                    expiresIn: "1h",
                  }
                ),
              });
            }
          })
          .catch((error) => res.status(500).json({ error }));
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.getUsers = (req, res, next) => {
  UserModel.find()
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json({ error }));
};

exports.getUserById = (req, res, next) => {
  UserModel.findOne({ _id: req.params.id })
    .then((user) => {
      user.password = undefined

      res.status(200).json(user);
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.updateUserAdress = (req, res, next) => {
  UserModel.findOneAndUpdate(
    { _id: req.params.id },
    { location: { ...req.body } },
    {new: true}
  )
    .then((user) => {
      user.password = undefined

      res.status(200).json(user);
    })
    .catch((error) => res.status(400).json({ error }));
};
