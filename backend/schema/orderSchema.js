const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    merchant_id: mongoose.Schema.Types.ObjectId,
    farmer_id: { type: mongoose.Schema.Types.ObjectId, default: null },
    transport_id: { type: mongoose.Schema.Types.ObjectId, default: null },
    crop_details: Object,
    farmer_amount: Number,
    transport_amount: Number,
    status: { type: String, default: "Processing" },
    merchant_otp: String,
    farmer_otp: String,
    origin: { type: String, default: null },
    destination: { type: String, default: null },
    shareReqId: mongoose.Schema.Types.ObjectId,
    createdon: { type: mongoose.Schema.Types.Date, default: new Date() }
});

module.exports = orderSchema;

// createdon: 2018-03-26T18:30:00.000Z,
//   _id: 5aba179a326b671fb43ac749,
//   farmer_id: 5aac1483aaf3a919a4de8251,
//   merchant_id: 5aac14a8aaf3a919a4de8252,
//   transport_id: null,
//   crop_details: { name: 'Rice', type: 'Basmati', quantity: 200 },
//   farmer_amount: 2000,
//   transport_amount: null,
//   origin: 'Thane',
//   destination: 'Thane',