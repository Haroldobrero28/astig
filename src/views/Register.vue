<template>
  <div>
    <div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="form-container">
            <Head />
            <h2>Register</h2>
            <p>Create your account</p>
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
                type="text"
                class="form-control"
                name="r-password"
                id=""
                placeholder="Repeat Password"
              />
              <input
                type="submit"
                @click.prevent="toUserInformation()"
                class="btn btn-outline-primary col-xl-12"
                id="next"
                value="Proceed"
              />
              <p>Already have an account? <a href="/login"> Login</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "./layout/Head";

export default {
  name: "Register",
  methods: {
    toUserInformation() {
      this.$router.push("/userinformation");
    },
  },

  components: {
    Head,
  },
};
</script>

<style scoped>
.register {
  text-align: center;
}
.register h2 {
  color: #0074fc;
  margin-bottom: 0px;
}
.register p {
  font-size: 12px;
}
</style>
