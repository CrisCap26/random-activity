const express = require('express');
const app = express();

const puerto = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/index', (req, res) => {
    res.render('index.html');
});

app.get('/formulario', (req, res) => {
    res.render('formulario.html');
});

app.listen(puerto, () => {
    console.log('Servidor a su servicio');
});