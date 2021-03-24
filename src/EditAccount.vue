<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row justify-content-center">
        <div class="form-container-account">
          <h2>User Details</h2>
          <p>Change your details</p>
          <b-form-input type="text" disabled value="Your First Name" />
          <b-form-input type="text" disabled value="Your Middle Name" />
          <b-form-input type="text" disabled value="Your Last Name" />
          <div class="d-inline-flex col p-0">
            <b-form-input pr-1 type="text" disabled value="Name Prefix" />
            <b-form-input type="text" disabled value="Name Suffix" />
          </div>
          <b-form-input type="text" disabled value="Office" />
          <b-form-input type="text" disabled value="Service" />
          <b-form-input type="text" disabled value="Division" />

          <b-button v-b-modal.modal-center>Edit user details</b-button>
          <b-modal id="modal-center" centered title="Edit user details">
            <div class="container-sm">
              <b-form-input
                type="text"
                placeholder="Your First Name"
                value="My First Name"
              />
              <b-form-input
                type="text"
                placeholder="Your Middle Name"
                value="My Middle Name"
              />
              <b-form-input
                type="text"
                placeholder="Your Last Name"
                value=" My Last Name"
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
                  <option>Routes1</option>
                  <option>Routes2</option>
                  <option>Routes3</option>
                  <option>Routes4</option>
                </select>
              </div>
              <div class="form-group my-1">
                <select class="form-control" id="route">
                  <option value="NA">Service</option>
                  <option>Routes1</option>
                  <option>Routes2</option>
                  <option>Routes3</option>
                  <option>Routes4</option>
                </select>
              </div>
              <div class="form-group my-1">
                <select class="form-control" id="route">
                  <option value="NA">division</option>
                  <option>Routes1</option>
                  <option>Routes2</option>
                  <option>Routes3</option>
                  <option>Routes4</option>
                </select>
              </div>
            </div>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./cmps/Navbar";
export default {
  name: "EditAccount",
  components: {
    Navbar,
  },
  methods: {
    toSave() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.form-container-account {
  position: absolute;
  top: 20vh;
  padding: 0px 30px 30px 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #424242;
  margin: 20px;
  text-align: center;
}

.form-container-account h2 {
  margin-top: 30px;
}
</style>
