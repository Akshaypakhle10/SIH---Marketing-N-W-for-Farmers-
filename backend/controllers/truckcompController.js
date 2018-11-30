const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const truckCompanyModel = require('../models/truckcompModel');
const truckModel = require('../models/truckModel');


module.exports.controllerFunction = function(app) {

    route.post('/signup', (req, res) => {
        console.log(req.body)

        var details = {
            companyName: req.body.cname,
            emailId: req.body.email,
            password: req.body.pass,
            ownername: req.body.oname,
            phnumer: req.body.num,
            city: req.body.city,
            district: req.body.dist,
            state: req.body.state
        }

        let newCompany = new truckCompanyModel();
        newCompany.save(details).then(response => {
            console.log(response)
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json(err);
        });


    });

    route.post('/signin', (req, res) => {
        email = req.body.mail;
        password = req.body.pass;

        const company = new truckCompanyModel();

        company.findOne(email).then(response => {

            if (password === response.password) {
                req.session.truckadmin = response;
                res.status(200).json({ message: true });
            } else {
                res.status(403).json({ message: false });
            }
        }).catch(err => {
            res.status(403).json(err.message);
        });

    });

    route.get('/getTrucks', (req, res) => {
        const trucks = new truckCompanyModel();

        trucks.getTrucks().then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        });

    });

    route.post('/truckLogin', (req, res) => {

        var number = req.body.trucknum;
        var pass = req.body.password;

        const truck = new truckCompanyModel();
        truck.findOneTruck(number).then(truckinfo => {
            if (pass === truckinfo.password) {
                let truckLogin = {
                    message: true,
                    activated: truckinfo.activated,
                    status: truckinfo.status,
                    trip: truckinfo.trip,
                    _id: truckinfo._id,
                    comp_id: truckinfo.comp_id,
                    trucknum: truckinfo.trucknum,
                    password: truckinfo.password,
                    type: truckinfo.type,
                    currentLoc: truckinfo.currentLoc
                }
                res.session.truck = truckinfo;
                res.status(200).json(truckLogin);
            } else {
                res.status(403).json({ message: false });
            }
        }).catch(err => {
            res.status(500).json(err.message);
        });

    });


    route.post('/editTruck', (req, res) => {
        let trips = req.body.trips;
        let id = req.body.id;
        let truck = new truckCompanyModel();
        truck.updateTrips(id, trips).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        })
    });





    app.use('/truckCompany', route);

}