<template>
  <div class="row">
    <div
      class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 mt-5 pt-3 pb-3 bg-white form-wrapper"
    >
      <div class="container">
        <h3>Register</h3>
        <hr />
        <form @submit.prevent="register()" class="" action="/register" method="post">
            <div class="row">
                <div class="col-12 col-md-6">
                <div class="form-group">
                    <label for="idnumber">ID Number</label>
                    <input
                    type="text"
                    class="form-control"
                    name="idnumber"
                    id="idnumber"
                    v-model="idnumber"
                    />
                </div>
                </div>
                <div class="col-12 col-md-6">
                <div class="form-group">
                    <label for="firstname">First Name</label>
                    <input
                    type="text"
                    class="form-control"
                    name="firstname"
                    id="firstname"
                    v-model="firstname"
                    />
                </div>
                </div>
                <div class="col-12 col-md-6">
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
                </div>
                <div class="col-12 col-md-6">
                <div class="form-group">
                    <label for="lastname">Last Name</label>
                    <input
                    type="text"
                    class="form-control"
                    name="lastname"
                    id="lastname"
                    v-model="lastname"
                    />
                </div>
                </div>
                <div class="col-5 col-sm-3">
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
                </div>
                <div class="col-5 col-sm-3">
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
                </div>
                
                <div class="col-12">
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input
                    type="text"
                    class="form-control"
                    name="email"
                    id="email"
                    v-model="email"
                    />
                </div>
                </div>
                <div class="col-12">
                <div class="form-group">
                    <label for="office">office</label>
                    
                    <select class="form-control"
                    name="office"
                    id="office"
                    v-model="office">
                      <option selected>Choose...</option>
                      <option value="One">One</option>
                      <option value="Two">Two</option>
                      <option value="Three">Three</option>
                    </select>
                </div>
                </div>
                <div class="col-12">
                <div class="form-group">
                    <label for="service">Service</label>
                    <select type="text"
                    class="form-control"
                    name="service"
                    id="service"
                    v-model="service">
                      <option selected>Choose...</option>
                      <option value="One">One</option>
                      <option value="Two">Two</option>
                      <option value="Three">Three</option>
                    </select>
                </div>
                </div>
                <div class="col-12">
                <div class="form-group">
                    <label for="division">Division</label>
                    <select type="text"
                    class="form-control"
                    name="division"
                    id="division"
                    v-model="division">
                      <option selected>Choose...</option>
                      <option value="One">One</option>
                      <option value="Two">Two</option>
                      <option value="Three">Three</option>
                    </select>
                </div>
                </div>
                <div class="col-12 col-sm-6">
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
                <div class="col-12 col-sm-6">
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

          <div class="row">
            <div class="col-12">
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
import Alert from "../cmps/Alert";
export default {
  data() {
    return {
      idnumber: "",
      firstname: "",
      middlename: "",
      lastname: "",
      namepreffix: "",
      namesuffix: "",
      email: "",
      office: "",
      service: "",
      division: "",
      password: "",
      password_confirm: "",
      msg: null,
      classAlert: null,
    };
  },
  methods: {
    register() {
      const form = new FormData();
      form.append("idnumber", this.idnumber);
      form.append("firstname", this.firstname);
      form.append("middlename", this.middlename);
      form.append("lastname", this.lastname);
      form.append("namepreffix", this.namepreffix);
      form.append("namesuffix", this.namesuffix);
      form.append("email", this.email);
      form.append("office", this.office);
      form.append("service", this.service);
      form.append("division", this.division);
      form.append("password", this.password);
      form.append("password_confirm", this.password_confirm);

      this.$guest.post("/register", form)
      .then(() => {
        this.msg = 'You have been successfully registered';
        this.classAlert = "success";
        
        this.idnumber= "";
        this.firstname= "";
        this.middlename= "";
        this.lastname= "";
        this.namepreffix= "";
        this.namesuffix= "";
        this.email= "";
        this.office= "";
        this.service= "";
        this.division= "";
        this.password= "";
      })
      .catch(err => {
        this.msg = err.response.data.messages.error;
        this.classAlert = "danger";
      });
    //axios
    },
  },
  components: {
    Alert,
  },
};
</script>

<style>


</style>
