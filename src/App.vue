<template>
    <FirstPage />
    <br>
    <SecondPage />
    <hr>
  <img alt="Vue logo" :src="$store.getters.getImageLink">
</template>

<script>
import FirstPage from './components/FirstPage.vue'
import SecondPage from './components/SecondPage.vue'

export default {
  name: 'App',
  components: {
      FirstPage,
      SecondPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
