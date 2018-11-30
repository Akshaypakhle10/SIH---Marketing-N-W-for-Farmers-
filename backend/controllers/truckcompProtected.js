const express = require('express');
const router = express.Router();
const truckModel = require('../models/truckModel');
const protect = require('../middlewares/authProtected');


module.exports.controllerFunction = function(app) {


    router.post('/add', (req, res) => {

        var details = {
            comp_id: req.session.truckadmin._id,
            trucknum: req.body.number,
            password: req.body.pass,
            type: req.body.type,
            activated: req.body.activated,
            currentLoc: req.session.truckadmin.district
        }

        var newTruck = new truckModel();
        newTruck.save(details).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json(err);
        });

    });

    router.delete('/delete', (req, res) => {
        id = req.body.id;
        var truck = new truckModel();
        truck.delete(id).then(response => {
                res.status(200).json({
                    message: "Truck Deleted",

                })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                });
            });

    });

    router.patch('/toggleStatus', (req, res) => {
        id = req.body.id;
        status = req.body.status;
        var truck = new truckModel();
        truck.toggleStatus(id, status).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            })
        });
    });


    app.use('/truckProtected', protect.checkifTruckCompany, router);
}