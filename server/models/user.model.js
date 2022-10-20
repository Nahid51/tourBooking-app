const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "Please provide your name."],
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
        require: [true, "Email address is require."]
    },
    country: {
        type: String,
        require: [true, "Please provide your country name"]
    },
    city: {
        type: String,
        require: [true, "Please provide your country name"]
    },
    img: {
        type: String,
        validate: [validator.isURL, "Please provide a valid url."]
    },
    password: {
        type: String,
        require: [true, "Email address is require."],
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
        require: [true, "Please confirm your password."],
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
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    address: String,
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpire: Date,
}, {
    timestamps: true,
    _id: true
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;