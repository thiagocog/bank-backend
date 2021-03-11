const Joi = require('joi');

// import do controlador de rotas dos serviços
const ServicesController = require('../../controllers/services-controller');


module.exports = (router) => {
  router.route('/services').get(
    ServicesController.getAllServices
  );

  router.route('/services/:idservice').get(
    ServicesController.getServiceById
  );
};