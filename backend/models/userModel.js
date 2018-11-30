const mongoose = require('mongoose');
const userschema = require('../schema/userSchema');
const objectId = mongoose.Types.ObjectId;
const orderScehma = require('../schema/orderSchema');

class UserModel {
    constructor() {
        this.usermodel = mongoose.model('user', userschema);
        this.orderModel = mongoose.model('order', orderScehma);
    }


    save(obj) {
        let user = new this.usermodel(obj);
        //console.log() //replace with object
        return user
            .save()
            .then(response => { return response; })
            .catch(err => {
                throw err;
            });
    }


    findOne(obj) {
        obj.isFarmer = Boolean(obj.isFarmer)
        obj.mobile = Number(obj.mobile)

        let isFarmer = obj.isFarmer;
        let mobile = obj.mobile;

        console.log({ isFarmer, mobile })


        return this.usermodel.findOne({ $and: [{ mobile }, { isFarmer }] }).then(user => {
            console.log(user)
            if (user) {
                return user;
            }

            if (user == null) {
                throw new Error("no such user found with " + mobile + " register the user first")
            }
        }).catch(err => {
            throw err;
        });
    }
    findOneAndDelete(user) {
        return this.usermodel
            .deleteOne({ _id: objectId(user._id) })
            .then(deletedUser => {

                return deletedUser
            })
            .catch(err => {
                throw err;
            })
    }
    findOneAndEdit(userId, updatedData) {
        return this.usermodel
            .findOneAndUpdate({ _id: objectId(userId) }, updatedData)
            .then(updatedData => {
                return updatedData
            })
            .catch(err => {
                throw err;
            })
    }
    findAll(whatToFind) {
        if (whatToFind == 'farmers') {
            return this.usermodel.find({ isFarmer: true })
                .then(farmerList => {
                    return farmerList;
                })
                .catch(err => {
                    throw err;
                })
        } else {
            return this.usermodel.find({ isFarmer: false })
                .then(buyersList => {
                    return buyersList;
                })
                .catch(err => {
                    throw err;
                })
        }
    }

    findbyId(id) {

        return this.usermodel.findById(id).then(response => {
            if (response) {
                return response;
            } else {
                throw new Error("No User Found");
            }
        }).catch(err => {
            throw err;
        });
    }

    getMerchantOrders(id) {
        return this.orderModel.find({ merchant_id: id }).then(orders => {
            return orders;
        }).catch(err => {
            throw err;
        });
    }

    getFarmerOrders(id) {
        return this.orderModel.find({ farmer_id: id }).then(orders => {
            return orders;
        }).catch(err => {
            throw err;
        });
    }

    getMerchants() {
        return this.usermodel.find({ isFarmer: false }).then(merchants => {
            return merchants;
        }).catch(err => {
            throw err;
        })
    }

    getFarmers() {
        return this.usermodel.find({ isFarmer: true }).then(merchants => {
            return merchants;
        }).catch(err => {
            throw err;
        })
    }
}

module.exports = UserModel;