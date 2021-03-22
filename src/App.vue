<template>
  <div id="app">
    <Navbar />
    <div></div>
    <router-view />
  </div>
</template>

<script>
import Navbar from './views/layout/Navbar'
export default {
  name: "App",
  components:{
        Navbar
    }
  
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.form-container {
  position: absolute;
  top: 15vh;
  padding: 0px 30px 30px 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #2692fd;
  text-align: center;
}

.form-container h2 {
  color: #0074fc;
  margin-bottom: 0px;
}

.form-container p {
  font-size: 15px;
  margin: 0;
}

input {
  margin: 5px 0px;
}
</style>
