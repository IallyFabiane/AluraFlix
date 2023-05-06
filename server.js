const express = require('express');
const path = require('path');
const jsonServer = require('json-server');
const vite = require('vite');

const app = express();

async function startServer() {
  const viteApp = await vite.createServer({
    server: {
      middlewareMode: false // Desativar o modo de middleware
    }
  });

  const router = jsonServer.router('./db.json');
  const middlewares = jsonServer.defaults();

  app.use(express.static(path.join(__dirname, 'dist')));

  app.use(viteApp.middlewares);

  app.get('*', async (req, res) => {
    const url = req.originalUrl;

    try {
      const template = await viteApp.transformIndexHtml(url, `
        <div id="app"></div>
      `);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (err) {
      viteApp.ssrFixStacktrace(err);
      console.log(err);
      res.status(500).end(err.stack);
    }
  });

  // Configuração do Json-server
  const jsonServerApp = jsonServer.create({
    // Definindo a porta para 3000
    port: 3000
  });

  jsonServerApp.use(middlewares);
  jsonServerApp.use('/categories', router);

  jsonServerApp.listen(() => {
    console.log('JSON Server iniciado na porta 3000');
  });

  viteApp.listen(3001, () => {
    console.log('Servidor iniciado na porta 3001');
  });
}

startServer();


