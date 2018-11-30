const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const userModel = require('../models/userModel');

module.exports.controllerFunction = function(app) {

    router.get('/getUser/:id', (req, res) => {
        let id = req.params.id;
        let user = new userModel();
        user.findbyId(id).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        });

    });





    app.use('/general', router);
}