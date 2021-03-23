<template>
  <div id="app">
    <app-nav :loggedIn='loggedIn'> </app-nav>
    
    <router-view />
  </div>
</template>

<script>
import Navbar from './cmps/Navbar'
export default {
  computed: {
    loggedIn (){
      return this.$store.getters.loginState
    }
  },
  name: "App",
  components:{
        appNav: Navbar
    },
    created () {
      const expires = localStorage.getItem('expires');
      const token = localStorage.getItem('token');

      if(expires && token ) {
        var expiresMs = new Date(expires);
        var now = new Date();
        now = now.getTime();
        expiresMs =expiresMs.getTime;
        if(now > expiresMs){
          this.$store.dispatch("logout");
        }else {
          this.$store.dispatch("login", expiresMs - now);
        }
      } else {
        if(this.$router.currentRoute.name !=="Signin");
          this.$router.push({name: "Signin"});
      }
    },

  
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
