// Load MongoDB driver
var mongoose = require('mongoose');

// Define our location schema
var LocationSchema = new mongoose.Schema({
    longitude: Number,
    latitude: Number,
    userId: String,
    message: String
});

// We bind the Location model to the LocationSchema
module.exports = mongoose.model('Location', LocationSchema);
