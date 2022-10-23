const userModel = require("../models/user.model.js");


exports.updateUser = async (req, res, next) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({
            message: "User information updated successfully!",
            result: updatedUser
        });

    } catch (error) {
        next(error)
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        const deleteUser = await userModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "User has been deleted!",
            result: deleteUser
        });

    } catch (error) {
        next(error)
    }
};

exports.getAllUser = async (req, res, next) => {
    try {
        const allUser = await userModel.find({});
        res.status(200).json({
            message: "All user founded successfully!",
            result: allUser
        });

    } catch (error) {
        next(error)
    }
};

exports.getSingleUser = async (req, res, next) => {
    try {
        const singleUser = await userModel.findById(req.params.id);
        res.status(200).json({
            message: "Single User founded successfully!",
            result: singleUser
        });

    } catch (error) {
        next(error)
    }
};