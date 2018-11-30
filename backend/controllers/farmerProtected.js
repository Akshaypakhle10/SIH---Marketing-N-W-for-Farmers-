//1.2 if user is not loggedIn we will show him all doubts 
const express = require('express');
const route = express.Router();
const fs = require('fs');
const userModel = require('../models/userModel');
const farmerModel = require('../models/farmerModel');

const mongoose = require('mongoose');
const protect = require('../middlewares/authProtected');
// A route defined now we may use as mini app
//This is what express offers




module.exports.controllerFunction = function(app) {

    route.post('/produce', (req, res) => {

        //handle errors here check if emailId or password is empty
        console.log(req.body)
        const details = {
            farmerId: mongoose.Types.ObjectId(req.session.user._id),
            crop: req.body.crop,
            type: req.body.type,
            quantity: req.body.quantity,
            farmerPrice: req.body.farmerPrice

        }
        console.log(details);
        const farmermodel = new farmerModel();
        farmermodel.save(details).then(response => {
            res.status(200).json({ response });
        }).catch(err => {
            res.status(500).send(err);

        });


    });




    route.delete('/delete/farmer', (req, res) => {
        let user = new userModel({});
        user.findOneAndDelete(req.session.user).then(deletedUser => {
                res.status(200).json({ deleted: true })
            })
            .catch(err => {
                res.status(204).json(err.message);
            })
    })

    route.put('/edit/farmer', (req, res) => {
        let user = new userModel();
        let updatedFarmerDetails = req.body;
        user.findOneAndEdit(req.session.user._id, updatedFarmerDetails).then(editedUser => {
                res.status(200).json({ edited: true })
            })
            .catch(err => {
                res.status(204).json(err.message);
            })
    });


    route.get('/myOrders', (req, res) => {
        let merchant = new userModel();
        merchant.getMerchantOrders(req.session.user._id).then(orders => {
            console.log(orders)
            res.status(200).json(orders);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        });
    });





    app.use('/farmerProtected', protect.functionToCheckIfUserIsFarmer, route);



}