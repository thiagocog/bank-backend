//-- Módulo responsável pela gestão das versões de rota

// import da propriedade router do express
const { Router } = require('express');

// import de version e name do package.json
const { version, name } = require('../../package.json');

// import da rota de serviços
const ServicesRouteV1 = require('./v1/services-route');


// exportação do módulo
module.exports = (app) => {
  
  const router = Router(); // -- criando uma instância do Router

  router.route('/').get((req, res) => {
    res.send(`Bem-vindo à aplicação ${name}, em sua versão ${version}.` );
  });

  ServicesRouteV1(router);

  app.use('/v1', router);

};