<template>
   <div class="mx-auto form-container">
        <form action="" class="">
           <input type="text" class="form-control" name="idnumber" id="" placeholder="Your ID Number">
           <input type="text" class="form-control" name="password" id="" placeholder="Your Password">
           <input type="text" class="form-control" name="r-password" id="" placeholder="Repeat Password">
           <input type="submit" class="btn btn-outline-primary col-xl-12" id="next" value="PROCEED">
       </form>
   </div>
</template>

<script>
export default {
    name: 'Register'
    
}
</script>

<style scoped>

.form-container{
    max-width: 70%;

}
input{
    margin: 5px 0px;
}



</style>