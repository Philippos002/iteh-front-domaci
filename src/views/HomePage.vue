<template>
    <div class="home-page-container">
        <Header></Header>
        <div class="home-page-content">

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
.home-page-container {
    display: flex;
    flex-direction: column;
}

.home-page-content {
    display: flex;
    min-height: 70vh;
    flex-direction: column;
    padding: 5rem 4rem;
}
</style>