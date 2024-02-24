<script setup>
import axios from 'axios';
import { RouterView } from 'vue-router'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore();


userStore.initialStore()

if (userStore.state.token) {
    axios.defaults.headers.common['Authorization'] = "Token " + userStore.state.token
} else {
    axios.defaults.headers.common['Authorization'] = ""
}




</script>




<template>
    <Navbar />
    <main>
        <RouterView />
    </main>
    <Footer />
</template>


<style scoped>

main{
    min-height: 80vh;
    background-color: #fafafa;
}
</style>