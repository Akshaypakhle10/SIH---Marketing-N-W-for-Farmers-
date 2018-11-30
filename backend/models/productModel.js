const mongoose = require('mongoose');
const produceSchema = require('../schema/produce');
const userSchema = require('../schema/userSchema');
const userModel = require('./userModel');
const orderSchema = require('../schema/orderSchema');



class produceModel {

    constructor() {
        this.produceModel = mongoose.model('produce', produceSchema);
        this.userModel = mongoose.model('user', userSchema);
        this.orderModel = mongoose.model('order', orderSchema);
    }

    viewProduct(details) {
        //  console.log(details);
        return this.produceModel.findById(details.produce_id).then(product => {
            if (product) {
                return this.getFarmerinfo(product.farmerId).then(info => {
                    return this.getReferences(product.farmerId).then(references => {

                        var farmerinfo = {
                            id: info._id,
                            name: info.name,
                            mobile: info.mobile,
                            address: info.addr + "," + info.district + "," + info.state,
                            district: info.district
                        }

                        var productinfo = {
                            id: product._id,
                            name: product.crop,
                            type: product.type,
                            quantity: details.quantity
                        }

                        var costInfo = {
                            transport: null,
                            crop: details.quantity * 10,
                            total: null
                        }

                        var transportInfo = {
                            destination: details.buyaddress,
                            origin: farmerinfo.address,
                            distance: null
                        }

                        return { farmerinfo, productinfo, costInfo, transportInfo, references };
                    })
                }).catch(err => {
                    throw err;
                });



            } else {
                throw new Error("No Product Found");
            }
        }).catch(err => {
            throw err
        });

    }

    getFarmerinfo(id) {

        const user = new userModel();
        console.log(id)
        return user.findbyId(id).then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }

    findById(id) {
        return this.produceModel.findById(id).then(produce => {
            return produce;
        }).catch(err => {
            return err;
        })
    }

    findAll() {
        return this.produceModel.find({}).then(produce => {
            return produce;
        }).catch(err => {
            throw err;
        })
    }

    getReferences(farmer_id) {
        return this.orderModel.find({ farmer_id }).then(response => {
            let buyers = [];
            response.forEach(order => {
                //console.log(typeof(order.merchant_id.toString()));
                if (buyers.length > 0 && !(buyers.indexOf(String(order.merchant_id.toString())) > -1)) {
                    buyers.push(order.merchant_id);
                } else {
                    buyers.push(order.merchant_id);
                }
            })
            return buyers;
        }).catch(err => {
            throw err;
        })
    }


}

module.exports = produceModel;