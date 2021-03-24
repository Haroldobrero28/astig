<template>
  <div>
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./cmps/Navbar";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  methods: {
    get() {
      this.$api
        .get("/Office")
        .then((res) => {
          this.post = res.data;
        })
        .catch((err) => {
          console.log(err.response);
          this.msg = err.response.data.messages.error;
          this.classAlert = "danger";
        });
    },
  },
};
</script>

<style type="text/css">
#overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
</style>
