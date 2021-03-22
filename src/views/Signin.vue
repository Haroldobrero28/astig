<template>
  <div class="row">
    <div
      class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 mt-5 pt-3 pb-3 bg-white from-wrapper"
    >
      <div class="container">
        <h3>Signin</h3>
        <hr />

        <form @submit.prevent="signin()" action="/" method="post">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              class="form-control"
              name="username"
              id="username"
              v-model="username"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              name="password"
              id="password"
              v-model="password"
            />
          </div>
          <alert v-if="msg" :msg="msg" :classAlert="classAlert"></alert>
          <div class="row">
            <div class="col-12 col-sm-4">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
            <!-- <div class="col-12 col-sm-8 text-right">
              <router-link to="/signup">don't have an account</router-link>
            </div> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import Alert from "../cmps/Alert";
export default { 
  data() {
    return {
      token: null,
      expires_in: null,
      username: "",
      password: "",
      msg: null,
      Alert: null,
    }
    
  },

  methods: {
    signin() {
      const auth = {
        username: process.env.VUE_APP_CLIENT_ID,
        password: process.env.VUE_APP_CLIENT_SECRET,
      }
      const form = new FormData();
      form.append("username", this.username);
      form.append("password", this.password);
      form.append("grant_type", "password");

      this.$guest
      .post("/login", form, {auth})
      .then(()=> {
        this.msg = "You have succesfully logged in";
        this.classAlert = "success"
        this.username="";
        this.password="";
      })
      .catch(err=> {
        this.msg = err.response.data.error_description;
        this.classAlert = "danger";
      });
    },
  },
  components: {
    Alert,
  },
};
</script>

<style scoped></style>
