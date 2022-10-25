const hotelModel = require("../models/hotel.model.js");
const roomModel = require("../models/room.model.js");


exports.createRoom = async (req, res, next) => {

    try {
        const hotelInfo = req.params.hotelId;
        const newRoom = new roomModel(req.body);
        const savedRoom = await newRoom.save();
        try {
            await hotelModel.findByIdAndUpdate(hotelInfo, {
                $push: {
                    rooms: savedRoom._id
                }
            })
        } catch (error) {
            next(error)
        };
        res.status(200).json({
            message: "New hotel information added successfully!",
            result: savedRoom
        });

    } catch (error) {
        next(error)
    };
};

exports.updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await roomModel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({
            message: "Room information updated successfully!",
            result: updatedRoom
        });

    } catch (error) {
        next(error)
    }
};

exports.updateRoomAvailability = async (req, res, next) => {
    try {
        const availableRoom = await roomModel.updateOne({ "roomNumbers._id": req.params.id }, {
            $push: {
                "roomNumbers.$.unavailableDates": req.body.dates
            }
        });
        res.status(200).json({
            message: "Room information updated successfully!",
            result: availableRoom
        });

    } catch (error) {
        next(error)
    }
};

exports.deleteRoom = async (req, res, next) => {
    try {
        const hotelInfo = req.params.hotelId;

        const deleteRoom = await roomModel.findByIdAndDelete(req.params.id);
        try {
            await hotelModel.findByIdAndUpdate(hotelInfo, {
                $pull: {
                    rooms: req.params.id
                }
            })
        } catch (error) {
            next(error)
        };
        res.status(200).json({
            message: "Room has been deleted!",
            result: deleteRoom
        });

    } catch (error) {
        next(error)
    }
};

exports.getAllRoom = async (req, res, next) => {
    try {
        const allRoom = await roomModel.find({});
        res.status(200).json({
            message: "All Room founded successfully!",
            result: allRoom
        });

    } catch (error) {
        next(error)
    }
};

exports.getSingleRoom = async (req, res, next) => {
    try {
        const singleRoom = await roomModel.findById(req.params.id);
        res.status(200).json({
            message: "Single Room founded successfully!",
            result: singleRoom
        });

    } catch (error) {
        next(error)
    }
};