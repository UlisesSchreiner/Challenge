// Rates controller
const rateController = require('../controllers/rateController');

// Rates router
module.exports = {
  name: 'ApiRoutes',
  register: async (server, options) => {
    server.route([
      {
        method: 'GET',
        path: '/rates',
        handler: async (req, res) => {
          return rateController.get(req, res);
        }
      },
      {
        method: 'POST',
        path: '/rates',
        handler: async (req, res) => {
          return rateController.postOne(req, res);
        }
      }
    ]);
  }
}