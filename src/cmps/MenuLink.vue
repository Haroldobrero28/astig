<template>
  <b-nav-item class="nav-item" active-class="active" :to="path" tag="li">
    {{text}}
  </b-nav-item>
</template>

<script>
export default {
props: ["path", "text"]
}
</script>

<style>

</style>