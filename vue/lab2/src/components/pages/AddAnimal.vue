<template>
    <div>
     <form action="" class="w-25 m-auto" @submit.prevent="AddAnimal">
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
</template>

<script>
import axios from 'axios'
    export default {
        name:'AddAnimal',
        data()
        {
            return{
                name:"",
                scienName:"",
                place:""
            }
        },
        methods:{
            AddAnimal()
            {
                axios.post("http://localhost:3000/animal",{
                    common_name:this.name ,
                    scientific_name:this.scienName ,
                    place:this.place ,
                })
                .then(()=>{
                    this.$router.push("/")
                })

            }

        }
        // methods:
        // {
        //     AddAnimal()
        //     {
        //         axios.post("http://localhost:3000/animal",{
        //             common_name:this.name ,
        //             scientific_name:this.scienName ,
        //             place:this.place ,
        //         })
        //         .then(()=>{
        //             this.$router.push("/")
        //         })

        //     }

        // }
        
    }
</script>

<style scoped>

</style>