const mongoose = require('mongoose');
const truckSchema = require('../schema/truckSchema');
const orderSchema = require('../schema/orderSchema');


class trucks {

    constructor() {
        this.truckModel = mongoose.model("truck", truckSchema);
        this.orderModel = mongoose.model("order", orderSchema);
    }

    save(details) {
        let truck = new this.truckModel(details);

        return truck.save().then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }




    delete(id) {

        return this.truckModel.findByIdAndRemove(id).then(response => {
            if (response !== null) {
                return response;
            } else {
                throw new Error("No Such Truck Found")
            }
        }).catch(err => {
            throw err;
        });
    }


    toggleStatus(id, status) {
        return this.truckModel.findByIdAndUpdate(id, { activated: status }).then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }

    updateLoc(id, loc) {
        return this.truckModel.findByIdAndUpdate(id, { currentLoc: loc }).then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }


    clearTrips(id) {
        let trip = [];
        return this.truckModel.findByIdAndUpdate(id, { trip }).then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }

    getTrips(order) {

        return this.orderModel.findById(order).then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }

    getTruckRate(id) {
        return this.truckModel.findById(id).then(truckinfo => {
            return this.CalcRate(truckinfo.type);
        }).catch(err => {
            throw err;
        })


    }

    CalcRate(type) {
        switch (type) {
            case 'Small':
                return 30;
                break;
            case 'Medium':
                return 35;
                break;
            case 'Large':
                return 45;
                break;
        }
    }

    removeTrip(tripId) {

        return this.truckModel.findOneAndUpdate({ trip: tripId }, { $pull: { trip: tripId } }).then(newTruck => {
            return newTruck;
        }).catch(err => {
            throw err;
        })
    }
}
module.exports = trucks;





//5abefbad81df8a13cc0af683
//5abefc3f6426022ad8d1fb33
//5abefd036426022ad8d1fb34
//  5abefa0cda0f6d32e890fc35