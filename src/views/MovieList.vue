<template>
    <div class="movie-list-container">
        <Header></Header>
        <div class="movie-list-content">

        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {
    components: {
        Header, Footer
    }
}
</script>

<style>
.movie-list-container {
    display: flex;
    flex-direction: column;
}

.movie-list-content {
    display: flex;
    min-height: 70vh;
    flex-direction: column;
}
</style>