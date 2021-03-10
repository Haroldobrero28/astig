<template>
    <div>
        <router-link to="account">Account</router-link>
        <h1>HOME</h1>
        <router-view/>
    </div>
    
</template>

<script>
export default {
    name: 'Home'
}
</script>