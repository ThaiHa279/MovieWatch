<script>
import AppHeader from "@/components/AppHeader.vue";
import {useMovieStore} from "./stores/MovieStore";



export default {
  components: {
    AppHeader,
  },
  mounted() {
    useMovieStore();
  }
};
</script>

<template>
  <div id="app">
      <AppHeader />
      <router-view />
  </div>
</template>
<style>

</style>