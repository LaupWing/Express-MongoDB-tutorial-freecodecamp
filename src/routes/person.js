const express = require('express');
const router = express.Router();

// Making a call to the path /person
// QueryString => query property on the request object
// This is an querystring localhost:3000/person?name=loc
router.get('/person', (req, res)=>{
    console.log(req.query)
    if(req.query.name){
        res.send('You have requested a Person '+ req.query.name)
    }else{
        res.send('You have requested a Person')
    }
})

// With : express knows it should map the 'name' to a variabel
// This is params property on the request object
// localhost:3000/person/loc
router.get('/person/:name', (req, res)=>{   
    res.send('You have requested a Person '+ req.params.name)
})

router.get('/error', (req,res)=>{
    throw new Error('Forced Error')
})
module.exports = router;