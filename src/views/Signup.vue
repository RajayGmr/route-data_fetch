<template>
    <form action="">
      <label for="">Email</label>
      <input type="email" required >
      <label for="">Password</label>
      <input type="password" required >
      <p v-if="errorMsg" class="theme">{{errorMsg}}</p>
  
      <label for="">Role:</label>
      <select name="" id="" >
          <option value="developer">Web Developer</option>
          <option value="designer">Web Designer</option>
      </select>
  
      <label for="">Skill</label>
      <input type="text">
  
      <div>
          <input type="checkbox" id="checkbox"  >
          <label for="checkbox">Accept Terms and Conditions</label>
      </div>
       
      <!-- Multiple CheckBox -->
      <div>
          <label for="">Choose Location</label><br>
          <input type="checkbox" id="checkbox1" value="Bangkok" >
          <label for="checkbox1">Bangkok</label>
          <input type="checkbox" id="checkbox2" value="Phuket" >
          <label for="checkbox2">Phuket</label>
          <input type="checkbox" id="checkbox3" value="Chaing Mai">
          <label for="checkbox3">Chaing Mai</label>
          <input type="checkbox" id="checkbox4" value="Chaing Rai" >
          <label for="checkbox4">Chaing Rai</label>
      </div>
  
      <!-- radio check box -->
      <div>
        <label for="">Experience Year</label><br>
        <input type="radio" name="" id="0-1" value="0-1" >
        <label for="0-1">1 year</label>
        <input type="radio" name="" id="3-5" value="3-5" >
        <label for="3-5">3 years</label>
        <input type="radio" name="" id="5+" value="5+" >
        <label for="5+">5 years</label>
      </div>
  
      <div class="align">
          <button class="create">Create Account</button>
      </div>
  </form>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  form{
      max-width: 420px;
      margin: 30px auto;
      background: rgba(226, 201, 201, 0.544);
      text-align: left;
      padding: 40px;
      border-radius:10px;
  }
  label{
      color: rgb(0, 0, 0);
      display: inline-block;
      /* margin: 25px 0 15px; */
      margin: 10px;
      font-size: 0.6em;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
  }
  input,select{
      display: block;
      padding: 10px 6px;
      width: 100%;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid #ddd;
      color: rgb(85, 85, 85);;
  }
  input[type="checkbox"]{
      display: inline-block;
      width: 16px;
      margin: 0 5px 0 0;
      position: relative;
      top: 2px;  
  }
  input[type="radio"]{
      display: inline-block;
      width: 16px;
      margin: 0 5px 0 0;
      position: relative;
      top: 2px;  
  }
  .cross{
      cursor: pointer;
      color: red;
      margin-left: 400px;
  }
  .create{
      background-color: steelblue;
      padding: 8px;
      margin-top: 10px;
      color: white;
      border-radius: 10px;
  }
  .align{
      text-align: center;
  }
  .theme{
      color: red;
  }
  
  </style>