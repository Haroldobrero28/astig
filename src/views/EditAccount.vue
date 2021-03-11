<template>
<div>
    <Navbar />
    <div class="container-fluid mt-5 ">
        <h2 class="mx-auto d-block">User Details</h2>
        <p>Change your details</p>
        
        <div class="container-sm">
            <b-form-input v-model="text" type="text" placeholder="Your First Name" />
            <b-form-input v-model="text" type="text" placeholder="Your Middle Name" />
            <b-form-input v-model="text" type="text" placeholder="Your Last Name" />
            <div class="d-inline-flex">
                <b-form-input v-model="text" type="text" placeholder="Name Prefix" />
                <b-form-input v-model="text" type="text" placeholder="Name Suffix" />
            </div>
            <b-form-input v-model="text" type="text" placeholder="Office" />
            <b-form-input v-model="text" type="text" placeholder="Service" />
            <b-form-input v-model="text" type="text" placeholder="Division" />
        </div>
    </div>
</div>
</template>

<script>
import Navbar from './layout/Navbar'
export default {
    name: 'EditAccount',
    components: {
        Navbar
    }
}
</script>