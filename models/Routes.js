const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoutesSchema = new Schema({
    travelerId: Schema.Types.ObjectId,
    locations: [
        {
            lat: Number,
            lng: Number
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('routes', RoutesSchema);