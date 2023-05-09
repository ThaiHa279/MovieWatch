const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20,
        unique: true,  
    },
    password: {
       type: String,
       required: true, 
       minlength: 1,
    }, 
    email: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20,
        unique: true,  
    },
    admin: {
        type: Boolean, 
        default: false, 
    },
    premium: {
        type: Boolean, 
        default: false, 
    },
    store: {
        type: Array,
        default: [],
    },
}, {timestamps: true}
); 

module.exports = mongoose.model('User', userSchema);