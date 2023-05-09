const router = require('express').Router();
const middlewareController = require("../Controller/middlewareController");
const movieController = require('../Controller/movie.Controller')

router.get("/", movieController.getAllMovie)
router.post("/movie",middlewareController.verifyAdmin, movieController.postMovie);
router.post("/update-:id",middlewareController.verifyAdmin, movieController.updateMovie);

module.exports = router;