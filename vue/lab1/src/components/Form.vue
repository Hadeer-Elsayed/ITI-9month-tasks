//vb for creating this temp
<template>
    <div>
       
      <div>
        
       <div>
         <button @click="formFlag=1, userFlag=0,adminFlag=0">Form</button>
         <button @click="showUsers">Users</button>
         <button @click="showAdmin">Admins</button><br><br>
       </div>

        <form  v-show="formFlag||userFlag==0&&adminFlag==0" action=""  @submit.prevent="formHandling" style="border:1px solid; width:30%;margin:auto; padding:10px;background-color:pink" >
        <label for="name">Name</label><br>
        <input id="name" type="text" v-model.trim.lazy="data.name"/><br><br>

        <label for="age">Age</label><br>
        <input id="age" type="text" v-model.trim.lazy="data.age"/><br><br>

        <input type="radio" id="user" name="user" value="user" v-model.trim.lazy="data.role"/>
        <label for="user">User</label><br>
        <input type="radio" id="admin" name="admin" value="admin" v-model.trim.lazy="data.role"/>
        <label for="admin">Admin</label><br>

        <button type="submit">Add</button>
       </form>
      </div>
        <user-component
    :dynamicData=" userArr"
    :dynamicData2="userFlag"
     @remove="deleteUser" />
    <admin-component
    :dynamicData=" adminArr"
    :dynamicData2="adminFlag"
    :dynamicDelete="deleteAdmin"
    @remove="deleteAdmin"
    /> 
    </div>
  
</template>

<script>
import adminComponent from './Admin.vue'
import userComponent from './User.vue'
    export default {
        name:"formComponent" ,
        components:{
            userComponent,
            adminComponent
        },
    data(){
     return{
       
        data:{
        name:"",
        age:"",
        role:"",
        id:1},
        dataArr:[],
        userArr:[],
        adminArr:[],
        formFlag:0,
        userFlag:0,
        adminFlag:0
     }
    },
    methods:{
        formHandling()
        {
            
            this.dataArr.push({...this.data})
            this.data.name=this.data.age=this.data.role=''
            console.log("h")

        },
        showUsers()
        {
            this.userArr=[]
            // console.log("s")
            // console.log(this.dataArr)
             var idCounter=1
             for(let i=0;i<this.dataArr.length;i++)
            {
               
                if(this.dataArr[i].role=="user")
                {
                  this.userArr.push({...this.dataArr[i],id:idCounter})
                  idCounter++
                }
            }
             console.log(this.userArr)
            
           this.userFlag=1;
           this.formFlag=0;
           this.adminFlag=0;
        },
        showAdmin()
        {
            this.adminArr=[];
            var adminIdCounter=1
            for(let i=0;i<this.dataArr.length;i++)
            {
                if(this.dataArr[i].role=="admin")
                {
                  this.adminArr.push({...this.dataArr[i],idAdmin:adminIdCounter})
                  adminIdCounter++
                }
            }
            console.log(this.adminArr)
           this.userFlag=0;
           this.formFlag=0;
           this.adminFlag=1;
            
        },
       deleteAdmin(index)
       {
         for(let i=0;i<this.dataArr.length;i++)
         {
          // console.log((this.dataArr[i]&&this.adminArr[index])?this.dataArr[i].id==this.adminArr[index].id:false);
          if((this.dataArr[i]&&this.adminArr[index])?this.dataArr[i].idAdmin==this.adminArr[index].idAdmin:false)
          {
            this.dataArr.splice(i,1)
          }
           this.adminArr.splice(index,1)
         }
      },
      deleteUser(index)
       {
        console.log(index)
        
         for(let i=0;i<this.dataArr.length;i++)
         {
          // console.log((this.dataArr[i]&&this.userArr[index])?this.dataArr[i].id==this.userArr[index].id:false);
          if((this.dataArr[i]&&this.userArr[index])?this.dataArr[i].id==this.userArr[index].id:false)
          {
            this.dataArr.splice(i,1)
          }
           this.userArr.splice(index,1)
         }
         //var userData=this.userArr
        //  this.dataArr=this.dataArr.filter((d)=>d.name!=userData[index].name)
        //  console.log(this.dataArr)
      }
    }
 }
</script>

<style scoped>

</style>