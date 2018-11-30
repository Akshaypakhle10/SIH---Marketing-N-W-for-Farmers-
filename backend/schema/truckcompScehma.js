const mongoose = require('mongoose');



const truckSchema = mongoose.Schema({
    companyName: { type: String },
    emailId: { type: String, unique: true },
    password: { type: String },
    ownername: { type: String },
    phonenumber: { type: Number },
    city: { type: String },
    district: String,
    state: String
});

module.exports = truckSchema;