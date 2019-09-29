var mongoose = require('mongoose');
var config = require('../config/database');

// Location Schema
var LocationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    olc: {
        type: String,
        required: true
    }
});

var Location = module.exports = mongoose.model('Location', LocationSchema);

module.exports.getLocationById = function(id, callback) {
    Location.findById(id, callback)
}

module.exports.getLocationByName = function(name, callback) {
    const query = {name: name}
    Location.findOne(query, callback);
}

module.exports.getLocationByOlc = function(olc, callback) {
    const query = {olc: olc}
    Location.findOne(query, callback);
}

module.exports.addLocation = function(newLocation, callback){
    // Encrypt Password
    newLocation.save(callback);
}