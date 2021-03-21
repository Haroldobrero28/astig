<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="form-container">
          <Head />
          <h2>Login</h2>
          <p>Sign in to your account</p>
          <form>
            <input
              type="text"
              class="form-control"
              name="idnumber"
              id=""
              placeholder="Your ID Number"
            />
            <input
              type="text"
              class="form-control"
              name="password"
              id=""
              placeholder="Your Password"
            />
            <input
              type="submit"
              @click.prevent="toFileUpload()"
              class="btn btn-outline-primary col-xl-12"
              value="Login"
            />
            <p><a href="/passwordreset"> Forgot Password </a></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "./layout/Head";

export default {
  name: "Login",

  methods: {
    toRegister() {
      this.$router.push("/register");
    },
    toFileUpload() {
      this.$router.push({ path: "FileUpload" });
    },
  },
  components: {
    Head,
  },
};
</script>

<style scoped></style>
