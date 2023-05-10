import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import AllAnimals from "./components/pages/AllAnimals.vue"
import AnimalDetails from "./components/pages/AnimalDetails.vue"
import { createRouter , createWebHistory } from 'vue-router';
import AddAnimal from "./components/pages/AddAnimal.vue"
import errorApp from "./components/pages/Error.vue"

const routes=[
    {
        path:'/',
        component:AllAnimals,
        alias:'/animal'//to route also in this path
    },
    {
        path:'/animal/:id',
        component:AnimalDetails,
    },
    {
        path:'/addAnimal',
        component:AddAnimal
    },
    {
        path:'/:NotFound(.*)*',
        component:errorApp,
        meta:{
            hideNavbar:true
        }
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
