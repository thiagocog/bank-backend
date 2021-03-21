const Joi = require('joi')

// import do controlador de rotas dos serviços
const servicesController = require('../../controllers/services-controller')


module.exports = (router) => {
  router.route('/services').get(
    servicesController.getAllServices
  )

  router.route('/services/:idservice').get(
    servicesController.getServiceById
  )

  router.route('/services/:idservice/addclient').post(
    servicesController.addClient
  )

  router.route('/services/:idservice/addclient/:idclient').delete(
    servicesController.deleteClient
  )
}