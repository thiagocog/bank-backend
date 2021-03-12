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


module.exports = {
  getAllServices,
  getServiceById
};