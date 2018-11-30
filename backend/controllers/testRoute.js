const express = require('express');
const router = express.Router();
const truckModel = require('../models/truckModel');
const productModel = require('../models/productModel');

module.exports.controllerFunction = function(app) {

    router.post('/array', (req, res) => {
        let temp = req.body.arr;
        console.log((temp.length));
        var i = 0;
        temp.forEach(element => {
            i++;
            console.log(i);

        });
        res.send(temp);
    });

    router.post('/getTrips', (req, res) => {
        let orders = req.body.orders;
        let trucks = new truckModel();
        let trips = trucks.getTrips(orders);
        if (trips) {
            res.status(200).json(trips);
        } else {
            res.status(500).json({
                message: "No Trips Assigned"
            })
        }
    });

    router.get('/getRate/:id', (req, res) => {
        let truck = new truckModel();
        truck.getTruckRate(req.params.id).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        });
    });

    router.get('/getOrders/:userId', (req, res) => {
        let product = new productModel();
        product.getReferences(req.params.userId).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            })
        })
    })


    app.use('/test', router);
}