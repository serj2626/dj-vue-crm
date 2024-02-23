<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar bg-purple-500 px-64">
    <div class="flex flex-row justify-between justify-items-center pt-10 pb-10">
      <div>
        <RouterLink
          class="p-4 text-black bg-amber-300 border-2 border-slate-100 rounded-full"
          :to="{ name: 'home' }"
        >
          VUE-CRM
        </RouterLink>
      </div>

      <div>
        <RouterLink
          class="p-4 text-black bg-white border ms-3 border-slate-100 rounded-md"
          :to="{ name: 'login' }"
        >
          Войти
        </RouterLink>
        <RouterLink
          class="p-4 text-black bg-white border ms-3 border-slate-100 rounded-md"
          :to="{ name: 'signup' }"
        >
          Зарегистрироваться
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-exact-active {
  color: rgb(214, 0, 0);
}
</style>
