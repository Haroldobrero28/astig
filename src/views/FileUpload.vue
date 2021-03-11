<template>
    <div>
        <Navbar />
        <h2>FILE UPLOAD</h2>
        <div class="container-fluid">
            <div >
            <b-form-file id="file-large" size="lg"></b-form-file>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from './layout/Navbar'


export default {
    name: 'FileUpload',
    components:{
        Navbar
    }
}
</script>

<style scoped>


</style>