const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model.js");
const { createError } = require("../utils/error.js");

exports.register = async (req, res, next) => {
    try {
        const oldUser = await userModel.findOne({ email: req.body.email });
        if (oldUser) {
            return res.status(400).json({ message: "User already exists!" });
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const hash2 = bcrypt.hashSync(req.body.confirmPassword, salt);

        const newUser = new userModel({
            ...req.body,
            password: hash,
            confirmPassword: hash2
        });

        const savedUser = await newUser.save();
        res.status(200).json({
            message: "New user registered successfully!",
            result: savedUser
        });

    } catch (error) {
        next(error)
    }
};

exports.login = async (req, res, next) => {
    try {

        const user = await userModel.findOne({ username: req.body.username });
        if (!user) {
            return next(createError(404, "User not found!"))
        };

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect) {
            return next(createError(400, "Worng password or username!"))
        };

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRET_TOKEN);

        const { password, isAdmin, ...otherDetails } = user._doc;
        res.cookie("access_token", token, { httpOnly: true })
            .status(200).json({
                message: "User login successfully!",
                result: { ...otherDetails }, isAdmin
            });

    } catch (error) {
        next(error)
    }
};