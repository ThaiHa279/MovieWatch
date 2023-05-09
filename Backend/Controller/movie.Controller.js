const Movie = require("../Models/Movie")

const movieController = {
    // get all movie   
    getAllMovie: async(req, res) => {
        try {
            const movies = await Movie.find(); 
            return res.status(200).json(movies);
        }catch(err) {
            return res.status(500).json(err);
        }
    }, 
    // post movie
    postMovie: async(req, res) => {
        try {
            // Create a new movie item
            const newItem = await new Movie ({
                id: req.body.id,
                name: req.body.name,
                category: req.body.category,
                core: req.body.core 
            });
            // Save to DB
            const item = await newItem.save(); 
            res.status(200).json(item);
        }catch(err) {
            return res.status(500).json(err); 
        }
    }, 
    // update information movie
    updateMovie: async(req, res) => {
        try {
            await Movie.findByIdAndUpdate( req.params.id, req.body);
            return res.status(200).json("Update successfully. ");
        }catch(err) {
            return res.status(500).json(err); 
        }
    }
}
module.exports = movieController;