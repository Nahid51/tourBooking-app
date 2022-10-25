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

    const { min, max, ...others } = req.query;

    try {
        const allHotel = await hotelModel.find({
            ...others,
            cheapestPrice: { $gt: min | 1, $lt: max || 999 },
        }).limit(req.query.limit);

        res.status(200).json({
            message: "Hotel founded successfully!",
            result: allHotel
        });

    } catch (error) {
        next(error)
    }
};

exports.countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
        const list = await Promise.all(
            cities.map((city) => {
                return hotelModel.countDocuments({ city: city });
            })
        );
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }

    // query system
    // hotel/countByCity?cities=berlin,madrid,london
};

exports.countByType = async (req, res, next) => {
    try {
        const hotelCount = await hotelModel.countDocuments({ type: "hotel" });
        const apartmentCount = await hotelModel.countDocuments({ type: "apartment" });
        const resortCount = await hotelModel.countDocuments({ type: "resort" });
        const villaCount = await hotelModel.countDocuments({ type: "villa" });
        const cabinCount = await hotelModel.countDocuments({ type: "cabin" });

        res.status(200).json([
            { type: "hotel", count: hotelCount },
            { type: "apartments", count: apartmentCount },
            { type: "resorts", count: resortCount },
            { type: "villas", count: villaCount },
            { type: "cabins", count: cabinCount },
        ]);
    } catch (err) {
        next(err);
    }
};

exports.getSingleHotel = async (req, res, next) => {
    try {
        const singleHotel = await hotelModel.findById(req.params.id);
        res.status(200).json(singleHotel);

    } catch (error) {
        next(error)
    }
};