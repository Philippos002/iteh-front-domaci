<template>
  <div class="add-movie-page">
    <Header />

    <main class="add-movie-content">
      <h1 class="page-title">Dodaj novi film</h1>

      <form class="add-movie-form">
        
        <div class="form-group">
          <label for="title">Ime filma</label>
          <input
            type="text"
            id="title"
            v-model="movie.title"
            placeholder="Unesite ime filma"
            required
          />
        </div>

        
        <div class="form-group">
          <label for="year">Godina</label>
          <input
            type="number"
            id="year"
            v-model="movie.year"
            placeholder="Unesite godinu"
            required
          />
        </div>

        
        <div class="form-group">
          <label for="genre">Žanr</label>
          <input
            type="text"
            id="genre"
            v-model="movie.genre"
            placeholder="Unesite žanr (npr. Drama, Komedija)"
            required
          />
        </div>

        
        <div class="form-group">
          <label for="description">Opis</label>
          <textarea
            id="description"
            v-model="movie.description"
            placeholder="Unesite kratak opis filma"
            rows="4"
            required
          ></textarea>
        </div>

        
        <div class="form-group">
          <label for="poster">Poster filma</label>
          <input
            type="file"
            id="poster"
            @change="handlePosterUpload"
            accept="image/*"
          />
        </div>

        
        <button type="submit" class="submit-btn">Dodaj film</button>
      </form>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "AddMovie",
  components: { Header, Footer },
  data() {
    return {
      movie: {
        title: "",
        year: "",
        genre: "",
        description: "",
        poster: null,
      },
    };
  },
};
</script>

<style scoped>
.add-movie-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #fff;
}

.add-movie-content {
  flex: 1;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #1db954;
}

.add-movie-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #2b2b2b;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #1db954;
}

input,
textarea {
  padding: 0.8rem;
  border-radius: 8px;
  border: none;
  outline: none;
  background-color: #444;
  color: #fff;
  font-size: 1rem;
}

input::placeholder,
textarea::placeholder {
  color: #aaa;
}

textarea {
  resize: none;
}

.submit-btn {
  padding: 0.8rem;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background-color: #1db954;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #17a846;
}
</style>
