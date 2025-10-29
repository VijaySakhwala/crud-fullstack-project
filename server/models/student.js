const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const demo = new Schema({
  name: ({
    type: String,
    required: true
  }),
  email: ({
    type: String,
    unique: true
  }),
  password: ({
    type: String,
    required: true
  })
})

const MyModel = mongoose.model('registers', demo);

module.exports = MyModel