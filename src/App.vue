<template>
    <div id="app">
        <Header />
    </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
    name: 'App',
    components: {
        Header
    }
}
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  min-height: 100%;
  width: 100%;
  background-color: #121212;
}
</style>