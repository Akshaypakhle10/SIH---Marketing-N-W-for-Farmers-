const mongoose = require('mongoose');
const produceSchema = require('../schema/produce');
const objectId = mongoose.Types.ObjectId;



class farmer {
    constructor() {
        this.produceModel = mongoose.model('produce', produceSchema);
    }

    save(obj) {
        let produce = new this.produceModel(obj);

        return produce
            .save()
            .then(response => { return response; })
            .catch(err => { throw err });
    }

    find(obj) {
        console.log(obj);
        const cname = obj.cropname;
        const ctype = obj.type;
        const cquantity = Number(obj.quantity);


        return this.produceModel.find({ crop: cname, type: ctype, quantity: { $gt: cquantity } }).then(response => {

            if (response.length != 0) {
                return response;
            } else {
                throw new Error("No Produce Found");
            }
        }).catch(err => {
            throw err;
        });
    }

    findById(id) {
        return this.produceModel.findById(id).then(produce => {
            return produce;
        }).catch(err => {
            throw err;
        })
    }
}
module.exports = farmer;