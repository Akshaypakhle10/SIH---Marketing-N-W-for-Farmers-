const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const truckCompayModel = require('../models/truckcompModel');



exports.controllerFunction = function(app) {

    router.get('/getMerchants', (req, res) => {
        let user = new userModel();
        user.getMerchants().then(merchants => {
            res.status(200).json(merchants);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        })
    });


    router.get('/getFarmers', (req, res) => {
        let user = new userModel();
        user.getFarmers().then(merchants => {
            res.status(200).json(merchants);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        })
    });

    router.put('/blockUser/:userId', (req, res) => {
        let id = req.params.userId;
        let user = new userModel();
        user.findOneAndEdit(id, { isBlocked: true }).then(blocked => {
            res.status(200).json(blocked);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            })
        })
    });

    router.get('/getCompanies', (req, res) => {
        let company = new truckCompayModel();
        company.getCompanies().then(companies => {
            res.status(200).json(companies);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            })
        })
    });

    app.use('/superAdmin', router);

}