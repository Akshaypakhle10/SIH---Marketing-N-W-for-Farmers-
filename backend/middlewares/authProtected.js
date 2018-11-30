exports.functionToCheckIfUserIsFarmer = (req, res, next) => {
    console.log(req.session)
    if (req.session.user != undefined && req.session.user.isFarmer && !req.session.user.isBlocked) {
        next();
    } else {
        res.status(403).send('not allowed');
    }
}

exports.functionToCheckIfUserIsBuyer = (req, res, next) => {
    if (req.session.user != undefined && !req.session.user.isFarmer && !req.session.user.isBlocked)
        next();
    else
        res.status(403).send('not allowed');
}



exports.checkifTruckCompany = (req, res, next) => {
    if (req.session.truckadmin != undefined)
        next();
    else
        res.status(403).send('not allowed');
}
