<script setup></script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-24 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="@/assets/vue-crm.png"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Зарегистрироваться
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Почта</label
          >
          <div class="mt-2">
            <input
              type="email"
              autocomplete="email"
              required
              class="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Пароль</label
            >

          </div>
          <div class="mt-2">
            <input
                
              type="password"
              autocomplete="current-password"
              required
              class="text-center block w-full rounded-md border-0 py-1.5 text-gray-900
               shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            for="password"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Повторите пароль</label
          >
          <div class="mt-2">
            <input
              type="password"
              autocomplete="current-password"
              required
              class="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>


        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md
             bg-purple-500 px-3 py-1.5 text-sm font-semibold 
             leading-6 text-white shadow-sm hover:bg-purple-600
             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-indigo-600"
          >
            Войти
          </button>
        </div>
      </form>

      <div class="mt-10 text-center text-sm text-gray-500">
        Есть аккаунт?
        <p
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          <RouterLink :to="{ name: 'login' }">Войти в систему </RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>
