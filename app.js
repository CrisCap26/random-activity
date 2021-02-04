const express = require('express');
const app = express();

const { Pool } = require('pg');
new Pool({
    
})

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const puerto = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
app.post('/mostrar', (req, res) => {
    
})
/*app.get('public/index', (req, res) => {
    res.render('index.html');
});

app.get('public/formulario', (req, res) => {
    res.render('formulario.html');
});*/

app.listen(puerto, () => {
    console.log('Servidor a su servicio');
});