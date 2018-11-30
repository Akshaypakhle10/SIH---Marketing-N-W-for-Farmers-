//1.2 if user is not loggedIn we will show him all doubts 
var express = require('express');
var route = express.Router();
const fs = require('fs');
const userModel = require('../models/userModel');
const mongoose = require('mongoose');
const truckCompanyModel = require('../models/truckcompModel');

// A route defined now we may use as mini app
//This is what express offers



module.exports.controllerFunction = function(app) {


    route.get('/', (req, res) => {
        res.send("hello")
            //use this coding guide lines
    });


    route.post('/signup/', (req, res, next) => {

        //check here if any req.body property is empty or not check for each credentials
        //neel bhave

        var userDetails = {
            name: req.body.name,
            password: req.body.password,
            aadhar: req.body.aadhar,
            mobile: req.body.mobile,
            lang: req.body.lang,
            addr: req.body.addr,
            district: req.body.district,
            state: req.body.state,
            pincode: req.body.pincode,
            isFarmer: req.body.isFarmer
        }
        const newuser = new userModel();
        newuser.save(userDetails).then(user => {
            console.log(user)
            res.status(200).json({
                message: "Farmer Registered",
                user
            });
        });

    });



    route.get('/session', (req, res) => {
        res.status(200).json(req.session);
    });

    route.post('/signin', (req, res) => {
        //handle empty fields error over here
        console.log(req.body)
        var details = {

            mobile: req.body.mobile,
            isFarmer: req.body.isFarmer
        };

        if (req.body.password != undefined || null) { //error handling

            let user = new userModel({});
            user.findOne(details).then((user) => {
                    if (!user.isBlocked) {
                        console.log("user is ", user)
                        if (user.password == req.body.password) {
                            req.session.user = user; // session established

                            res.status(200).json({ user });
                        } else {

                            res.status(403).json({ message: "fail" });
                        }
                    } else {
                        res.status(403).json({
                            message: "User is Blocked"
                        })
                    }
                })
                .catch(err => {
                    console.log("not found")
                    res.status(403).json(err.message)
                })
        } else {
            res.send('please fill all credentails');

        }

    });










    app.use('/', route);



}