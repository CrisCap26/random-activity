'use strict'
const http = require('http');
const express = require('express');
const { db } = require('../Models/activity');
const router = express.Router();

const Activity = require('../Models/activity');


router.post('/formulario.html', (req, res) => {
    let myData = new Activity(req.body);
    myData.save()
    .then(item => {
        res.redirect('https://random-activity.herokuapp.com/formulario.html');
    })
    .catch(err => {
        res.status(400).send('Error');
    });
});


router.get('/actividades', async (req, res) => {
    try {
                
        const arrayActivities = await Activity.find();
        let num_random = Math.floor(Math.random() * (arrayActivities.length));
        console.log(arrayActivities);
        console.log(num_random);
        res.render('actividad', {
        titulo: arrayActivities[num_random]['titulo'],
        descripcion: arrayActivities[num_random]['descripcion']
          });

    } catch (error) {
            console.log(error);
        }
          
});
    
        
module.exports = router;
