<template>
  <div>
    <nav-bar v-if="!$route.meta.hideNavbar"/>
    <!-- <all-animals/> -->
  <div class="container">
    <router-view></router-view>
  </div>

  </div>
 
</template>

<script>
import navBar from "./components/pages/NavBar.vue"
//import AllAnimals from "./components/pages/AllAnimals.vue"
export default {
  name: 'App',
  components: {
   navBar,
  //  AllAnimals
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
