<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="form-container">
          <Head />
          <h2>Create Account</h2>
          <p>Fill up user details</p>
          <form>
            
              <input
                type="text"
                class="form-control"
                name="idnumber"
                id=""
                placeholder="First Name"
              />
              <input
                type="text"
                class="form-control"
                name="password"
                id=""
                placeholder="Middle Name"
              />
              <input
                type="text"
                class="form-control"
                name="r-password"
                id=""
                placeholder="Last Name"
              />
              <div class="d-inline-flex col-sm 1 p-0">
                <div class="form-group flex-fill m-0 pr-1">
                  <select class="form-control" id="route">
                    <option value="NA">Name Prefix</option>
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Msgt</option>
                    <option>Ms</option>
                  </select>
                </div>
                <div class="form-group flex-fill m-0 pl-1">
                  <select class="form-control" id="route">
                    <option value="NA">Name Suffix</option>
                    <option>Sr</option>
                    <option>Jr</option>
                    <option>Phd</option>
                    <option>OBE</option>
                  </select>
                </div>
              </div>
              <div class="form-group my-1">
                <select class="form-control" id="route">
                  <option value="NA">Office</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <div class="form-group my-1">
                <select class="form-control" id="route">
                  <option value="NA">Service</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <div class="form-group my-1">
                <select class="form-control" id="route">
                  <option value="NA">division</option>
                  <option>SDD</option>
                  <option>SOED</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            
            <input
              type="submit"
              @click.prevent="proceedQuery()"
              class="btn btn-outline-primary col-xl-12"
              id="next"
              value="Create"
            />
            <input
              type="submit"
              @click.prevent="cancelQuery()"
              class="btn btn-outline-danger col-xl-12"
              id="next"
              value="Cancel"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "./layout/Head";

export default {
  name: "UserInformation",
  methods: {
    proceedQuery() {
      this.$router.push("/login");
    },
    cancelQuery() {
      this.$router.push("/register");
    },
  },
  components: {
    Head,
  },
};
</script>

<style scoped>
  .container {
    height: 200px;
  }
</style>

