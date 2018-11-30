//1.2 if user is not loggedIn we will show him all doubts 
const express = require('express');
const route = express.Router();
const fs = require('fs');
const userModel = require('../models/userModel');
const mongoose = require('mongoose');
const protect = require('../middlewares/authProtected')
    // A route defined now we may use as mini app
    //This is what express offers



module.exports.controllerFunction = function(app) {

    route.get('/get/all/farmers', (req, res) => {
        let user = new userModel({});
        user.findAll('farmers')
            .then(farmerList => {
                res.status(200).json(farmerList)
            })
            .catch(err => {
                res.status(204).json(err.message)
            })

    })

    route.get('/get/all/buyers', (req, res) => {
        let user = new userModel({});
        user.findAll('buyers')
            .then(buyersList => {
                res.status(200).json(buyersList)
            })
            .catch(err => {
                res.status(204).json(err.message)
            })

    })

    // route.get('/get/all/truckCompanies', (req, res) => {
    //     //to complete later
    // })

    route.put('/put/block/:userId', (req, res) => {
        let userId = req.params;
        let user = new userModel({});
        user.findOneAndEdit(userId, { isBlocked: false }).then((response) => {
                res.json(response);
            })
            .catch(err => {
                res.status(500).json(err.message);
            })

    })
    route.put('/put/unblock/:userId', (req, res) => {
        let userId = req.params;
        let user = new userModel({});
        user.findOneAndEdit(userId, { isBlocked: true }).then((response) => {
                res.json(response);
            })
            .catch(err => {
                res.status(500).json(err.message);
            })

    })





    app.use('/admin', route); //middleware has to be added



}