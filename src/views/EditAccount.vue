<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row justify-content-center">
        <div class="form-container-account">
          <h2 class="mx-auto d-block">User Details</h2>
          <p>Change your details</p>

          <b-form-input type="text" disabled value="Your First Name" />
          <b-form-input type="text" disabled value="Your Middle Name" />
          <b-form-input type="text" disabled value="Your Last Name" />
          <div class="d-inline-flex col p-0">
            <b-form-input type="text" disabled value="Name Prefix" />
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
              <div class="d-inline-flex col p-0">
                <b-form-input
                  type="text"
                  placeholder="Name Prefix"
                  value="Mr"
                />
                <b-form-input
                  type="text"
                  placeholder="Name Suffix"
                  value="PhD"
                />
              </div>
              <b-form-input type="text" placeholder="Office" value="Random" />
              <b-form-input type="text" placeholder="Service" value="Random" />
              <b-form-input type="text" placeholder="Division" value="SDD" />
            </div>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./layout/Navbar";
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
  box-shadow: 0px 0px 10px 0px #357dde;
  margin: 20px;
  text-align: center;
}
</style>