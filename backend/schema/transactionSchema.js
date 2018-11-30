const mongoose = require('mongoose');

const schema = mongoose.Schema({
    transaction_id: String,
    order_id: mongoose.Schema.Types.ObjectId,
    user_id: mongoose.Schema.Types.ObjectId,
    amount: Number
});

module.exports = schema;