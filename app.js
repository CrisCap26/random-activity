const express = require('express');
const app = express();
//const { Pool } = require('pg');
/*const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'formapp', 
    password: '',
    port: '5432'
});*/

const puerto = process.env.PORT || 3000;

//Conexión a base de datos
const mongoose = require('mongoose');

const user = '';
const password = '';
const uri = '';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

    .then(()=> console.log('Base de datos conectada'))
    .catch(e => console.log(e));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
//Rutas web
app.use('/', require('./Routes/routes'));
app.use('/', require('./Routes/activity'));
/*app.get('/index', (req, res) => {
    res.render('index.html');
});*/

/*app.get('/formulario', (req, res) => {
    res.render('formulario.html');
});*/

app.listen(puerto, () => {
    console.log('Servidor a su servicio');
});