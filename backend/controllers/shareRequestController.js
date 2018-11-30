const express = require('express');
const router = express.Router();
const sharingModel = require('../models/sharingModel');
const transactionModel = require('../models/sharingModel');


exports.controllerFunction = function(app) {

    router.post('/create', (req, res) => {
        let data = req.body;
        let shareReq = {
            farmer_id: req.body.farmerinfo.id,
            merchant_id: req.session.user._id,
            transport_id: null,
            crop_details: data.productinfo,
            farmer_amount: data.costInfo.crop,
            transport_amount: null,
            distance: data.transportInfo.distance,
            origin_district: data.farmerinfo.district,
            destination_district: req.session.user.district,
            origin: data.transportInfo.origin,
            destination: data.transportInfo.destination,
        }
        let newReq = new sharingModel();

        newReq.createShareReq(shareReq).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        });
    });


    router.post('/getRequests', (req, res) => {
        console.log(req.body);
        let date = new Date(req.body.date);
        date.setHours(0, 0, 0, 0);
        console.log(date);
        let request = new sharingModel();

        request.getRequest(date).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                message: err
            });
        });
    });

    router.post('/postGroups', (req, res) => {
        let assigned = req.body.Assigned;
        let shareModel = new sharingModel();

        shareModel.CreateShareGroups(assigned, shareModel).then(groups => {
            shareModel.saveShareGroups(groups).then(response => {
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
        });

    });






    app.use('/shareRequest', router);
}