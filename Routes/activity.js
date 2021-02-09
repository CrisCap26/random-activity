const express = require('express');
const router = express.Router();

router.post('/form', (req, res) => {
    res.send('Activity 1');
});

module.exports = router;