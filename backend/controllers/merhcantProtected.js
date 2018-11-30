const express = require('express');
const router = express.Router();
const authProtected = require('../middlewares/authProtected');
const productModel = require('../models/productModel');
const maps = require('google-distance');
const farmerModel = require('../models/farmerModel');
const userModel = require('../models/userModel');
maps.apiKey = 'AIzaSyCfB-yxrLRQZgBnhCjwFmzp0mvY6CxtvSU';
module.exports.controllerFunction = function(app) {

    router.post('/product/:id', (req, res) => {
        let buyerdetails = req.session.user;
        var details = {
            quantity: req.body.quantity,
            buyaddress: buyerdetails.addr + "," + buyerdetails.district + "," + buyerdetails.state,
            produce_id: req.params.id
        }

        let product = new productModel();

        product.viewProduct(details).then(response => {

            console.log(response.transportInfo)

            maps.get({
                origin: ('Shivam Society,Sector 17,Airoli,Maharashtra'),
                destination: (response.transportInfo.destination),
                mode: 'driving'
            }, (err, data) => {
                if (data) {
                    distance = data.distanceValue / 1000;
                    distanceCost = distance * 25;
                    response.costInfo.transport = distanceCost;
                    response.costInfo.total = distanceCost + response.costInfo.crop;
                    response.transportInfo.distance = distance;
                    res.status(200).json(response);
                } else if (err) {
                    console.log(err)
                    res.status(500).json({
                        message: "Location Error"
                    })
                }
            });

        }).catch(err => {
            console.log(err.message);
            res.status(500).json({
                message: err.message
            })
        });

    });





    router.get('/search', (req, res) => {
        const farmermodel = new farmerModel();

        details = {
            cropname: req.query.name,
            type: req.query.type,
            quantity: req.query.quant
        }
        farmermodel.find(details).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        });

    });

    router.get('/getProducts', (req, res) => {
        let products = new productModel();
        products.findAll().then(products => {
            res.status(200).json(products);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        })
    });

    router.get('/myOrders', (req, res) => {
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

    app.use('/merchantProtected', router);
}

// authProtected.functionToCheckIfUserIsBuyer,