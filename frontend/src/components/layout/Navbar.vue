<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar bg-purple-500 px-64">
    <div class="centr    ">
      <div>
        <div class="flex flex-row align-middle">
          <RouterLink :to="{ name: 'home' }">
            <img src="@/assets/vue-crm.png" width="70px" height="70px" alt="" />
          </RouterLink>
          <div class="flex flex-col ">
            <h1 class="text-white font-bold">VUE-CRM</h1>
            <h1 class="text-white font-semibold">Work for fun</h1>
          </div>

        </div>
      </div>

      <div>
        <RouterLink class="p-4 text-black bg-white border ms-3 border-slate-100 rounded-md" :to="{ name: 'login' }">
          Войти
        </RouterLink>
        <RouterLink class="p-4 text-white bg-emerald-500 border ms-3 border-slate-100 rounded-md"
          :to="{ name: 'signup' }">
          Зарегистрироваться
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-exact-active {
  color: rgb(148, 8, 134);
}

.centr {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  ;
}
</style>
