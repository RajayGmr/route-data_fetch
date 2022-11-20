<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{name:'signup'}">Sign Up</router-link> |
    <router-link :to="{name:'job'}">Job</router-link>
  </nav>
  <router-view/>
  <button class="goredirect" @click="redirect">Redirect</button>
  <button class="goforward" @click="forward">Forward</button>
  <button class="gobackward" @click="backward">Backward</button>
</template>
<script>
export default{
  methods:{
    redirect(){
      this.$router.push({name:'signup'});
    },
    forward(){
      this.$router.go(1);
    },
    backward(){
      this.$router.go(-1);
    }
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
nav a:hover{
  font-size: 20px;
  color: black;
  text-decoration: underline;
}
nav a.router-link-exact-active {
  color: #42b983;
  background-color: white;
  border: 2px solid #42b983;
  border-radius: 10px;
  padding: 10px; 
}
nav a.router-link-exact-active:hover{
  font-size: 15px;
  color: #42b983;
  text-decoration: none;
}
.goforward{
  width: 100px;
  height: 30px;
  border: 1px solid green;
  border-radius: 10px;
  background-color: green;
  color: #fff;
  margin: 0px 5px;
}
.gobackward{
  width: 100px;
  height: 30px;
  border: 1px solid green;
  border-radius: 10px;
  background-color: rgb(242, 48, 4);
  color: #fff;
  margin: 0px 5px;
}
.goredirect{
  width: 100px;
  height: 30px;
  border: 1px solid green;
  border-radius: 10px;
  background-color: rgb(169, 152, 7);
  color: #fff;
  margin: 0px 5px;
}
.goforward:hover, .gobackward:hover, .goredirect:hover{
  opacity: 0.7;
}
</style>
