const mongoose = require('mongoose');


const accountSchema = mongoose.Schema({
    name: String,
    Amount: Number
})

module.exports = accountSchema;