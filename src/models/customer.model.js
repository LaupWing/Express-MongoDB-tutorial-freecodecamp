const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
// MLAB url link mongodb://<dbuser>:<dbpassword>@ds131296.mlab.com:31296/tutorial

const server = 'ds131296.mlab.com:31296'
const database = 'tutorial'
const user = 'Tester'
const password = 'test123'

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

// Mongoose has 2 main components 
// The first is schema:
// The second is polymodel: which is a higherorder function that wraps around the schema

let CustomerSchema = new mongoose.Schema({
    name: String,
    email:{
        // Mongoose has a data validation to preven duplicates or invalid types of data
        // Because mongodb doesnt check for invalid data's
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)