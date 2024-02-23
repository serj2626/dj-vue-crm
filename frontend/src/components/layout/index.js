import Navbar from './Navbar.vue'



const components = [
    {
        name: 'Navbar',
        component: Navbar
    }
]


export default {
    install(app) {
        components.forEach(({ name, component }) => {
            app.component(name, component)
        })
    }
}
