const Paletas = require('../models/Paleta'); // Os dados das paletas e outros estão vindo do models

const findAllPaletasService = async () => {
  const allPaletas = await Paletas.find(); // Espero o programa pegar todas as paletas e armazenar em allPaletas
  return allPaletas; // Retorno todas as paletas
};

const findByIdPaletaService = async (idParam) => {
  // Recebendo o id que vem da url
  const onePaleta = await Paletas.findById(idParam); // Buscando a paleta no banco de dados
  return onePaleta; // Retornando uma paleta escolhida
};

const createPaletaService = async (newPaleta) => {
  // Recebendo a nova paleta do controller via parâmetro
  const createdPaleta = await Paletas.create(newPaleta); // Armazenando a nova paleta na constante createdPaleta
  return createdPaleta;
};

const updatePaletaService = async (idParam, editPaleta) => {
  // Chegando do controle os dados adquiridos pelos parâmetros
  const updatePaleta = await Paletas.findByIdAndUpdate(idParam, editPaleta); // Armazenando esses dados na constate
  return updatePaleta; // Retornando a paleta editada para o controller
};

const deletePaletaService = async (idParam) => {
  // Recebendo via parâmetro o id da paleta que será deletada
  return await Paletas.findByIdAndDelete(idParam); // Retornado para o controller a paleta que foi deletada
};

module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
