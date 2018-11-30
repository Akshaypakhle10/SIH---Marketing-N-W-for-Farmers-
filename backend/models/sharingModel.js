const mongoose = require('mongoose');
const shareReqSchema = require('../schema/sharingReqSchema');
const shareGroupScehma = require('../schema/shareGroupSchema');
const truckmodel = require('../models/truckModel');
const orderSchema = require('../schema/orderSchema');
const uniqid = require('uniqid');




class SharingRequest {
    constructor() {
        this.SharingReqModel = mongoose.model('shareRequest', shareReqSchema);
        this.ShareGroupModel = mongoose.model('shareGroup', shareGroupScehma);
        this.orderModel = mongoose.model('order', orderSchema);

    }

    createShareReq(details) {
        let newRequest = new this.SharingReqModel(details);
        return newRequest.save().then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }

    getRequest(date) { //gets sharing reqs after the specified date
        return this.SharingReqModel.find({ createdon: { $gte: date } }).then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }

    getRequestById(id) { //gets sharing request by id
        return this.SharingReqModel.findById(id).then(response => {
            return response;
        }).catch(err => {
            throw err
        });
    }

    CreateShareGroups(assigned, model) {
        let length = Object.keys(assigned).length;
        console.log(length);
        let shareGroups = [];
        let truck = new truckmodel();
        return new Promise(function(resolve, reject) {
            Object.keys(assigned).forEach(truckid => {
                let truck_id = truckid;
                truck.getTruckRate(truck_id).then(rate => {
                    model.populateOrders(assigned[truckid], rate, model, truckid).then(orders => {
                        let newShareOrder = { truck_id, orders };
                        shareGroups.push(newShareOrder)
                    });
                }).catch(err => {
                    throw err;
                })

            })
            setTimeout(function() {
                resolve(shareGroups);
            }, 2500 * length);


        });
    }



    populateOrders(shareorderids, rate, model, truckid) {
        let Shareorders = [];
        let orders = [];

        return new Promise(function(resolve, reject) {
            let i = 0;
            shareorderids.forEach(sreqid => {
                let transport_costs = [];

                model.getRequestById(sreqid).then(shareReq => {
                        // console.log("Line 80 " + truckid);
                        let orderFromReq = {
                            farmer_id: shareReq.farmer_id,
                            merchant_id: shareReq.merchant_id,
                            transport_id: truckid,
                            crop_details: shareReq.crop_details,
                            farmer_amount: shareReq.farmer_amount,
                            status: 'WSP',
                            transport_amount: shareReq.transport_amount,
                            origin: shareReq.origin,
                            destination: shareReq.destination,
                            merchant_otp: null,
                            farmer_otp: null,
                            shareReqId: sreqid
                        }

                        model.createOrder(orderFromReq).then(newOrder => {
                            //console.log(newOrder);
                            orders.push(newOrder._id);
                            let shareOrder = {
                                shareReqid: sreqid,
                                farmer_id: shareReq.farmer_id,
                                merchant_id: shareReq.merchant_id,
                                orderid: newOrder._id, //newOrder._id,
                                status: "Unpaid"
                            }
                            Shareorders.push(shareOrder);
                            transport_costs.push(shareReq.distance * rate);
                            i += 1;
                            if (i === shareorderids.length) {
                                // console.log('Calculating Max Cost');
                                let maxCost = transport_costs.sort((a, b) => { return a - b; })[0];
                                console.log(orders);
                                let divided_cost = maxCost / shareorderids.length;
                                Shareorders.forEach(order => {
                                    order.transport_amount = divided_cost;
                                    order.total = divided_cost + order.crop_amount;
                                });

                                model.updateTransportAmount(orders, divided_cost).then(upOrders => {
                                    console.log(upOrders);
                                }).catch(err => {
                                    throw err;
                                })
                            }
                        }).catch(err => {
                            throw err;
                        })



                    }).catch(err => {
                        throw err;
                    })
                    // console.log(transport_costs);

            });
            if (orders) {
                resolve(Shareorders);
            } else {
                reject(Error("Orders Empty"));
            }
        });
    }



    saveShareGroups(groups) {

        return this.ShareGroupModel.insertMany(groups).then(response => {
            return response;
        }).catch(err => {
            throw err;
        })
    }

    createOrder(orderDet) {
        let otp = uniqid();
        orderDet.merchant_otp = otp.substr(0, 5);
        orderDet.farmer_otp = otp.substr(5, 5);
        //console.log(orderDet);
        let newOrder = new this.orderModel(orderDet);
        return newOrder.save().then(order => {
            console.log("Orders Saved");
            return order;
        }).catch(err => {
            throw err;
        })
    }

    updateTransportAmount(ids, amount) {
        return this.orderModel.update({ _id: { $in: ids } }, { $set: { transport_amount: amount } }).then(updatedOrders => {
            console.log(updatedOrders);
            return updatedOrders;
        }).catch(err => {
            throw err;
        });
    }
}

module.exports = SharingRequest;


//5abf0042ef37ac29dcb1678c
//5abf00a4ef37ac29dcb1678e
//5abf00c6ef37ac29dcb1678f