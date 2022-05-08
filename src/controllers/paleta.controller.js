const paletasService = require('../services/paleta.service'); // //Chamando conteúdo do services e armazenando na variável paletasService

const findAllPaletasController = async (req, res) => {
  const allPaletas = await paletasService.findAllPaletasService(); // Espera ver o resultado do service
  if (allPaletas.length == 0) {
    // Verifica se a paleta chamada é maior que 0, se não for maior que 0 manda uma mensagem de erro
    return res // Se a paleta não existir mande essa mensagem
      .status(404)
      .send({ message: 'Não existe nenhuma paleta cadastrada!' });
  }
  res.send(allPaletas); // Se for maior que zero responde com todas as paletas
};

const findByIdPaletaController = async (req, res) => {
  const idParam = req.params.id; //Armazena o id que ta vindo via url
  const chosenPaleta = await paletasService.findByIdPaletaService(idParam); //Vai até o service
  if (!chosenPaleta) {
    // Se não tiver a paleta escolhida pela a url retorna a mensagem de erro abaixo
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }
  res.send(chosenPaleta); // Se tem a paleta retorna ela para o front acessar essa paleta escolhida
};

const createPaletaController = async (req, res) => {
  const paleta = req.body; // armazenando a informação que ta vindo via requisição do body
  const newPaleta = await paletasService.createPaletaService(paleta); // Vai até o service ver a regra
  res.status(201).send(newPaleta); // Paleta criada
};

const updatePaletaController = async (req, res) => {
  const idParam = req.params.id; // Armazenando o id que está vindo via url
  const editPaleta = req.body; // Vindo a paleta da requisição do body, aqui vem o que ta sendo editado via body formulário e sendo armazenado na constate
  const updatedPaleta = await paletasService.updatePaletaService(
    // Vai até o service ver a regra de negócio
    idParam,
    editPaleta,
  );
  res.send(updatedPaleta); // responde com a paleta editada no lugar da anterior
};

const deletePaletaController = async (req, res) => {
  const idParam = req.params.id; // Vem o id via url
  await paletasService.deletePaletaService(idParam); // Vai até o service ver a regra de negócio está sendo enviado para o service o idParam
  res.send({ message: 'Paleta deletada com sucesso!' }); // como a paleta foi deletada envie essa mensagem
};

module.exports = {
  // Exportando toda as variáveis para serem usadas e manipuladas de acordo com a sua devida rota
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
