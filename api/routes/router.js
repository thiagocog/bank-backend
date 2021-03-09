const { Router } = require('express');
const { version, name } = require('../../package.json');

module.exports = (app) => {
  // -- criando uma instância do Router
  const router = Router();

  router.route('/').get((req, res) => {
    res.send(`Bem-vindo à aplicação ${name}, em sua versão ${version}.` );
  });

  app.use('/', router);

};