const express = require('express');
const Parse = require('parse/node');

const app = express();
const port = 3001;

// Configure o Parse com suas chaves de aplicação
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;
const PARSE_APPLICATION_ID = 'O44FbeKcZNWC2JOxOQrqZWA8YIPmIBRqvFH0hPfg';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'Yx33QNOULeOkegwqW9zIQvxkR9nnk7WljZDlnjba';

// Rota para consultar dados
app.get('/api/data', async (req, res) => {
  const Funcionario = Parse.Object.extend("Funcionario");
  const query = new Parse.Query(Funcionario);

  try {
    const results = await query.find();
    res.json(results.map(object => ({
        id: object.id,
        Nome: object.get('Nome'),
      })));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });