const Carrinho = require('../models/Carrinho');

const findAllCarrinhoService = async () => {
  const allCarrinho = await Carrinho.find();
  return allCarrinho;
};

const createManyCarrinhoService = async (newCarrinho) => {
  const createdCarrinho = await Carrinho.insertMany(newCarrinho);
  return createdCarrinho;
};

const deleteAllCarrinhoService = async () => {
  return await Carrinho.deleteMany();
};

module.exports = {
  findAllCarrinhoService,
  createManyCarrinhoService,
  deleteAllCarrinhoService,
};
