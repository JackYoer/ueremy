var express = require('express');
var router = express.Router();
var Location = require('../models/location');

//Add
router.post('/add', (req, res, next) => {
    let newLocation = new Location({
        name: req.body.name,
        olc: req.body.olc,
    });

    Location.addLocation(newLocation, (err, location) => {
        if(err) {
            res.json({success: false, msg:'Failed to add location'});
        } else {
            res.json({success: true, msg:'Location added'});
        }
    });
});

module.exports = router;