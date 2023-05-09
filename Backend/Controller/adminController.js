const User = require("../Models/User")
const Movie = require("../Models/Movie")

const adminController = {
    // get all users
    getAllUsers: async(req, res) => {
        try {
            const users = await User.find(); 
            return res.status(200).json(users);
        }catch(err) {
            return res.status(500).json(err);
        }
    }, 
    // get all users

    // delete user
    deleteUser: async(req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id);
            return res.status(200).json("Delete successfully. ");
        }catch(err) {
            return res.status(500).json(err);
        }
    },
   
}

module.exports = adminController