const express = require('express');
const router = express.Router();

// Making a call to the path /person
router.get('/person', (req, res)=>{
    res.send('You have requested a Person')
})

module.exports = router;