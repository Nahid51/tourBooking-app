const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: { type: String, require: true },
    type: { type: String, require: true },
    city: { type: String, require: true },
    address: { type: String, require: true },
    distance: { type: String, require: true },
    photos: { type: [String] },
    title: { type: String, require: true },
    desc: { type: String, require: true },
    cheapestPrice: { type: Number, require: true },
    featured: { type: Boolean, default: false },
    rating: { type: Number, min: 0, max: 5 },
    rooms: { type: [String] },
});


const hotelModel = mongoose.model("Hotel", hotelSchema);

module.exports = hotelModel;