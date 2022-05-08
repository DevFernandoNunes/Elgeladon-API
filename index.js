const express = require('express'); // Importando o express
const cors = require('cors'); // Importando o cors
const routes = require('./src/routes/routes'); // Caminho de acesso as rotas
const connectToDatabase = require('./src/database/database'); // Importando para o meu index o acesso ao meu banco de dados

const port = 3000;
const app = express();

connectToDatabase();

app.use(express.json()); // Convertendo o express em json
app.use(cors()); // Chamando o cors na aplicação
app.use('/paletas', routes); // app.use(['rota padrão'], rota que será criada)

app.listen(port, () => {
  // Houvindo a porta que da inicio ao servidor
  console.log(`Servidor rodando em http://localhost:${port}`);
});
