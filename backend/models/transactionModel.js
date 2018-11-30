const mongoose = require('mongoose');
const orderScehma = require('../schema/orderSchema');
const transacSchema = require('../schema/transactionSchema');
const truckSchema = require('../schema/truckSchema');
const braintree = require('braintree');
const uniqid = require('uniqid');
const accountSchema = require('../schema/accounts');
const produceSchema = require('../schema/produce');


class transaction {

    constructor() {
        this.orderModel = mongoose.model('order', orderScehma);
        this.transactionModel = mongoose.model('transaction', transacSchema);
        this.truckModel = mongoose.model('truck', truckSchema);
        this.accountModel = mongoose.model('account', accountSchema);
        this.produceModel = mongoose.model('produce', produceSchema);
    }

    createOrder(details) {
        let otp = uniqid();
        details.merchant_otp = otp.substr(0, 5);
        details.farmer_otp = otp.substr(5, 5);

        let newOrder = new this.orderModel(details);


        return newOrder.save().then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }

    createTransaction(details) {
        let transaction = new this.transactionModel(details);
        return transaction.save().then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }


    updateOrder(details) {
        return this.orderModel.findByIdAndUpdate(details.id, { farmer_id: details.farmer, status: details.status, origin: details.torigin, destination: details.tdest })
            .then(response => {
                return response;
            }).catch(err => {
                throw err;
            })


    }


    completeOrder(id) {
        return this.orderModel.findByIdAndUpdate(id, { status: 'Complete' }).then(response => {
            return response;
        }).catch(err => {
            throw err;
        })
    }

    findTruck(details) {
        let type = this.getType(details.weight);
        let currentLoc = details.location;
        console.log(type, currentLoc)
        return this.truckModel.find({ type, currentLoc }).then(response => {
            if (response.length !== 0) {
                return response;
            } else {
                throw new Error('No trucks Found');
            }
        }).catch(err => {
            throw err;
        });
    }


    updateTruckStatus(details) {
        let id = details.id;
        let status = details.status;
        let order = details.order;

        return this.truckModel.findByIdAndUpdate(id, { $push: { trip: order }, status }).then(update => {
            return update;
        }).catch(err => {
            throw err;
        })

    }


    addMoney(amount) {
        return this.accountModel.update({ name: 'Admin' }, { $inc: { Amount: amount } }).then(account => {
            return account;
        }).catch(err => {
            throw err;
        })
    }

    getType(weight) {
        let type = null;
        if (weight < 2000) {
            type = "Small";
        } else if (weight <= 8000 && weight >= 2000) {
            type = "Medium";
        } else {
            type = "Large"
        }
        return type;
    }

    updateProduce(id, weight) {
        return this.produceModel.findByIdAndUpdate(id, { $inc: { quantity: -weight } }).then(produce => {
            return produce;
        }).catch(err => {
            throw err;
        })
    }
}

module.exports = transaction;

//sdw