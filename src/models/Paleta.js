const mongoose = require('mongoose'); // Importando o mongoose por conta do banco de dados

const PaletaSchema = new mongoose.Schema({
  // Schema do modelo do documento que vai ser mandado para o banco de dados
  // Abaixo vem a definição do meu objeto com suas caracteristicas
  sabor: {
    type: String, // Tipando cada informação
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  foto: {
    type: String,
    require: true,
  },
  preco: {
    type: Number,
    require: true,
  },
});

const Paleta = mongoose.model('paletas', PaletaSchema); // Aqui estamos falando que a paletas que ta no mongo é a mesma coisa que PaletaSchema

module.exports = Paleta; //  Exportando paleta para o projeto
