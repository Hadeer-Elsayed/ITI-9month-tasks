<template>
    <div v-for="d in animals" :key="d.id" class="d-inline-flex m-4">
     <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{d.common_name}}</h5>
            <p class="card-text">name: {{d.scientific_name}}</p>
            <p class="card-text">lives in: {{d.place}}</p>
            <a href="#" class="btn btn-primary btn-sm me-2" style="backgroundColor:pink;border:1px solid white"><router-link :to="`/animal/${d.id}`" 
            style="color:white ;text-decoration:none"
            > Details</router-link></a>
            <button class="btn btn-sm" style="background-color:#EAC868 " @click="handleDelete(d.id)" >delete</button>
        </div>
     </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"AllAnimals",
        data()
        {
            return{
                animals:[]
            }
        },
        created()
        {
            this.getAllAnimals();
            console.log("h")
        },
        methods:{
            getAllAnimals()
            {
                axios.get("http://localhost:3000/animal")
                .then((res)=>{
                    this.animals=res.data
                })
            },
            handleDelete(id)
            {
                axios.delete(`http://localhost:3000/animal/${id}`)
                .then((res)=>console.log(res.data));
                this.getAllAnimals()
            },
            
        }
    }
</script>

<style scoped>

</style>