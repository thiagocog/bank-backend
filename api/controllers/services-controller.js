const { services, clients } = require('../models/index.js');


const getAllServices = async (req, res) => {
  const result = await services.findAll({})

  res.status(200).send(result.map((item) => {
    return {
      id: item.id,
      name: item.name,
      manager: item.manager
    }
  }))
}

const getServiceById = async (req, res) => {
  try {
    const result = await services.findOne({
      where: {
        id: req.params.idservice
      },
      include: {
        model: clients,
        as: 'clients'
      },
    }) 

    const data = {
      id: result.id,
      name: result.name,
      description: result.description,
      manager: result.manager,
      clients: result.clients
    }  

    res.status(200).send(data)

  }

  catch (error) {
    console.log(error);
  }
}


const addClient = async (req, res) => {

  try {
    const body = req.body
    const { idservice } = req.params

    const model = {
      service_id: idservice,
      client_name: body.client_name,
      client_email: body.client_email,
      client_address: body.client_address,
      value: body.value
    }

    await clients.create(model);

    res.status(200).send({ message: `Well done, you've created a service order!`})

  } catch (error) {
    console.log(error)
    res.status(500).send({ message: 'Internal server error!!' })
  }
  
}




const deleteClient = async (req, res) => {

  try {
    const { idclient } = req.params

    await clients.destroy({
      where: {
        id: idclient
      }
    })

    res.status(200).send({ message: 'Order successfully deleted'})

  } catch (error) {
    console.log(error)
    res.status(500).send({ message: 'Internal server error!!' })
  }

}




module.exports = {
  getAllServices,
  getServiceById,
  addClient,
  deleteClient
};