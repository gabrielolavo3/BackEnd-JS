const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: [true, 'Email must be unique'],
        minLenght: [5, 'Email must have 5 characters'],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true,
        selected: false,    
    },
    verified: {
        type: Boolean,
        default: false,
    },
    verificationCode: {
        type: String,
        selected: false,         
    },
    verificationCodeValidation: {
        type: Number,
        selected: false,         
    },
    forgotPasswordCode: {
        type: String,
        selected: false,         
    },
    forgotPasswordCodeValidation: {
        type: Number,
        selected: false,
    },
}, {
    timestamps: true,    
})

module.exports = mongoose.model('User', userSchema);