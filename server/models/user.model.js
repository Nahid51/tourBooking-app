const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide your name."],
        trim: true,
        minLength: [3, "Name must be at least 3 character."],
        maxLength: [100, "Name is too large."]
    },
    email: {
        type: String,
        validate: [validator.isEmail, "Provide a valid email."],
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "Email address is required."]
    },
    country: {
        type: String,
        required: [true, "Please provide your country name"]
    },
    city: {
        type: String,
        required: [true, "Please provide your country name"]
    },
    img: {
        type: String,
        validate: [validator.isURL, "Please provide a valid url."]
    },
    password: {
        type: String,
        required: [true, "Email address is required."],
        validate: {
            validator: (value) =>
                validator.isStrongPassword(value, {
                    minLength: 8,
                    minLowercase: 2,
                    minUppercase: 1,
                    minNumbers: 2,
                    minSymbols: 1
                }),
            message: "Password is not strong enough."
        }
    },
    confirmPassword: {
        type: String,
        required: [true, "Please confirm your password."],
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: "Password didn't match."
        }
    },
    phone: {
        type: String,
        validate: [validator.isMobilePhone, "Please provide a valid contact number."]
    },
    status: {
        type: String,
        enum: ["active", "inactive", "blocked"],
        default: "active"
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    address: String,
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpire: Date,
}, {
    timestamps: true
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;