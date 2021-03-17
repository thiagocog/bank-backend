const db = require('../models/Index.js');

const getAllServices = (req, res, next) => {
  db.services.findAll({})
  .then((dataFromDb) => {
    res.status(200).send(dataFromDb.map((item) => {
      return {
        id: item.id,
        name: item.name,
        manager: item.manager
      }
    }))
  })
}

const getServiceById = (req, res, next) => {
  db.services.findOne({
    where: {
      id: req.params.idservice
    },
    attributes: ['name', 'description', 'manager']
  }) .then((result) => {
    res.status(200).send(result);
  });
};

const addClient = async (req, res, next) => {

  try {
    const client = req.body
    const serviceid = req.params

    const model = {
      service_id: serviceid,
      name: client.name,
      email: client.email,
      value: client.data_nascimento
    }

  } catch (error) {
    console.log(error)
    res.status(500).send({ message: 'Internal server error!!' })
  }
  
}


module.exports = {
  getAllServices,
  getServiceById,
  addClient
};