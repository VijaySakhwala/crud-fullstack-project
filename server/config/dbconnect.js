const mongoose = require('mongoose');
require('dotenv').config()

const dbconnect = () =>{
    return mongoose.connect(process.env.dbconnect)

}

module.exports = dbconnect