<template>
    <div>
       <div v-if="dynamicData2">
        <table border="1px" style="margin:auto">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
                <template v-for="(d,index) in dynamicData" :key="index" >
                    <tr v-if="d.role=='user'">
                        <td>{{d.name}}</td>
                        <td>{{d.age}}</td>
                        <td><button @click="$emit('remove',index)">Delete</button></td>
                    </tr>
                </template>
        </table>
       </div>
    </div>
</template>

<script>
    export default {
        name:"userComponent",
        emits:['remove'],
        props:['dynamicData','dynamicData2'],
    
        
    }
</script>

<style scoped>

</style>