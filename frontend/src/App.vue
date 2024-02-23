<script setup>
import { RouterView } from 'vue-router'
import { useUserStore }  from '@/stores/user'

const userStore = useUserStore();


userStore.initialStore()




</script>




<template>


    <Navbar />
    <main>
        <RouterView />
    </main>


</template>


<style scoped>


</style>