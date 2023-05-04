const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(middlewares);
app.use('/categories', router); // prefixo /api para as rotas do JSON Server
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
