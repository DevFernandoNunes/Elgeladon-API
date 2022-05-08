const carrinhoService = require('../services/carrinho.service');

const findAllCarrinhoController = async (req, res) => {
  const allCarrinho = await carrinhoService.findAllCarrinhoService();
  if (allCarrinho.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum item no carrinho!' });
  }
  res.send(allCarrinho);
};

const createManyCarrinhoController = async (req, res) => {
  const carrinho = req.body;
  const newCarrinho = await carrinhoService.createManyCarrinhoService(carrinho);
  res.status(201).send(newCarrinho);
};

const deleteAllCarrinhoController = async (req, res) => {
  await carrinhoService.deleteAllCarrinhoService();
  res.send({ message: 'Carrinho finalizado com sucesso!' });
};

module.exports = {
  findAllCarrinhoController,
  createManyCarrinhoController,
  deleteAllCarrinhoController,
};
