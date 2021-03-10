<template>
  <div class="home">
    <div class="mx-auto form-container">
      <form >
        <input type="text" class="form-control" name="idnumber" id="" placeholder="Your ID Number">
        <input type="text" class="form-control" name="password" id="" placeholder="Your Password">
        <input type="submit" class="btn btn-outline-primary col-xl-12" id="next" value="LOGIN">
        <p> Don't have an account? <a href="/register"> Create Account</a></p>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  methods: {
  }
}
</script>
