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
                
                let i=-1;
              /*  if(i < arrayActivities.length){
                    i++;
                } else {
                    i=0;
                }*/
                
                //const arrayActivities = await Activity.find().limit(1).skip(Math.floor(Math.random()) * Activity.count());
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
