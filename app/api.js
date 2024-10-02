const express = require('express');
const MorganMonitor = require('morgan');
const BodyParser = require('body-parser');
const KeyBrowserRouter = require("../Router/KeyBrowser.js");
const app = express();
// Estamos procurando as Rotas.
app.use(BodyParser.urlencoded({extended: false}))
app.use(BodyParser.json());
app.use(MorganMonitor("dev")) // ! Monitoramento da API
app.use("/KeyBrowser",KeyBrowserRouter)
// Quando não encontrada nenhuma Rota.
app.use((req, res,next) => {
    const error = new Error("Nenhuma Rota encontrada, por favor!");
    error.status(404);
    next(error);
})
app.use((error,req, res, next) => {
    res.status(error.status || 500);
    return res.send("Verifica se voce colocou rota corretamente!")
})
module.exports = app;