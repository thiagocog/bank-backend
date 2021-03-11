const express = require('express');
const cors = require('cors');
const router = require('../api/routes/router')

//--criando uma instância express
const app = express();


// -- configurando middlewares
app.use(express.json()); //-- equivalente ao body-parser
app.use(cors())

router(app);

// -- Abertura da porta
const port = 3232;
app.listen(port, () => {
  console.log(`Server running on port localhost:${port}.`);
});

// -- Exportação do módulo
module.exports = app;