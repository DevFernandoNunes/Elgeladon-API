const mongoose = require('mongoose'); //Importação do mongoose que está no node models

const connectToDatabase = () => {
  // Função para conectar o projeto ao mongoDB
  mongoose
    .connect(
      'mongodb+srv://root:admin@api-elgeladon.hcwsw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      {
        // Passando o endereço para acessar o mongoDB
        useNewUrlParser: true, // Evitar que a conexão tenha problema
        useUnifiedTopology: true,
      },
    )
    .then(() => console.log('MongoDB Conectado!')) //Assim que o código tiver a resposta mande essa mensagem
    .catch(
      (error) => console.log(`Erro ao conectar com o MongoDB, erro: ${error}`), // Caso não conecte-se no banco de dados mande essa mensagem
    );
};

module.exports = connectToDatabase; // Exportando a função para acessar em outros locais do meu código
