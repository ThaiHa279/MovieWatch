import {defineStore} from "pinia"
import movieService from "../services/movie.service";

export const useMovieStore = defineStore( "MovieStore", {
    state: ()=>{
        return{ 
            movies: []
        }
    },
    actions: {
        async retrieveMovies() {
            try {
                this.movies = await movieService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
    }
});