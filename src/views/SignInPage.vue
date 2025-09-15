<template>
    <div class="sign-in-container">
        <Header></Header>
        <SignUpForm></SignUpForm>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import SignUpForm from '@/components/SignUpForm.vue';

export default {
    components: {
        Header, Footer, SignUpForm
    }
}
</script>

<style>
.sign-in-container {
    display: flex;
    flex-direction: column;

}

</style>