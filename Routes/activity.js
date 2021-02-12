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




function mostrarDatos(){
        router.get('/actividades', async (req, res) => {
            try {
                
                let i=-1;
              /*  if(i < arrayActivities.length){
                    i++;
                } else {
                    i=0;
                }*/
                //const arrayActivities = await Activity.find().limit(-1).skip(5 * Activity.count());
                const arrayActivities = await Activity.find();
                console.log(arrayActivities);
        
                res.render('actividad', {
                    titulo: arrayActivities[0]['titulo'],
                    descripcion: arrayActivities[0]['descripcion']
                });
            } catch (error) {
                console.log(error);
            }
          
        });
}


module.exports = router;
module.exports = mostrarDatos;