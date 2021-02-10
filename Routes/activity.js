const express = require('express');
const router = express.Router();

const Activity = require('../Models/activity');

router.get('/actividad', async (req, res) => {

    try {
        
        const activities = await Activity.find({});
        console.log(activities);

    } catch (error) {
        console.log(error);
    }
    res.send('Activity 1');
});

router.post('/form', (req, res) => {
    let myData = new Activity(req.body);
    myData.save()
    .then(item => {
        res.redirect('http://localhost:3000/formulario.html');
    })
    .catch(err => {
        res.status(400).send('Error');
    });
});

router.get('/actividades', (req, res) => {
    res.render('actividad', {titulo: 'Jugar',
    descripcion: 'Salir a jugar xdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd'})
});

module.exports = router;