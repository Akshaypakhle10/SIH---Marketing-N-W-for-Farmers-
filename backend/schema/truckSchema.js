const mongoose = require('mongoose');


const truckSchema = mongoose.Schema({
    comp_id: mongoose.Schema.Types.ObjectId,
    trucknum: { type: String, unique: true },
    password: String,
    type: String,
    activated: { type: Boolean, default: true },
    status: { type: String, default: 'Unassigned' },
    currentLoc: { type: String },
    trip: {
        type: Array,
        default: null
    }
});


module.exports = truckSchema;







//return this.TruckModel.aggregate([{ $match: { activated: true } }, { $group: { _id: '$currentLoc', trucksid: { $push: { Location: '$type', id: '$_id' } } } }])
//this.TruckModel.aggregate([{ $match: { activated: true } }, { $group: { _id: { location: '$currentLoc', type: '$type', id: '$_id' } } }, { $group: { _id: '$_id.location', types: { $push: { type: '$_id.type', id: '$_id.id' } } } }])