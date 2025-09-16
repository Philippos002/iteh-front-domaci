<template>
  <div class="movie-list-container">
    <Header />

    <div class="movie-list-content">
      <div class="movies-grid">
        <OneMovieInList
          v-for="movie in movies"
          :key="movie.id"
          :title="movie.title"
          :year="movie.year"
          :poster="movie.poster"
        />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import OneMovieInList from "@/components/OneMovieInList.vue";

export default {
  components: {
    Header,
    Footer,
    OneMovieInList,
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          title: "The Shawshank Redemption",
          year: 1994,
          poster: "../src/img/shawshank.jpg",
        },
        {
          id: 2,
          title: "The Godfather",
          year: 1972,
          poster: "../src/img/kum.jpg",
        },
        {
          id: 3,
          title: "Inception",
          year: 2010,
          poster: "../src/img/inception.jpg",
        },
        {
          id: 4,
          title: "Fight Club",
          year: 1999,
          poster: "../src/img/fight.jpg",
        },
        {
          id: 5,
          title: "Interstellar",
          year: 2014,
          poster: "../src/img/inter.jpg",
        },
        {
          id: 6,
          title: "The Dark Knight",
          year: 2008,
          poster: "https://via.placeholder.com/200x300?text=Dark+Knight",
        },
      ],
    };
  },
};
</script>

<style>
.movie-list-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.movie-list-content {
  flex-grow: 1;
  padding: 2rem;
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  align-items: stretch;
}
</style>