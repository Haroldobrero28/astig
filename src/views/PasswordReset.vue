<template>
  <div>
    <div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="form-container">
            <Head />
            <h2>Password Reset</h2>
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
                placeholder="Your Email Address"
              />
              <input
                type="submit"
                class="btn btn-outline-primary col-xl-12"
                id="next"
                value="Submit"
              />
              <p><a href="/login">Go back</a></p>
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
  name: "PasswordReset",

  methods: {},
  components: {
    Head,
  },
};
</script>

<style scoped>
.password-reset {
  text-align: center;
}
.password-reset h2 {
  color: #0074fc;
  margin-bottom: 0px;
}
.password-reset p {
  font-size: 12px;
}
</style>
