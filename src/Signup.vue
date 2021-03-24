<template>
  <div class="row">
    <div
      class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 mt-5 pt-3 pb-3 bg-white form-wrapper"
    >
      <div class="container">
        <h3>Register</h3>
        <hr />
        <form
          @submit.prevent="register()"
          class=""
          action="/register"
          method="post"
        >
          <div class="row">
            <!-- <div class="col-12 col-md-6">
                <div class="form-group" >
                    <label for="idnumber">ID Number</label>
                    <input
                    type="text"
                    class="form-control"
                    name="idnumber"
                    id="idnumber"
                    v-model="idnumber"
                    />
                </div>
                </div> -->

            <div class="col-12 col-md-6">
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
            </div>

            <div class="col-12 col-md-6">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="firstName"
                  id="firstName"
                  v-model="firstName"
                />
              </div>
            </div>

            <!-- <div class="col-12 col-md-6" >
                <div class="form-group">
                    <label for="middlename">Middle Name</label>
                    <input
                    type="text"
                    class="form-control"
                    name="middlename"
                    id="middlename"
                    v-model="middlename"
                    />
                </div>
                </div> -->

            <div class="col-12 col-md-6">
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="lastName"
                  id="lastName"
                  v-model="lastName"
                />
              </div>
            </div>

            <!-- <div class="col-5 col-sm-3">
                <div class="form-group">
                    <label for="namepreffix">Name Preffix</label>
                    <input
                    type="text"
                    class="form-control"
                    name="namepreffix"
                    id="namepreffix"
                    v-model="namepreffix"
                    />
                </div>
                </div> -->

            <!-- <div class="col-5 col-sm-3" >
                <div class="form-group">
                    <label for="namesuffix">Name Suffix</label>
                    <input
                    type="text"
                    class="form-control"
                    name="namesuffix"
                    id="namesuffix"
                    v-model="namesuffix"
                    />
                </div>
                </div> -->

            <div class="col-12 col-md-6">
              <div class="form-group">
                <label for="emailAddress">Email address</label>
                <input
                  type="text"
                  class="form-control"
                  name="emailAddress"
                  id="emailAddress"
                  v-model="emailAddress"
                />
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="form-group">
                <label for="role">Role</label>

                <select
                  class="form-control"
                  name="role"
                  id="role"
                  v-model="role"
                >
                  <option selected>Choose...</option>
                  <option value="viewer">Viewer</option>
                  <option value="data_editor">Data Editor</option>
                </select>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="form-group">
                <label for="office">office</label>
                <select
                  class="form-control"
                  name="office"
                  id="office"
                  v-model="office"
                >
                  <option selected>Choose...</option>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                </select>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="form-group">
                <label for="service">Service</label>
                <select
                  type="text"
                  class="form-control"
                  name="service"
                  id="service"
                  v-model="service"
                >
                  <option selected>Choose...</option>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                </select>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="form-group">
                <label for="division">Division</label>
                <select
                  type="text"
                  class="form-control"
                  name="division"
                  id="division"
                  v-model="division"
                >
                  <option selected>Choose...</option>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                </select>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  id="password"
                  value=""
                  v-model="password"
                />
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="form-group">
                <label for="password_confirm">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="password_confirm"
                  id="password_confirm"
                  value=""
                  v-model="password_confirm"
                />
              </div>
            </div>
            <alert v-if="msg" :msg="msg" :classAlert="classAlert"></alert>
          </div>

          <div class="row ">
            <div class="mx-auto">
              <button type="submit" class="btn btn-primary">Register</button>
            </div>
            <!-- <div class="col-12 col-sm-10 text-right">
              <router-link to="/login">Already have an account</router-link>
            </div> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from "./cmps/Alert";
export default {
  data() {
    return {
      //idnumber: "",
      username: "",
      firstName: "",
      //middlename: "",
      lastName: "",
      //namepreffix: "",
      //namesuffix: "",
      emailAddress: "",
      role: "",
      office: "",
      service: "",
      division: "",
      password: "",
      password_confirm: "",
      msg: null,
      classAlert: null,
    };
  },
  /* mounted: {
    getOffice() {
      this.$api.get("/office/getOffice").then((result)=>{
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
    },
  }, */
  methods: {
    register() {
      const form = new FormData();
      //form.append("idnumber", this.idnumber);
      form.append("username", this.username);
      form.append("firstName", this.firstName);
      //form.append("middlename", this.middlename);
      form.append("lastName", this.lastName);
      //form.append("namepreffix", this.namepreffix);
      //form.append("namesuffix", this.namesuffix);
      form.append("emailAddress", this.emailAddress);
      form.append("role", this.role);
      form.append("office", this.office);
      form.append("service", this.service);
      form.append("division", this.division);
      form.append("password", this.password);
      form.append("password_confirm", this.password_confirm);

      this.$guest
        .post("/register", form)
        .then(() => {
          this.msg = "You have been successfully registered";
          this.classAlert = "success";

          //this.idnumber= "";
          this.username = "";
          this.firstName = "";
          //this.middlename= "";
          this.lastName = "";
          //this.namepreffix= "";
          //this.namesuffix= "";
          this.emailAddress = "";
          this.role = "";
          this.office = "";
          this.service = "";
          this.division = "";
          this.password = "";
          this.password_confirm = "";
        })
        .catch((err) => {
          this.msg = err.response.data.messages.error;
          this.classAlert = "danger";
        });
      //axios
    },

    get() {
      this.$api.get("/blog").then((res) => {
        this.posts = res.data;
      });
    },
  },
  components: {
    Alert,
  },
};
</script>

<style></style>
