import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

    const state = reactive({
        isloading: false,
        isAuthenticated: false,
        token: '',

    })




    function initialStore() {
        if (localStorage.getItem('token')) {
            state.isAuthenticated = true
            state.token = localStorage.getItem('token')
        }
    }

    function setIsLoading(state, status) {
        state.isloading = status
    }

    function setToken(state, token) {
        state.isAuthenticated = true
        state.token = token
        localStorage.setItem('token', token)
    }

    function removeToken(state) {
        state.isAuthenticated = false
        state.token = ''
        localStorage.removeItem('token')
    }

    return { state, initialStore, setIsLoading, setToken, removeToken }
})