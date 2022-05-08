const route = require('express').Router();
const controllerPaletas = require('../controllers/paleta.controller'); //Chamando conteúdo do controller e armazenando na variável controllerPaletas
const controllerCarrinho = require('../controllers/carrinho.controller'); 
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const {
  validId,
  validObjectBody,
  validObjectBodyCarrinho,
} = require('../middlewares/paleta.middleware');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/all-paletas', controllerPaletas.findAllPaletasController); // Chamando todas as paletas

route.get(
  // Chamando uma paleta só
  '/one-paleta/:id',
  validId,
  controllerPaletas.findByIdPaletaController,
);
route.post(
  // Criand uma paleta
  '/create-paleta',
  validObjectBody,
  controllerPaletas.createPaletaController,
);
route.put(
  // Editando uma paleta
  '/update-paleta/:id',
  validId,
  validObjectBody,
  controllerPaletas.updatePaletaController,
);
route.delete(
  // deletando uma paleta
  '/delete-paleta/:id',
  validId,
  controllerPaletas.deletePaletaController,
);

route.get('/all-carrinho', controllerCarrinho.findAllCarrinhoController);
route.post(
  '/create-carrinho',
  validObjectBodyCarrinho,
  controllerCarrinho.createManyCarrinhoController,
);
route.delete(
  '/finish-carrinho',
  controllerCarrinho.deleteAllCarrinhoController,
);

module.exports = route;
