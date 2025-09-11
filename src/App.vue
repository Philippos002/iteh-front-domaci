<template>
    <div id="app">
        <Header @open-signup="showSignUpForm = true" />
        <main class="content">
            <SignUpForm v-if="showSignUpForm" @close="showSignUpForm = false" />
            <router-view />
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import SignUpForm from './components/SignUpForm.vue'
export default {
    name: 'App',
    components: {
        Header,
        Footer,
        SignUpForm,
    },
    data(){
      return{
        showSignUpForm: false,
      };
    },
};
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  min-height: 100%;
  width: 100%;
  background-color: #121212;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>