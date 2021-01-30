const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hola Mundo');
});

const puerto = process.env.PORT || 3000;
server.listen(puerto, () => {
    console.log('Escuchando solicitudes');
});