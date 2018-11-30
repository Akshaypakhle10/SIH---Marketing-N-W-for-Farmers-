const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const truckCompanyModel = require('../models/truckcompModel');
const truckModel = require('../models/truckModel');
const orderModel = require('../models/transactionModel');
const transactionModel = require('../models/transactionModel');


module.exports.controllerFunction = function(app) {


    router.get('/getTrucks', (req, res) => {
        const trucks = new truckCompanyModel();

        trucks.getTrucks().then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        });

    });

    router.post('/truckLogin', (req, res) => {

        var number = req.body.trucknum;
        var pass = req.body.password;

        const truck = new truckCompanyModel();
        truck.findOneTruck(number).then(response => {
            if (pass === response.password) {
                res.status(200).json({ message: true });
            } else {
                res.status(200).json({ message: false });
            }
        }).catch(err => {
            res.status(500).json(err.message);
        });

    });

    router.patch('/updateLoc', (req, res) => {
        id = req.body.id;
        loc = req.body.loc;

        var truck = new truckModel();
        truck.updateLoc(id, loc).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            })
        });
    });

    router.patch('/cleartrip', (req, res) => {
        let truck = new truckModel();

        let id = req.body.id;
        truck.clearTrips(id).then(response => {
            res.send(response);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        })
    });

    router.get('/getTrips/:id', (req, res) => {
        let order = req.params.id;
        let trucks = new truckModel();
        trucks.getTrips(order).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        });
    });


    router.post('/completeTrip/:id', (req, res) => {
        let tripId = req.params.id;
        let transModel = new transactionModel();
        let truck = new truckModel();
        truck.removeTrip(tripId).then(response => {
            // res.status(200).json(response);
            transModel.completeOrder(tripId).then(response => {
                res.status(200).json(response);
            }).catch(err => {
                res.status(500).json({
                    message: err.message
                });
            })

        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        })
    });



    app.use('/truck', router);

}