<template>
  <div id="app">
    <h1>Vuex-twzipcode</h1>
    <p>modify from 
      <a href="https://www.npmjs.com/package/vue2-twzipcode">vue2-twzipcode</a> 
      by knovour <br>and <br>
      <a href="https://github.com/CasperLaiTW/vue-twzipcode">vue-twzipcode</a> 
      by CasperLaiTW
      </p>

    <h3>example</h3>
    <address-input></address-input>
  </div>
</template>

<script>
import addressInput from './components/address_input.vue';

export default {
  name: 'App',
  components: {
    'address-input': addressInput
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
