const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: true }));




//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const puerto = process.env.PORT || 3000;

//Conexión a base de datos
const mongoose = require('mongoose');
/*
const user = 'Admin';
const password = '2vPXyWv49Ivs6ke2';
const dbname = 'Registro';
*/
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.x7dcl.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

    .then(()=> console.log('Base de datos conectada'))
    .catch(e => console.log(e));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

//Rutas web
app.use('/', require('./Routes/routes'));
app.use('/', require('./Routes/activity'));


app.listen(puerto, () => {
    console.log('Servidor a su servicio');
});