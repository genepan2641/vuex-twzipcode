<template>
  <div id="app">
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
