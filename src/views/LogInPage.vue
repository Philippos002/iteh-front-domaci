<template>
  <div class="log-in-conainer">
    <Header></Header>
    <LogInForm></LogInForm>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import LogInForm from '@/components/LogInForm.vue';

export default {
    components:{
        Header, Footer, LogInForm
    }
}
</script>

<style>

</style>