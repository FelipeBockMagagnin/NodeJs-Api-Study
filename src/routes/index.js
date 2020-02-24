const userController = require('../controllers').user;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the user API!',
  }));

  app.get('/api/user', userController.getAll);
  app.post('/api/user', userController.validateLogin);
  app.put('/api/user', userController.create);
};