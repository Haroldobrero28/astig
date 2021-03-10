<template>
  <div class="app">
    <Head />
    <Register />

  </div>
</template>

<script>
import Head from './components/Head'
import Register from './components/Register'

export default {
  name: 'App',
  components: {
    Head,
    Register
  }

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>
