<template>
  <div id="app">
    <div>
      <Head />

      
    </div>
    <router-view/>
  </div>
</template>

<script>
import Head from './views/layout/Head'

export default {
  name: 'App',
  components: {
    Head
  }
  
}
</script>

<style>
.form-container{
  
  max-width: 70%;
}
input{
    margin: 5px 0px;
}

</style>
