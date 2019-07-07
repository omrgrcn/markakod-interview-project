const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TravelerSchema = new Schema({
    travelerId: Schema.Types.ObjectId,
    name: String,
    lastLocation: [
        {
            lat: Number,
            lng: Number
        }
    ]
});

module.exports = mongoose.model('traveler', TravelerSchema);