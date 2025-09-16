<template>
  <div class="movie-card">
    <img :src="poster" :alt="title" class="movie-poster" />
    <div class="overlay">
      <div class="overlay-text">
        {{ title }} ({{ year }})
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OneMovieInList",
  props: {
    title: { type: String, required: true },
    year: { type: Number, required: true },
    poster: { type: String, required: true },
  },
};
</script>

<style scoped>
.movie-card {
  position: relative;
  width: 180px;
  height: 270px;
  overflow: hidden;
  border: 1px solid #1db954;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.movie-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.movie-poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Overlay */
.overlay {
  position: absolute;
  inset: 0; /* top, right, bottom, left = 0 */
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  transition: opacity 0.3s ease;
}

.movie-card:hover .overlay {
  opacity: 1;
}

.overlay-text {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.3;
}
</style>