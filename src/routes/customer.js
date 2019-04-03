let CustomerModel = require('../models/customer.model')
const express = require('express')
const router = express.Router()

// Create a new Customer
router.post('/customer', (req,res)=>{
    // Check if request.body exist
    if(!req.body){
        return res.status(400).send('Request body is missing')
    }
    // Example of input
    // let user ={
    //     name: 'firstname lastname',
    //     email: 'email.gmail.com'
    // }
    const model = new CustomerModel(req.body)
    // Mongoose telling to the mongo driver to save it in the mongodatabase aka mlab
    model.save()
        .then(doc =>{
            if(!doc || doc.length === 0){
                return res.status(300).send(doc)
            }else{
                res.status(201).send(doc)
            }
        })
        .catch(err=>{
            res.status(500).json(err)
        })
})

// Get request
router.get('/customer', (req,res)=>{
    if(!req.query.email){
        return res.status(400).send('Missing URL paramater Email')
    }
    CustomerModel.findOne({
        email: req.query.email
    })
        .then(doc=>{
            res.send(doc)
        })
        .catch(err=>{
            res.status(500).json(doc)
        })
})

// Update Object
// Put updates the path (in this case the /customer path)
router.put('/customer', (req,res)=>{
    if(!req.query.email){
        return res.status(400).send('Missing URL paramater Email')
    }
    CustomerModel.findOneAndUpdate({
        email: req.query.email
    }, req.body, {
        new: true
    })
        .then(doc=>{
            res.send(doc)
        })
        .catch(err=>{
            res.status(500).json(doc)
        })
})

// Delete it
router.delete('/customer', (req,res)=>{
    if(!req.query.email){
        return res.status(400).send('Missing URL paramater Email')
    }
    CustomerModel.findOneAndRemove({
        email: req.query.email
    })
        .then(doc=>{
            res.send(doc)
        })
        .catch(err=>{
            res.status(500).json(doc)
        })
})

module.exports = router