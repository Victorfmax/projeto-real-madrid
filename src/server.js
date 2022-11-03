// importar demencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando o express
const server = express()
server
    // utilizar body do req
    .use(express.urlencoded({ extended: true }))
    // utilizando os arquivos estáticos
    .use(express.static('public'))

    // configurar t:wplate engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // rotas da aplicaçao
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//desligar o servidor
server.listen(5500)
