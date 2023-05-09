<template>
    <div class="container">
        <div class="song">
            <br>
            <div class="video-grid-single-page-agileits">
                <!-- <div data-video="dLmKio67pVQ" id="video"> <img src="images/5.jpg" alt="" class="img-responsive" /> </div> -->
                <iframe width="1101" height="450" :src="`https://www.youtube.com/embed/${movie.yt_id}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div class="song-info">
                <h3>{{ movie.name }}</h3>	
            </div>
        </div>
        <BannerBottom/>
    </div>
</template>
<script>
import BannerBottom from '../components/BannerBottom.vue';
import { useMovieStore } from "../stores/MovieStore";

export default {
    components: {
        BannerBottom 
    },
    props: {
        id: { type: String, required: true }
    },
    data() {
        return {
            movie: null
        }; 
    },
    watch: {
        id: {
            immediate: true,
            deep: true,
            handler(newValue) {
                this.getMovie(newValue)
            }
        }
    },
    methods: {
        getMovie(id) {
            const store = useMovieStore();
            this.movie = store.movies.find((m) => m._id === id);
        }
    },
    created() {

        this.getMovie(this.id)
    }
}
</script>
<style>
</style>