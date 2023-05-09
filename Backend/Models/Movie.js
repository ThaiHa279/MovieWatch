const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true, 
        required: true,
    },
    yt_id: {
        type: String,
        unique: true, 
        required: true,
    }, 
    name: {
        type: String,
        require: true,
    },
    status: {
        type: Array,
        require: true, 
    },  
    image: {
        type: String, 
        require: true,
    },
    rating: {
        type: Number, 
        require: true,
    }
}, {timestamps: true}
);

module.exports = mongoose.model('Movie',movieSchema)