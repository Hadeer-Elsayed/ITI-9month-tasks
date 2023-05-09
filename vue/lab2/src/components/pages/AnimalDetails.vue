<template>
    <div>
      <div v-if="flag" class="card m-auto" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{animal.place}}</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary btn-sm" style="background-color:pink; border:1px solid white" @click="flag=false">Update</a>
        </div>
      </div>
      <div v-if="flag === false">
    <form action="" class="w-25 m-auto" @submit.prevent="updateAnimal">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Name"
          v-model="name"
        />
        <label for="floatingInput">Name</label>
      </div>  <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="science-name"
          v-model="scienName"
        />
        <label for="floatingInput">Science Name</label>
      </div>  <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="place"
          v-model="place"
        />
        <label for="floatingInput">place</label>
      </div>
      <button class="btn btn-dark">submit</button>
    </form>
</div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"AnimalDetails",
        data()
        {
          return {
            name:"",
            scienName:"",
            place:"",
            animal:"",
            flag:true
          } 
        },
        created()
        {
         this.getAnimalById();
        },
        methods:{
            getAnimalById()
            {
              var id=this.$route.params.id;
              console.log(id)
              axios.get(`http://localhost:3000/animal/${id}`)
              .then((res)=>{
                this.animal=res.data
                console.log(this.animal)
              })
            },
            updateAnimal()
            {
              var id=this.$route.params.id;
              axios.put(`http://localhost:3000/animal/${id}`,{
                common_name:this.name,
                scientific_name:this.scienName,
                place:this.place
              })
              .then((res)=>{
              console.log(res.data)
              this.$router.push('/')
        })

            }

        }

    }
</script>

<style scoped>

</style>