<template>
  <div v-if="job">
    <P>Job ID - {{job.id}}</P>
  <p>Job Title - {{job.title}}</p>
  <p>Job Detail - {{job.detail}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            job:null
        }
    },
     props:['id'],
    mounted(){
    fetch('http://localhost:3000/jobs/'+this.id)
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
       //console.log(data);
       this.job=data;
    })
    .catch((err)=>{
      console.log(err.message());
    })
  }

}
</script>

<style>

</style>