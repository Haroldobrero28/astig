<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row justify-content-center">
        <div class="form col-8">
          <b-form-file id="file-large" size="lg"></b-form-file>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./cmps/Navbar";

export default {
  name: "FileUpload",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.form {
  top: 20vh;
}
</style>
