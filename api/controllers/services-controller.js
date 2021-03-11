const db = require('../models/Index');

const getAllServices = (req, res) => {
  db.services.findAll({})
  .then((dataFromDb) => {
    res.status(200).send(dataFromDb.map((item) => {
      return {
        id: item.id,
        name: item.name,
        manager: item.manager,
      };
    }));
  });
};

const getServiceById = (req, res) => {
  db.services.findOnde({
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