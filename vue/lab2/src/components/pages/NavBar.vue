<template>
    <div>
        <h3 style="font-style:italic;background-color:black;color:white,border-radius:5px;width:50%" class="m-auto">Different Types of Animals</h3>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
     
        <li class="nav-item">
          <router-link class="nav-link" to="/">All</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addAnimal" class="nav-link">Add</router-link>
        </li>
         <!-- <li class="nav-item">
          <router-link class="nav-link" to="/create">Add Animal</router-link>
        </li> -->
      
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
</template>

<script>
    export default {
        name:"navBar"
    }
</script>

<style scoped>

</style>