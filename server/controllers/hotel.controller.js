const hotelModel = require("../models/hotel.model.js")

exports.createHotel = async (req, res, next) => {
    try {
        const newHotel = new hotelModel(req.body);
        const savedHotel = await newHotel.save();
        res.status(200).json({
            message: "New hotel information saved successfully!",
            result: savedHotel
        });

    } catch (error) {
        next(error)
    }
};

exports.updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await hotelModel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({
            message: "Hotel information updated successfully!",
            result: updatedHotel
        });

    } catch (error) {
        next(error)
    }
};

exports.deleteHotel = async (req, res, next) => {
    try {
        const deleteHotel = await hotelModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Hotel has been deleted!",
            result: deleteHotel
        });

    } catch (error) {
        next(error)
    }
};

exports.getAllHotel = async (req, res, next) => {
    try {
        const allHotel = await hotelModel.find({});
        res.status(200).json({
            message: "All hotel founded successfully!",
            result: allHotel
        });

    } catch (error) {
        next(error)
    }
};

exports.getSingleHotel = async (req, res, next) => {
    try {
        const singleHotel = await hotelModel.findById(req.params.id);
        res.status(200).json({
            message: "Single hotel founded successfully!",
            result: singleHotel
        });

    } catch (error) {
        next(error)
    }
};