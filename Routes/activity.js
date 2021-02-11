const express = require('express');
const { db } = require('../Models/activity');
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

router.get('/actividades', async (req, res) => {
    try {

        let numRandom = 3;
        const arrayActivities = await Activity.find().limit(1).skip(numRandom);

        console.log(arrayActivities);
        res.render('actividad', {
            titulo: arrayActivities[0]['titulo'],
            descripcion: arrayActivities[0]['descripcion']
           
        })
    } catch (error) {
        console.log(error);
    }
  
});

module.exports = router;