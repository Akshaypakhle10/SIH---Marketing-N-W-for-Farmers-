const mongoose = require('mongoose');
const truckCompanySchema = require('../schema/truckcompScehma');
const truckScehma = require('../schema/truckSchema');


class truckCompany {
    constructor() {
        this.CompanyModel = mongoose.model('companie', truckCompanySchema);
        this.TruckModel = mongoose.model('truck', truckScehma);
    }



    save(details) {
        let truckCompanyModel = new this.CompanyModel(details);
        //console.log() //replace with object
        return truckCompanyModel
            .save()
            .then(response => { return response; })
            .catch(err => {
                throw err;
            });

    }

    findOne(email) {
        return this.CompanyModel.findOne({ emailId: email })
            .then(response => {
                if (response) {
                    console.log(response);
                    return response;
                } else {
                    throw new Error("No User Found");
                }
            })
            .catch(err => {
                throw err;
            });
    }


    getTrucks() {
        return this.TruckModel.aggregate([{ $match: { activated: true, status: 'Unassigned' } }, { $group: { _id: '$currentLoc', trucksid: { $push: { type: '$type', id: '$_id' } } } }]).then(response => {
            return response;
        }).catch(err => {
            throw err;
        })
    }

    findOneTruck(number) {
        return this.TruckModel.findOne({ trucknum: number })
            .then(response => {
                if (response) {
                    return response;
                } else {
                    throw new Error("No Truck Found");
                }
            })
            .catch(err => {
                throw err;
            });
    };

    updateTrips(id, trip) {
        return this.TruckModel.findByIdAndUpdate(id, { trip }).then(response => {
            return response;
        }).catch(err => {
            throw err;
        })
    }

    getCompanies() {
        return this.CompanyModel.find().then(response => {
            return response;
        }).catch(err => {
            throw err;
        })
    }

}




module.exports = truckCompany;