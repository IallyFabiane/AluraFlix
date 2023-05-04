const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

// Configuração do Express
const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

// Configuração do Json-server
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use('/api', router);

// Configuração do Vite
module.exports = defineConfig({
  plugins: [react()],
  server: {
    middleware: app,
    fs: {
      strict: false
    }
  }
});

