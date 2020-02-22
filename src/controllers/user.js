const Users = require('../models').User;

module.exports = {
  create(req, res) {
    return Users
      .create({
        email: req.body.email,
        password: req.body.password
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  getAll(req, res) {
    return Users
      .findAll()
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  }
};