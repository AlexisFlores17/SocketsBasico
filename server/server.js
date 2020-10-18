const express = require('express');
//importar sockets e inicialñizar server para sockets
const socketIO = require('socket.io');
const http=require('http');

//
const path = require('path');

const app = express();

//mandar server express por el server del socket
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//iniiciar el socket , comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});