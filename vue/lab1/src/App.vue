<template>
 <form-component/>
</template>

<script>

import formComponent from'./components/Form.vue'
export default {
  name: 'App',
  components: {
    formComponent
   
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
