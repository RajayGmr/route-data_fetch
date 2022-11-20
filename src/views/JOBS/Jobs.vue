<template>
    <h3>Jobs Page</h3>
    <div class="job" v-for="job in jobs" :key="job.id">
      <router-link :to="{name:'jobdetail', params:{id:job.id}}">
        <p>{{job.title}}</p>
      </router-link>
      
    </div>
    <router-view></router-view>
  </template>
  
  <script>
  export default {
    data(){
    return{
      jobs:[]
    }
  },
  mounted(){
    fetch('http://localhost:3000/jobs')
    .then((response)=>{
      return response.json()
    })
    .then((datas)=>{
      // console.log(datas);
      this.jobs=datas;
    })
    .catch((err)=>{
      console.log(err.message());
    })
  }
  
  }
  </script>
  
  <style>
  .job{
    color: rgb(6, 136, 241);
  }
  
  </style>