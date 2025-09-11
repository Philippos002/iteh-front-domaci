<template>
  <header class="app-header">
    <!-- Logo -->
    <div class="header-left">
      <h1 class="logo">
        <span class="movie">Movie</span><span class="maniacs">Maniacs</span>
      </h1>
    </div>

    <!-- Search bar -->
    <div class="header-center">
      <div class="search-bar">
        <i class="icon-search"><img src="../img/lupa.png" alt=""></i>
        <input
          type="text"
          placeholder="Pretraži film..."
          v-model="searchQuery"
          @keyup.enter="onSearch"
        />
      </div>
    </div>

    <!-- Funkcionalnosti u headeru -->
    <div class="header-right">
      <button class="pages" @click = "$emit('open-login')">
        Log In
      </button>
      <button class="pages" @click = "$emit('open-signup')">
        Sign Up
      </button>
      <button class="pages">
        Movies
      </button>
      <button class="pages" @click="onProfile">
        <img src="../img/profil.png" alt="">
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    onSearch() {
      console.log("Pretraga:", this.searchQuery);
    },
    onProfile() {
      console.log("Klik na profil");
    },
  },
};
</script>

<style scoped>
.app-header {
  position: fixed;         
  top: 0;
  left: 0;
  width: 100%;             
  height: 60px;            
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1f1f1f;
  padding: 0 1.5rem;       
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  z-index: 1000;           
  box-sizing: border-box;
}

.header-left {
  flex: 0 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.logo .movie {
  color: #fff; /* belo */
}

.logo .maniacs {
  color: #1db954; /* zeleno kao dugmad */
}

.header-center {
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 0 1rem;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: #2b2b2b;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  width: 100%;              
  max-width: 400px;
}

.search-bar input {
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  margin-left: 0.5rem;
  flex: 1;
}

.search-bar input::placeholder {
  color: #aaa;
}

.header-right {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.pages {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.25rem;
  margin-left: 1rem;
  cursor: pointer;
  transition: color 0.2s;
}

.pages:hover {
  color: #1db954;
}

img {
    height: 14px;
    width: 14px;
}

.pages img {
    height: 35px;
    width: 35px;
}
</style>