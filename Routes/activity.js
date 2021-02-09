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
        res.send('Datos guardados');
    })
    .catch(err => {
        res.status(400).send('Error');
    });
});

module.exports = router;