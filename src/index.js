const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser')
const personRoute = require('./routes/person');
const path = require('path');
const customerRoute = require('./routes/customer')
// Reference the directory where the static files/content are located
// This is relative to the root
// Middle ware functions takes in 3 parameters (req,res,next)
// Middleware are functions when request call had been made.
// You can for example adjust somethings before passing it on to the routes
// The moste usefull of the middleware are to catch error pages or orhter errors 
app
    .use(bodyParser.json())
    .use((req,res,next)=>{
        console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
        next() // We have to use next to call the next middleware in this stack
        // Or send a res.send('')
        // res.send('')
    }) // This is a middleware
    .use(personRoute)
    .use(customerRoute)
    .use(express.static('public'))
    .use((req,res,next)=>{
        res.status(404).send('Wrong Route')
    })
    // ALl the other erros will be catched by the last middleware function
    .use((err,req,res,next)=>{
        console.error(err.stack)
        res.sendFile(path.join(__dirname, '../public/500.html'))
    })

app
    .listen(PORT, () => {console.info(`Server is running on port ${PORT}`)});

